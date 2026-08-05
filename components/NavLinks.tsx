"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";

import { logout } from "@/lib/actions";

export default function NavLinks() {
  const pathname = usePathname();
  const { status } = useSession();
 
  const linkClass = (href: string) =>
    pathname === href
      ? "text-[#F77F00] font-semibold"
      : "text-white hover:text-[#F77F00]";

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

      {status === "authenticated" ? (
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