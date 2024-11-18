import Link from "@/components/shared/Link";
import { GITHUB_LINK, LINKEDIN_LINK, PATREON_LINK, SUBSTACK_LINK, TWITTER_LINK } from "@/constants";

import styles from "./Footer.module.css";

export default function Footer(): JSX.Element {
  return (
    <footer>
      <span>&copy; Your Name {new Date().getFullYear()}</span>
      <span>&nbsp;· </span>
      <span className={styles.links}>
        <Link href={TWITTER_LINK}>Twitter</Link>
        <span>&nbsp;· </span>
        <Link href={GITHUB_LINK}>GitHub</Link>
        <span>&nbsp;· </span>
        <Link href={SUBSTACK_LINK}>Substack</Link>
        <span>&nbsp;· </span>
        <Link href={LINKEDIN_LINK}>LinkedIn</Link>
        <span>&nbsp;· </span>
        <Link href={PATREON_LINK}>Patreon</Link>
      </span>
    </footer>
  );
}
