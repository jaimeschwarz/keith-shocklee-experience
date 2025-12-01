"use client";

export default function ChapterNav({ active, goToChapter }) {
  const chapters = [
    { id: 0, label: "Prologue" },
    { id: 1, label: "Chapter 1" },
    { id: 2, label: "Chapter 2" },
    { id: 3, label: "Chapter 3" },
    { id: 4, label: "Chapter 4" },
    { id: 5, label: "Chapter 5" },
    { id: 6, label: "Chapter 6" },
    { id: 7, label: "Epilogue" }
  ];

  return (
    <nav
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "1rem",
        justifyContent: "center",
        padding: "1rem",
        background: "#000",
        color: "#fff",
        position: "sticky",
        top: 0,
        zIndex: 10,
      }}
    >
      {chapters.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => goToChapter(id)}
          style={{
            padding: "0.6rem 1.2rem",
            borderRadius: "6px",
            border: "1px solid #444",
            background: active === id ? "#fff" : "#111",
            color: active === id ? "#000" : "#fff",
            cursor: "pointer",
            fontWeight: active === id ? "700" : "400",
            textTransform: "uppercase",
            fontSize: "0.75rem",
            letterSpacing: "0.05em",
          }}
        >
          {label}
        </button>
      ))}
    </nav>
  );
}
