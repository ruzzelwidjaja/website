import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from 'geist/font/sans';
import { ThemeProvider } from "@/components/theme-provider"


export const metadata: Metadata = {
  title: "Ruzzell Widjaja",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          // enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
