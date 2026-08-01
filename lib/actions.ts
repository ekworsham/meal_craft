'use server';
import { z } from "zod";
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import {
  addRecipes,
  updateRecipe,
  deleteRecipe,
} from '@/lib/recipe-db';

const RecipeSchema = z.object({
  title: z
    .string()
    .trim()
    .min(1, "Title is required")
    .max(255, "Title must be 255 characters or less"),

  instructions: z
    .string()
    .trim()
    .min(1, "Instructions are required"),
});

export async function createRecipe(formData: FormData) {
  const validatedFields = RecipeSchema.safeParse({
    title: formData.get("title"),
    instructions: formData.get("instructions"),
  });

  if (!validatedFields.success) {
    throw new Error("Invalid recipe data.");
  }

  await addRecipes(validatedFields.data);

  revalidatePath("/recipes");
  redirect("/recipes");
}

export async function editRecipe(id: number, formData: FormData) {
  const validatedFields = RecipeSchema.safeParse({
    title: formData.get("title"),
    instructions: formData.get("instructions"),
  });

  if (!validatedFields.success) {
    throw new Error("Invalid recipe data.");
  }

  await updateRecipe(id, validatedFields.data);

  revalidatePath("/recipes");
  redirect("/recipes");
}

export async function removeRecipe(id: number) {
  await deleteRecipe(id);

  revalidatePath('/recipes');
}