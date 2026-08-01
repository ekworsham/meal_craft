import RecipeCard from "@/components/RecipeCard";
import { getRecipes } from "@/lib/recipe-db";

export default async function RecipesPage() {
  const recipes = await getRecipes();

  return (
    <main className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">
        Browse Recipes
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
          />
        ))}
      </div>
    </main>
  );
}