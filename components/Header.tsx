import NavLinks from "./NavLinks";

export default function Header() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <header className="bg-sky-900 text-white shadow">
      <div className="page-container flex items-center justify-between py-4">
        <div>
          <h1 className="text-2xl font-bold">
            Welcome to MealCraft your Food making assistant
          </h1>
          <p className="text-sm opacity-90">{today}</p>
        </div>

        <NavLinks />
      </div>
    </header>
  );
}