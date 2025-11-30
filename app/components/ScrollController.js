"use client";

import { useEffect } from "react";

export default function ScrollController() {
  useEffect(() => {
    const container = document.querySelector(".snap-container");

    function handleScroll(e) {
      // Allow browser to handle scrolling normally
    }

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return null;
}

