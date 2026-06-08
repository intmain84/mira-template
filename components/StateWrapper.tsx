"use client";

import Navbar from "./Navbar";
import { ModalType } from "@/types/modal";
import { useState } from "react";
import CallbackModal from "./modals/CallbackModal";

const StateWrapper = ({ children }: { children: React.ReactNode }) => {
  const [modal, setModal] = useState<ModalType | null>(null);
  return (
    <>
      <Navbar
        className="fixed top-0 inset-x-0 z-50 h-24 bg-black"
        setModal={setModal}
      />
      <main className="flex-1 pt-24">{children}</main>
      <footer>Footer</footer>
      <CallbackModal open={modal === "login"} setModal={setModal} />
    </>
  );
};

export default StateWrapper;
