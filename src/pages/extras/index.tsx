import Head from "next/head";

import Link from "@/components/shared/Link";

export default function Extras(): JSX.Element {
  return (
    <>
      <Head>
        <title content="Extras" />
        <meta name="descritpion" content="Various projects" />
      </Head>
      <h2>Extras</h2>
      <ul>
        {extras.map((item) => (
          <li key={item.title}>
            <Link href={item.href}>{item.title}</Link>: {item.description}
          </li>
        ))}
      </ul>
    </>
  );
}

const extras = [
  {
    title: "Your example project",
    description: "something you made for fun",
    href: "/extras/example",
  },
];
