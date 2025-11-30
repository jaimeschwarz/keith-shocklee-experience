"use client";

export default function Section({ id, snap = true, children }) {
  return (
    <section
      id={id}
      style={{
        scrollSnapAlign: snap ? "start" : "none",
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "4rem",
        position: "relative",
      }}
    >
      {children}
    </section>
  );
}

