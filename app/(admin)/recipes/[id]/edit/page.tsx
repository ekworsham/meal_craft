// recipes/[id]/edit/page.tsx
import { auth } from "@/auth";
import { getRecipeById } from "@/lib/recipe-db";
import { editRecipe } from "@/lib/actions";
import { redirect } from "next/navigation";

export default async function EditRecipePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  const { id } = await params;

  const recipe = await getRecipeById(Number(id));

  if (!recipe) {
    return <p>Recipe not found.</p>;
  }

  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">
        Edit Recipe
      </h1>

      <form action={editRecipe.bind(null, recipe.id)}>
        <label htmlFor="title">Title</label>

        <input
          id="title"
          name="title"
          defaultValue={recipe.title}
          className="border p-2 w-full mb-4"
        />

        <label htmlFor="instructions">Instructions</label>

        <textarea
          id="instructions"
          name="instructions"
          defaultValue={recipe.instructions}
          className="border p-2 w-full mb-4"
        />

        <button
          type="submit"
          className="bg-blue-300 !text-black font-bold px-4 py-2 rounded hover:bg-blue-700 hover:!text-white"
        >
          Update Recipe
        </button>
      </form>
    </main>
  );
}