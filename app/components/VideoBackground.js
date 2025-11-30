"use client";

export default function VideoBackground({ src }) {
  return (
    <video
      className="video-bg"
      src={src}
      autoPlay
      muted
      loop
      playsInline
    />
  );
}

