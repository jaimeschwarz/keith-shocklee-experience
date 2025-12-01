"use client";

import { motion } from "framer-motion";

export default function Chapter02() {
  return (
    <section
      style={{
        width: "100%",
        minHeight: "100vh",
        padding: "4rem 2rem",
        boxSizing: "border-box",
        background: "#000",
        color: "#fff",
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          fontSize: "3rem",
          fontWeight: "800",
          marginBottom: "2rem",
          textTransform: "uppercase",
          letterSpacing: "0.05em",
        }}
      >
        Spectrum City
        <br />
        <span style={{ fontSize: "2rem", fontWeight: 400 }}>
          The Frequency That Started It All
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{ lineHeight: 1.6, maxWidth: "720px", marginBottom: "1.4rem" }}
      >
        Before the world knew the name “The Bomb Squad,” Keith Shocklee was already
        shaping the DNA of hip-hop. Spectrum City wasn’t just a DJ crew — it was a
        laboratory, a rebel broadcast, a frequency bouncing off the walls of Long
        Island housing projects and ricocheting into the future.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.35 }}
        style={{ lineHeight: 1.6, maxWidth: "720px", marginBottom: "1.4rem" }}
      >
        Keith, Hank, Chuck, and the crew were obsessed with one question:
        <br />
        <strong>“What else can sound do?”</strong>
        <br />
        While most DJs were extending the breakbeat, Keith was breaking the idea of
        what music could be — stacking noise, tones, crashes, sirens, fragments of
        television static, and records nobody else wanted to touch.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        style={{ lineHeight: 1.6, maxWidth: "720px", marginBottom: "1.4rem" }}
      >
        Spectrum City wasn’t chasing perfection. They were chasing impact. They
        chased the moment the crowd’s eyes widened — the moment a sound ripped a
        hole in the room and something new poured in.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.65 }}
        style={{ lineHeight: 1.6, maxWidth: "720px", marginBottom: "3rem" }}
      >
        That energy would become the foundation for one of the most influential
        production collectives on Earth. But here, in Spectrum City, it was still
        raw — still forming — still dangerous.
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.75 }}
        style={{
          fontSize: "2.2rem",
          fontWeight: "700",
          marginBottom: "1.4rem",
          textTransform: "uppercase",
          letterSpacing: "0.04em",
        }}
      >
        Birth of a Sonic Revolution
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        style={{ lineHeight: 1.6, maxWidth: "720px", marginBottom: "1.4rem" }}
      >
        Spectrum City wasn’t a hobby — it was training. It was endurance. It was
        hours spent in basements layering and relayering sound until it created
        something no one had ever heard before.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.05 }}
        style={{ lineHeight: 1.6, maxWidth: "720px", marginBottom: "1.4rem" }}
      >
        Keith didn’t just mix records — he weaponized them. And that philosophy
        would carry directly into the next chapter, when Spectrum City transformed
        into The Bomb Squad, and hip-hop would never be the same again.
      </motion.p>
    </section>
  );
}
"use client";

import Section from "../components/Section";
import { motion } from "framer-motion";

export default function Chapter02() {
  return (
    <Section id="chapter-02" snap={false}>
      <div style={{ maxWidth: "900px" }}>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          The Culture
        </motion.h1>

        <motion.p
          style={{ marginTop: "2rem", lineHeight: "1.7" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          Hip-hop was expanding, mutating, reinventing itself — and Keith
          Shocklee was evolving even faster. Alongside Hank Shocklee, Chuck D,
          and Eric “Vietnam” Sadler, Keith helped architect the most explosive,
          layered, sonic blueprint the world had ever heard.
        </motion.p>

        <motion.p
          style={{ marginTop: "1.4rem", lineHeight: "1.7" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
        >
          They didn’t just sample records; they *re-engineered* them. Up to 80
          samples in a single track, stacked like a skyscraper of rhythm.
          Sirens, scratches, speeches, noise, melody — colliding until chaos
          became precision.
        </motion.p>

        <motion.p
          style={{ marginTop: "1.4rem", li

