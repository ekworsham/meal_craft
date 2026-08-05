'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { auth, signIn, signOut } from '@/auth';
import { AuthError } from 'next-auth';
import bcrypt from 'bcryptjs';
import { neon } from '@neondatabase/serverless';

import {
  addRecipes,
  updateRecipe,
  deleteRecipe,
} from '@/lib/recipe-db';

const sql = neon(process.env.DATABASE_URL!);

async function requireAuthenticatedUser() {
  const session = await auth();

  if (!session?.user) {
    return null;
  }

  return session.user;
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    await signIn('credentials', {
      email: formData.get('email'),
      password: formData.get('password'),
      redirectTo: '/recipes',
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid email or password.';
        default:
          return 'Something went wrong.';
      }
    }

    throw error;
  }
}

export async function logout() {
  await signOut({
    redirectTo: "/",
  });
}

const CreateUserSchema = z.object({
  name: z.string().trim().min(1, 'Name is required.'),
  email: z.string().trim().email('Enter a valid email address.'),
  password: z
    .string()
    .min(6, 'Password must contain at least 6 characters.'),
});

export async function createUser(
  prevState: string | undefined,
  formData: FormData
): Promise<string> {
  const validatedFields = CreateUserSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
  });

  if (!validatedFields.success) {
    return (
      validatedFields.error.issues[0]?.message ??
      'Invalid account information.'
    );
  }

  const { name, email, password } = validatedFields.data;

  try {
    const existingUsers = await sql`
      SELECT id
      FROM users
      WHERE LOWER(email) = LOWER(${email})
      LIMIT 1
    `;

    if (existingUsers.length > 0) {
      return 'An account with this email already exists.';
    }

    const passwordHash = await bcrypt.hash(password, 10);

    await sql`
      INSERT INTO users (name, email, password_hash)
      VALUES (${name}, ${email.toLowerCase()}, ${passwordHash})
    `;

    return 'Account created successfully. You can now sign in.';
  } catch (error) {
    console.error('Failed to create account:', error);
    return 'Unable to create your account. Please try again.';
  }
}

const RecipeSchema = z.object({
  title: z
    .string()
    .trim()
    .min(1, 'Title is required')
    .max(255, 'Title must be 255 characters or less'),

  instructions: z
    .string()
    .trim()
    .min(1, 'Instructions are required'),
});

export async function createRecipe(formData: FormData) {
  const user = await requireAuthenticatedUser();

  if (!user) {
    throw new Error('You must be signed in to add a recipe.');
  }

  const validatedFields = RecipeSchema.safeParse({
    title: formData.get('title'),
    instructions: formData.get('instructions'),
  });

  if (!validatedFields.success) {
    throw new Error('Invalid recipe data.');
  }

  await addRecipes(validatedFields.data);

  revalidatePath('/recipes');
  redirect('/recipes');
}

export async function editRecipe(id: number, formData: FormData) {
  const user = await requireAuthenticatedUser();

  if (!user) {
    throw new Error('You must be signed in to edit a recipe.');
  }

  const validatedFields = RecipeSchema.safeParse({
    title: formData.get('title'),
    instructions: formData.get('instructions'),
  });

  if (!validatedFields.success) {
    throw new Error('Invalid recipe data.');
  }

  await updateRecipe(id, validatedFields.data);

  revalidatePath('/recipes');
  redirect('/recipes');
}

export async function removeRecipe(
  id: number,
  prevState: string | undefined
): Promise<string | undefined> {
  void prevState;

  const user = await requireAuthenticatedUser();

  if (!user) {
    return "You must be signed in to delete a recipe.";
  }

  await deleteRecipe(id);

  revalidatePath("/recipes");

  return "Recipe deleted successfully.";
}