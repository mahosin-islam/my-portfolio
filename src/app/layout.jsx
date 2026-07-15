import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SplashProvider from "./components/SplashProvider";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mahosin - Full Stack Developer",
  description: "I build responsive, user-friendly web applications with React, Node.js, and MongoDB.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0B1120]`}>
        <SplashProvider>

          {children}
        </SplashProvider>

      </body>
    </html>
  );
}