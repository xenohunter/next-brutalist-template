import type { MDXComponents } from "mdx/types";
import Image from "next/image";

import Link from "@/components/shared/Link";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: (props) => {
      const { children, href } = props;
      if (typeof href !== "string") throw new Error("Link href must be a string");
      return <Link href={href}>{children}</Link>;
    },
    code: ({ children }) => {
      return (
        <code
          style={{
            backgroundColor: "rgba(120, 120, 120, 0.2)",
            padding: "0px 3px 1px",
            borderRadius: "3px",
          }}
        >
          {children}
        </code>
      );
    },
    img: ({ alt, src }) => {
      if (typeof alt !== "string") throw new Error("Image alt must be a string");
      if (typeof src !== "string") throw new Error("Image src must be a string");
      return <Image alt={alt} src={src} width={800} height={400} />; // TODO
    },
    wrapper: ({ children }) => <div>{children}</div>,
    ...components,
  };
}
