"use client";

import { useEffect, useRef, useState } from "react";

export function useScrollVisibility() {
  const [visible, setVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;

      const shouldBeVisible = currentY < lastScrollY.current || currentY < 10;

      setVisible((prev) => (prev !== shouldBeVisible ? shouldBeVisible : prev));
      setIsScrolled(currentY > 10);

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return { visible, isScrolled };
}
