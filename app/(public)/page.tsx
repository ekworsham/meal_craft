import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "MealCraft Recipe Tracker",
  description:
    "MealCraft helps culinary enthusiasts organize recipes, manage ingredients, create shopping lists, and simplify meal planning.",
  keywords: [
    "recipes",
    "recipe tracker",
    "meal planning",
    "grocery lists",
    "cooking",
    "recipe management",
    "MealCraft",
  ],
  authors: [{ name: "Michael Rosser" }],
  creator: "MealCraft",
  openGraph: {
    title: "MealCraft Recipe Tracker",
    description:
      "Organize recipes, manage ingredients, and generate grocery lists with MealCraft.",
    images: ["/recipes.jpg"],
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-6">
        <h1 className="mb-4 text-5xl font-bold text-[#003566]">
          MealCraft Recipe Tracker
        </h1>

        <p className="mx-auto max-w-4xl text-lg ">
          MealCraft is a recipe management application designed for culinary
          enthusiasts who want to organize, store, update, and manage recipes
          online while simplifying meal planning and grocery shopping.
        </p>
      </section>

      {/* Hero Image */}
      <section className="flex justify-center">
        <Image
          src="/recipes.jpg"
          alt="Recipe Home image"
          width={900}
          height={500}
          className="rounded-lg shadow-lg"
          priority></Image>
      </section>

      {/* Welcome */}
      <section className="card p-8">
        <h2 className="mb-4 text-3xl font-bold text-[#003566]">
          Welcome to MealCraft
        </h2>

        <p className="text-lg leading-relaxed">
          MealCraft helps home cooks and culinary enthusiasts organize their
          favorite recipes, maintain personal cooking profiles, manage
          ingredients, create shopping lists, and keep recipes updated as their
          culinary skills grow. Everything you need to manage your kitchen is in
          one convenient location.
        </p>
      </section>

      {/* Features */}
      <section>
        <h2 className="mb-8 text-center text-3xl font-bold text-[#003566]">
          What You Can Do With MealCraft
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="card p-6">
            <h3 className="mb-3 text-xl font-semibold text-[#003566]">
              Create Your Profile
            </h3>

            <p>
              Build a personal profile that showcases your cooking interests,
              favorite recipes, and culinary journey.
            </p>
          </div>

          <div className="card p-6">
            <h3 className="mb-3 text-xl font-semibold text-[#003566]">
              Manage Recipes
            </h3>

            <p>
              Create, store, edit, and update recipes whenever you want. Keep
              all your favorite dishes organized in one place.
            </p>
          </div>

          <div className="card p-6">
            <h3 className="mb-3 text-xl font-semibold text-[#003566]">
              Store Ingredients
            </h3>

            <p>
              Track ingredients, preparation instructions, cooking times, and
              recipe details for every meal.
            </p>
          </div>

          <div className="card p-6">
            <h3 className="mb-3 text-xl font-semibold text-[#003566]">
              Grocery Lists
            </h3>

            <p>
              Automatically generate grocery shopping lists from selected
              recipes and save time during meal planning.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="card p-8">
        <h2 className="mb-8 text-center text-3xl font-bold text-[#003566]">
          How MealCraft Works
        </h2>

        <div className="grid gap-8 md:grid-cols-4">
          <div className="text-center">
            <div className="mb-3 text-4xl font-bold text-[#C44D00]">1</div>
            <h3 className="font-semibold">Create an Account</h3>
            <p className="mt-2 text-sm">
              Register and get started with your personal recipe management
              space.
            </p>
          </div>

          <div className="text-center">
            <div className="mb-3 text-4xl font-bold text-[#C44D00]">2</div>
            <h3 className="font-semibold">Build Your Profile</h3>
            <p className="mt-2 text-sm">
              Add information about yourself and customize your cooking profile.
            </p>
          </div>

          <div className="text-center">
            <div className="mb-3 text-4xl font-bold text-[#C44D00]">3</div>
            <h3 className="font-semibold">Create Recipes</h3>
            <p className="mt-2 text-sm">
              Save new recipes, update existing ones, and organize your
              collection.
            </p>
          </div>

          <div className="text-center">
            <div className="mb-3 text-4xl font-bold text-[#C44D00]">4</div>
            <h3 className="font-semibold">Generate Shopping Lists</h3>
            <p className="mt-2 text-sm">
              Select recipes and automatically create grocery lists for your
              next meal.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section>
        <h2 className="mb-8 text-center text-3xl font-bold text-[#003566]">
          Why Choose MealCraft?
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="card p-6 text-center">
            <h3 className="mb-2 text-2xl font-bold text-[#003566]">
              Organized
            </h3>

            <p>
              Keep all your recipes and cooking information in one centralized
              location.
            </p>
          </div>

          <div className="card p-6 text-center">
            <h3 className="mb-2 text-2xl font-bold text-[#003566]">
              Efficient
            </h3>

            <p>
              Quickly update recipes and generate shopping lists without
              manually tracking ingredients.
            </p>
          </div>

          <div className="card p-6 text-center">
            <h3 className="mb-2 text-2xl font-bold text-[#003566]">
              Convenient
            </h3>

            <p>
              Access your recipes, profile, and meal planning tools from a
              single application.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}