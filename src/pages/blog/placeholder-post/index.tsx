import Head from "next/head";

import Content from "./Content.mdx";
import Title from "./Title.mdx";

export default function BlogPost(): JSX.Element {
  return (
    <>
      <Head>
        <title content="Placeholder post title" />
        <meta name="descritpion" content="Blog post: Placeholder post title" />
      </Head>
      <Title />
      <Content />
    </>
  );
}
