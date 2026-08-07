import type { Session } from "next-auth";
import Logo from "./logo";

import NavLinks from "./NavLinks";

type HeaderProps = {
  session: Session | null;
};

export default function Header({ session }: HeaderProps) {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <header className="bg-primary text-white shadow-md border-b border-white/10">
      <div className="page-container flex flex-col gap-4 py-5 md:flex-row md:items-center md:justify-between">
        <div>
          <Logo />
          <h1 className="text-3xl font-bold text-white">
            Meal<span className="text-[#ffa900]">Craft</span>
          </h1>

          <p className="text-sm text-slate-200">
            Discover, Create & Share Amazing Recipes
          </p>

          <p className="text-xs text-slate-300 mt-1">
            {today}
          </p>
        </div>

        <NavLinks session={session} />
      </div>
    </header>
  );
}