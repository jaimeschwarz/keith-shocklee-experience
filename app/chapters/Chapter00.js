"use client";

import Section from "../components/Section";
import { motion } from "framer-motion";

export default function Chapter00() {
  return (
    <Section id="chapter-00" snap={true}>
      <div style={{ maxWidth: "900px", textAlign: "center" }}>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          The Beginning
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          style={{ marginTop: "2rem", lineHeight: "1.7" }}
        >
          Before the world knew his name, Keith Shocklee was just a kid from
          Roosevelt, Long Island — fascinated by sound. He wasn’t chasing fame.
          He wasn’t trying to become a producer. He was hunting vibrations:
          radio hiss, needle crackle, speaker hum, the raw electricity of music
          shaping itself inside a basement.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 1 }}
          style={{ marginTop: "1.4rem", lineHeight: "1.7" }}
        >
          Before there was Public Enemy or The Bomb Squad, there was{" "}
          <strong>Spectrum City</strong> — a Long Island DJ crew that approached
          sound like mechanics approached engines. Rebuild it. Break it. Push it
          harder. Make it do something no one has heard before.
        </motion.p>
      </div>
    </Section>
  );
}

