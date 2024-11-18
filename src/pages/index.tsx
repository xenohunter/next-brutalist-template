import Head from "next/head";

import { WEBSITE_DESCRIPTION, WEBSITE_TITLE } from "@/constants";

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title content={WEBSITE_TITLE} />
        <meta name="descritpion" content={`${WEBSITE_TITLE}: ${WEBSITE_DESCRIPTION}`} />
      </Head>
      <h2>Your home page</h2>
      <p>Do whatever you want here!</p>
    </>
  );
}
