import Link from "next/link";
import { getRecipeById } from "@/lib/recipe-db";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function RecipePage({ params }: PageProps) {
  const { id } = await params;

  const recipe = await getRecipeById(Number(id));

  if (!recipe) {
    return <h1>Recipe not found.</h1>;
  }

  return (
    <main className="max-w-3xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">
        {recipe.title}
      </h1>

      <div className="border rounded-lg shadow p-6 bg-white">
        <h2 className="text-xl font-semibold mb-4">
          Instructions
        </h2>

        <p>{recipe.instructions}</p>
      </div>

      <div className="mt-8">
        <Link
          href="/recipes"
          className="inline-block bg-gray-600 text-white px-6 py-3 rounded hover:bg-gray-700"
        >
          ← Back to Recipes
        </Link>
      </div>
    </main>
);
}