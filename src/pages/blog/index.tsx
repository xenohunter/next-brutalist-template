import Head from "next/head";

import Link from "@/components/shared/Link";
import { NextPageWithLayout, RootLayout } from "@/pages/_app";
import PlaceholderPost from "./placeholder-post/Content.mdx";
import PlaceholderPostTitle from "./placeholder-post/Title.mdx";

const Blog: NextPageWithLayout = (): JSX.Element => {
  // TODO : iterate over the existing posts and put most of them behind "Read more" links

  return (
    <>
      <Head>
        <title content="Blog" />
        <meta name="descritpion" content="Blog posts" />
      </Head>
      <h2>Recent posts</h2>
      <hr />
      <Link href="/blog/placeholder-post">
        <PlaceholderPostTitle />
      </Link>
      <PlaceholderPost />
    </>
  );
};

Blog.getLayout = (page) => (
  <RootLayout>
    <div>{page}</div>
  </RootLayout>
);

export default Blog;
