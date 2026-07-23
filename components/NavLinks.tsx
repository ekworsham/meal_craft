"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks() {
    const pathname = usePathname();
    return (
        <nav className="max-w-4xl mx-auto px-4">
            <ul className="flex gap-6">
                <li>
                    <Link
                        href="/"
                        className={
                            pathname === "/"
                                ? "font-semibold text-yellow-300"
                                : "text-white hover:text-yellow-200"
                        }
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        href="/login"
                        className={
                            pathname === "/login"
                                ? "font-semibold text-yellow-300"
                                : "text-white hover:text-yellow-200"
                        }
                    >Login</Link>
                </li>
                <li>
                <Link
                    href="/aboutUS"
                    className={
                        pathname === "/aboutUS"
                            ? "font-semibold text-yellow-300"
                            : "text-white hover:text-yellow-200"
                    }
                >About Us
                    </Link>
                    </li>
            </ul>
        </nav>
    );
}