import Head from "next/head";
import Preface from "./Preface.mdx";

export default function About(): JSX.Element {
  return (
    <>
      <Head>
        <title content="About" />
        <meta name="descritpion" content="The page with some info about me" />
      </Head>
      <h2>About</h2>
      <Preface />
    </>
  );
}
