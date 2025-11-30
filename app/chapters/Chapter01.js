"use client";

import Section from "../components/Section";
import { motion } from "framer-motion";

export default function Chapter01() {
  return (
    <Section id="chapter-01" snap={true}>
      <div style={{ maxWidth: "900px" }}>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          When I Fell in Love
        </motion.h1>

        <motion.p
          style={{ marginTop: "2rem", lineHeight: "1.7" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Every legend begins with a moment — a spark. For Keith Shocklee, it
          wasn’t a spotlight or a stage. It was the raw hypnotic pulse of a
          breakbeat echoing through a basement party in Roosevelt, Long Island.
        </motion.p>

        <motion.p
          style={{ marginTop: "1.4rem", lineHeight: "1.7" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          The rhythm didn’t ask permission. It took over. It rearranged his DNA.
          A single loop held the power to freeze a room, lift the floor, and
          shift the future. From that night forward, Keith wasn’t just hearing
          music — he was *feeling architecture*.
        </motion.p>

        <motion.p
          style={{ marginTop: "1.4rem", lineHeight: "1.7" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 1 }}
        >
          His ears became his compass. Every snare was a blueprint. Every bass
          line was a message. Every record held a universe waiting to be
          re-shaped. In that moment, Keith Shocklee didn’t discover hip-hop —
          hip-hop discovered *him*.
        </motion.p>
      </div>
    </Section>
  );
}

