import type { NextPage } from "next";
import type { AppProps } from "next/app";
import type { ReactNode } from "react";

import type { Childful } from "@/types";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import {
  Anonymous_Pro as AnonymousPro,
  Overpass_Mono as OverpassMono,
  Roboto_Mono as RobotoMono,
} from "next/font/google";

import DefaultLayout from "@/components/layouts/DefaultLayout";

import "@/global-styles/01-reset.css";
import "@/global-styles/02-global.css";
import "@/global-styles/03-custom-vars.css";
import "@/global-styles/04-custom-styles.css";

// Overpass Mono is good but it has weird ligatures: ff, fi, fl, etc. Keep that in mind.
const anonymousPro = AnonymousPro({ subsets: ["latin"], weight: ["400"] });
const overpassMono = OverpassMono({ subsets: ["latin", "cyrillic"] });
const robotoMono = RobotoMono({ subsets: ["latin"] });

const fontStyleRules = `
html { font-family: ${anonymousPro.style.fontFamily}; }
header, h1, h2, h3, h4, h5, h6 { font-family: ${overpassMono.style.fontFamily}; }
pre, code { font-family: ${robotoMono.style.fontFamily}; }
`;

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout: (page: JSX.Element) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export function RootLayout({ children }: Childful): JSX.Element {
  return <DefaultLayout>{children}</DefaultLayout>;
}

const getDefaultLayout = (page: ReactNode): ReactNode => {
  return <RootLayout>{page}</RootLayout>;
};

export default function App({ Component, pageProps }: AppPropsWithLayout): ReactNode {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? getDefaultLayout;

  return getLayout(
    <>
      <style jsx global>
        {fontStyleRules}
      </style>
      <Analytics />
      <SpeedInsights />
      <Component {...pageProps} />
    </>,
  );
}
