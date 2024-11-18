"use client";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { RootLayout } from "@/pages/_app";

import "@/global-styles/01-reset.css";
import "@/global-styles/02-global.css";
import "@/global-styles/03-custom-vars.css";
import "@/global-styles/04-custom-styles.css";

/**
 * This file duplicates a lot of code from src/pages/_app.tsx as I didn't find a quick solution for that.
 * The fonts are not connected here since they only load with a delay, so the font defaults to monospace.
 */
export default function NotFoundLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang="en">
      <body style={{ fontFamily: "monospace" }}>
        <RootLayout>
          <Analytics />
          <SpeedInsights />
          {children}
        </RootLayout>
      </body>
    </html>
  );
}
