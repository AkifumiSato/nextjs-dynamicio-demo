import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js `dynamicIO` App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log("RootLayout render");

  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
