import { createRecipe } from "@/lib/actions";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function NewRecipePage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Add New Recipe</h1>

      <form action={createRecipe} className="space-y-4">

        <div>
          <label htmlFor="title" className="block font-medium">
            Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            className="w-full border rounded p-2"
            required
          />
        </div>

        <div>
          <label htmlFor="instructions" className="block font-medium">
            Instructions
          </label>

          <textarea
            id="instructions"
            name="instructions"
            rows={6}
            className="w-full border rounded p-2"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Save Recipe
        </button>

      </form>
    </main>
  );
}