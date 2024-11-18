import Head from "next/head";

export default function Now(): JSX.Element {
  return (
    <>
      <Head>
        <title content="Now" />
        <meta name="descritpion" content="What I'm up to right now" />
      </Head>
      <h2>What I&apos;m up to right now</h2>
      <p>
        <em>Last updated on INSERT YOUR DATE</em>
      </p>
      <br />
      <ul>
        <li>Tell everyone what you&apos;re after right now</li>
      </ul>
    </>
  );
}
