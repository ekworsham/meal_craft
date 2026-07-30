"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/login", label: "Login" },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex items-center gap-6 text-sm font-medium">
        {links.map((link) => {
          const isActive = pathname === link.href;

            return (
                <li key={link.href}>
                <Link
              href={link.href} className={`transition-colors duration-200 ${
                  isActive
                    ? "font-semibold text-[#F77F00] border-b-2 border-[#F77F00] pb-1"
                    : "text-white hover:text-[#0077B6]"
                }`}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}