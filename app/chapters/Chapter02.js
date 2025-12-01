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
          Hip-hop wasn’t just music — it became language, identity, and
          rebellion. Graffiti turned city walls into canvases. Breakers spun on
          cardboard like gravity was optional. DJs transformed turntables into
          instruments.
        </motion.p>

        <motion.p
          style={{ marginTop: "1.4rem", lineHeight: "1.7" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          And emcees? They became journalists of the street — poets of struggle,
          narrators of joy, pain, pride, and possibility.
        </motion.p>

        <motion.p
          style={{ marginTop: "1.4rem", lineHeight: "1.7" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          As the culture spread, it morphed — and every city reinterpreted it.
          LA brought the gangsta swing. Atlanta added futuristic bounce.
          Chicago layered soul. London sharpened the edges. Tokyo polished the
          style.
        </motion.p>

        <motion.p
          style={{ marginTop: "1.4rem", lineHeight: "1.7" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
        >
          Hip-hop was no longer local — it was global. A pulse connecting
          communities continents apart. A movement shaped by the people, for the
          people, everywhere.
        </motion.p>
      </div>
    </Section>
  );
}
