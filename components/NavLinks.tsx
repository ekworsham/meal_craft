"use client";

import type { Session } from "next-auth";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { logout } from "@/lib/actions";

type NavLinksProps = {
  session: Session | null;
};

export default function NavLinks({ session }: NavLinksProps) {
  const pathname = usePathname();

  const linkClass = (href: string) =>
    pathname === href
      ? "text-[orange] font-semibold"
      : "text-white hover:text-[orange]";

  return (
    <ul className="flex items-center gap-6 text-sm font-medium">
      <li>
        <Link href="/" className={linkClass("/")}>
          Home
        </Link>
      </li>

      <li>
        <Link href="/recipes" className={linkClass("/recipes")}>
          Recipes
        </Link>
      </li>

      {session ? (
        <li>
          <form action={logout}>
            <button
              type="submit"
              className="text-white hover:text-[#F77F00]"
            >
              Sign Out
            </button>
          </form>
        </li>
      ) : (
        <li>
          <Link href="/login" className={linkClass("/login")}>
            Login
          </Link>
        </li>
      )}
    </ul>
  );
}