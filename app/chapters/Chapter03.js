"use client";

import Section from "../components/Section";
import { motion } from "framer-motion";

export default function Chapter03() {
  return (
    <Section id="chapter-03" snap={false}>
      <div style={{ maxWidth: "900px" }}>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          The Movement
        </motion.h1>

        <motion.p
          style={{ marginTop: "2rem", lineHeight: "1.7" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          And then came <strong>Public Enemy</strong> — the most politically charged,
          socially explosive force hip-hop had ever witnessed. At the epicenter
          of that seismic sound stood Keith Shocklee.
        </motion.p>

        <motion.p
          style={{ marginTop: "1.4rem", lineHeight: "1.7" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
        >
          Tracks like <strong>“Rebel Without a Pause”</strong>,{" "}
          <strong>“Bring the Noise”</strong>, and{" "}
          <strong>“Fight the Power”</strong> didn’t just move bodies —
          they moved history. They shook governments.
        </motion.p>

        <motion.p
          style={{ marginTop: "1.4rem", lineHeight: "1.7" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 1 }}
        >
          Keith wasn’t producing music — he was producing <em>momentum</em>. His sound was urgency.
          His beats were activism. His work became the rhythm of revolution.
        </motion.p>

      </div>
    </Section>
  );
}
