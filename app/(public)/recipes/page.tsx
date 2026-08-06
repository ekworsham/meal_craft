import Link from "next/link";
import { auth } from "@/auth";
import { getRecipes } from "@/lib/recipe-db";
import DeleteRecipeButton from "@/components/DeleteRecipeButton";

export default async function RecipesPage() {
  const session = await auth();
  const isLoggedIn = !!session?.user;
  const recipes = await getRecipes();

  return (
    <main className="max-w-4xl mx-auto p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Recipes</h1>

        <div className="flex gap-3">
          <Link
            href="/recipes/myRecipes"
            className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
          >
            My Recipes
          </Link>

          {isLoggedIn ? (
            <Link
              href="/recipes/new"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Add Recipe
            </Link>
          ) : (
            <Link
              href="/login"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Sign in to Add Recipe
            </Link>
          )}
        </div>
      </div>

      {!isLoggedIn ? (
        <p className="mb-6 rounded border border-blue-200 bg-blue-50 px-4 py-3 text-sm text-blue-800">
          You must be signed in to edit a recipe.
        </p>
      ) : null}

      <div className="space-y-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="border rounded-lg shadow p-6 bg-white"
          >
            <h2 className="text-2xl font-semibold mb-2">
              {recipe.title}
            </h2>

            <p className="text-gray-700 mb-6">
              {recipe.instructions}
            </p>

            <div className="flex gap-3">
              <Link
                href={`/recipes/${recipe.id}`}
                className="bg-gray-600 text-white px-4 py-2 rounded"
              >
                View
              </Link>

              {isLoggedIn ? (
                <Link
                  href={`/recipes/${recipe.id}/edit`}
                  className="bg-yellow-500 text-white px-4 py-2 rounded"
                >
                  Edit
                </Link>
              ) : (
                <Link
                  href="/login"
                  className="bg-yellow-500 text-white px-4 py-2 rounded"
                >
                  Sign in to Edit
                </Link>
              )}

              <DeleteRecipeButton id={recipe.id} />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
















// 'use client';

// import { useActionState } from 'react';
// import { createRecipe, type State } from '@/lib/actions';

// const initialState: State = {
//   message: null,
//   errors: {},
// };

// export default function RecipesPage() {
//   const [state, formAction, isPending] =
//     useActionState(createRecipe, initialState);

//   return (
//     <main className="max-w-5xl mx-auto p-6">
//       <h1 className="text-3xl font-bold text-slate-800 mb-8">Create Recipe</h1>

//       <form action={formAction} className="bg-white rounded-lg shadow-md p-8 space-y-6">
//         <div className="space-y-2">
//           <label htmlFor="date" className="block text-sm font-medium text-slate-700">Recipe Date</label>
//           <input
//             id="date"
//             name="date"
//             type="date" 
//             className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
//             aria-describedby="date-error"
//             required 
//           />
//           <div id="date-error" aria-live="polite" aria-atomic="true">
//             {state.errors?.date?.map((error) => (
//               <p key={error} className="mt-1 text-sm text-red-600">
//                 {error}
//               </p>
//             ))}
//           </div>
//         </div>
//       </form>
//     </main>
//   );
// }