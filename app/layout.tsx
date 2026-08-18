import type { Metadata } from "next";
import { IntroOverlay } from "@/components/IntroOverlay";
import "./globals.css";
import "./archive-calibration.css";

export const metadata: Metadata = {
  title: "Silvia Zheng — Fashion & PR",
  description: "Fashion designer and brand marketing strategist.",
  icons: { icon: "/favicon.svg" },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body><IntroOverlay />{children}</body></html>; }
