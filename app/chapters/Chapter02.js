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

