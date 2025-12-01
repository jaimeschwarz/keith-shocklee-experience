export const metadata = {
  title: "Keith Shocklee Experience",
  description: "Journey of Keith Shocklee from Spectrum City to MRKD.dj",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}

