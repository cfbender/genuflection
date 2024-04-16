import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Genuflection Day",
  description: "Calculate the date your parent is exactly twice your age.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ height: "100vh", width: "100vw" }}>
      <body
        style={{
          height: "100%",
          width: "100%",
          margin: 0,
          backgroundColor: "#1e1e2e",
        }}
      >
        {children}
      </body>
    </html>
  );
}
