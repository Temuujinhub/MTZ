import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Монголын Төмөр Зам - Mongolian Railway",
  description: "Монголын Төмөр Зам ТӨХК - Mongolian Railway JSC",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
