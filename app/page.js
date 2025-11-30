"use client";

import "./globals.css";

import Chapter00 from "./chapters/Chapter00";
import Chapter01 from "./chapters/Chapter01";
import Chapter02 from "./chapters/Chapter02";
import Chapter03 from "./chapters/Chapter03";
import Chapter04 from "./chapters/Chapter04";
import Chapter05 from "./chapters/Chapter05";
import Chapter06 from "./chapters/Chapter06";
import Chapter07 from "./chapters/Chapter07";

import ScrollController from "./components/ScrollController";
import ChapterNav from "./components/ChapterNav";
import NoiseOverlay from "./components/NoiseOverlay";

export default function Home() {
  return (
    <main className="snap-container">
      <NoiseOverlay />
      <ScrollController />
      <ChapterNav />

      <Chapter00 />
      <Chapter01 />
      <Chapter02 />
      <Chapter03 />
      <Chapter04 />
      <Chapter05 />
      <Chapter06 />
      <Chapter07 />
    </main>
  );
}

