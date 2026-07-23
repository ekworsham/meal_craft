import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="mb-4 text-4xl font-bold">
          MealCraft Recipe Tracker
        </h1>

        <p className="text-lg text-gray-600">
          MealCraft is a recipe management application built for culinary enthusiasts who want to organize, store, and manage recipes online.
        </p>
      </section>

      <section className="flex justify-center">
        <Image
          src="/recipes.jpg"
          alt="Recipe Home image"
          width={900}
          height={500}
          className="rounded-lg shadow-lg"
          priority></Image>
      </section>
      <section className="card">
        <h2 className="mb-3 text-2xl font=semibold">
          Welcome
        </h2>

        <p>
          The application provides user account management, recipe management functionality, and automatic shopping list generation based on selected recipes.
        </p>
      </section>
    </div>
  );
}