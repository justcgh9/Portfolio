"use client";
import Link from "next/link";
import { HeaderButtonProps } from "@/types";
import { usePathname } from "next/navigation";

export default function HeaderButton({ route, children }: HeaderButtonProps) {
  const pathname = usePathname();
  const isActive = pathname === route;

  return (
    <>
      <Link href={isActive ? "#" : route}>
        <button
          className={`font-bold py-2 px-4 rounded ${
            isActive
              ? "bg-gray-500 text-gray-300 cursor-not-allowed"
              : "bg-green-500 hover:bg-green-700 text-white"
          }`}
          disabled={isActive}
        >
          {children}
        </button>
      </Link>
    </>
  );
}
