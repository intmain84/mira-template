"use client";

import { useScrollVisibility } from "@/hooks/useScrollVisibility";
import { ModalType } from "@/types/modal";

type NavbarProps = {
  className?: string;
  setModal?: (modal: ModalType) => void;
};

export default function Navbar({ className, setModal }: NavbarProps) {
  const { visible, isScrolled } = useScrollVisibility(); // Show/hide Navbar based on scroll position

  return (
    <nav
      className={`
        transition-transform duration-200 ease-in-out
        ${visible ? "translate-y-0" : "-translate-y-full"}
        // ${isScrolled ? "bg-red-500" : ""} Uncomment this line to change Navbar styles when scrolled
        ${className ?? ""}
      `}
    >
      <button
        onClick={() => setModal?.("login")} // Open the login modal
        className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600"
      >
        Open modal
      </button>
    </nav>
  );
}
