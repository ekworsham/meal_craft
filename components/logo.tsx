// components/Logo.tsx
import Image from "next/image";

export default function Logo() {
    return (
        <Image
            src="/chef.png"
            alt="MealCraft Logo"
            width={48}
            height={48}
        />
    );
}