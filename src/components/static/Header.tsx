import type { Childful } from "@/types";

import cn from "clsx";

import Link from "@/components/shared/Link";
import { ThemeSwitcher } from "@/components/static/ThemeSwitcher";
import { WEBSITE_DESCRIPTION, WEBSITE_TITLE } from "@/constants";

import styles from "./Header.module.css";

export default function Header(): JSX.Element {
  return (
    <header>
      <table className="header">
        <tbody>
          <tr>
            <td colSpan={2} rowSpan={2} className="width-auto">
              <Link href="/" noUnderline>
                <h1 className="title">{WEBSITE_TITLE}</h1>
              </Link>
              <span className="subtitle">{WEBSITE_DESCRIPTION}</span>
            </td>
            <th className={cn(styles.noPadding, styles.columnMenu)}>
              <CellButton href="/blog">Blog</CellButton>
            </th>
          </tr>

          <tr>
            <th className={cn(styles.noPadding, styles.columnMenu)}>
              <CellButton href="/extras">Extras</CellButton>
            </th>
          </tr>

          <tr>
            <td className={cn("width-min", styles.noPadding)}>
              <ThemeSwitcher />
            </td>
            <td className="width-auto">
              by{" "}
              <Link href="/about">
                <cite>Your Name</cite>
              </Link>
            </td>
            <th className={cn("width-min", styles.noPadding, styles.columnMenu)}>
              <CellButton href="/now">Now</CellButton>
            </th>
          </tr>
        </tbody>
      </table>

      <label className="debug-toggle-label">
        <input
          type="checkbox"
          className="debug-toggle"
          onClick={() => {
            document.body.classList.toggle("debug");
          }}
        />{" "}
        Debug mode
      </label>
    </header>
  );
}

type CellButtonProps = Childful & {
  href: string;
};

function CellButton({ href, children }: CellButtonProps): JSX.Element {
  return (
    <Link href={href} noUnderline>
      <div className={styles.cellButton}>{children}</div>
    </Link>
  );
}
