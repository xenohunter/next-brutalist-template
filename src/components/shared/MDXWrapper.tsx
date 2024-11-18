import type { Childful } from "@/types";

type MDXWrapperProps = Childful;

export default function MDXWrapper({ children }: MDXWrapperProps): JSX.Element {
  return <div>{children}</div>;
}
