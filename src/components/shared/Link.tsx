import NextLink from "next/link";

type LinkProps = {
  href: string;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  noUnderline?: boolean;
};

export default function Link({ href, children, onClick, noUnderline = false }: LinkProps): JSX.Element {
  // TODO : Add your domain name here
  if (href.includes("TODO : Add your domain name here")) {
    throw new Error("Internal links do not require the domain name");
  }

  const isExternal = href.startsWith("http") || href.startsWith("mailto");

  return (
    <NextLink
      href={href}
      target={isExternal ? "_blank" : undefined}
      onClick={onClick}
      style={noUnderline ? { textDecoration: "none" } : {}}
    >
      {children}
    </NextLink>
  );
}
