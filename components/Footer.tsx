export default function Footer() {
  return (
    <footer className="mt-auto bg-[#003566] text-white border-t border-white/10">
      <div className="page-container py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <div>
            <h3 className="text-lg font-bold text-white">
              Meal<span className="text-[#F77F00]">Craft</span>
            </h3>

            <p className="text-sm text-slate-300">
              Discover, Create & Share Amazing Recipes
            </p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm text-slate-300">
              © {new Date().getFullYear()} MealCraft. All rights reserved.
            </p>

            <p className="text-xs text-slate-400">
              Your Food Making Assistant
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}