"use client";

import { useScrollVisibility } from "@/hooks/useScrollVisibility";

export default function Navbar({ className }: { className?: string }) {
  const { visible, isScrolled } = useScrollVisibility();

  return (
    <nav
      className={`
        transition-transform duration-200 ease-in-out
        ${visible ? "translate-y-0" : "-translate-y-full"}
        // ${isScrolled ? "bg-red-500" : ""} Uncomment this line to change Navbar styles when scrolled
        ${className ?? ""}
      `}
    >
      Navbar
    </nav>
  );
}
