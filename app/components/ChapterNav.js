"use client";

import { useEffect, useState } from "react";

export default function ChapterNav() {
  const chapterIds = [
    "chapter-00",
    "chapter-01",
    "chapter-02",
    "chapter-03",
    "chapter-04",
    "chapter-05",
    "chapter-06",
    "chapter-07",
  ];

  const [active, setActive] = useState("chapter-00");

  useEffect(() => {
    function onScroll() {
      const mid = window.innerHeight / 2;

      for (const id of chapterIds) {
        const el = document.getElementById(id);
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        const inView = rect.top <= mid && rect.bottom >= mid;

        if (inView) {
          setActive(id);
          break;
        }
      }
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function goToChapter(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="chapter-nav">
      {chapterIds.map((id) => (
        <button
          key={id}
          className={active === id ? "active" : ""}
          onClick={() => goToChapter(

