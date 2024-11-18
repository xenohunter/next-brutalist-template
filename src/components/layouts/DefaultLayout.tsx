import type { Childful } from "@/types";

import Footer from "../static/Footer";
import Header from "../static/Header";

import styles from "./DefaultLayout.module.css";

export default function DefaultLayout({ children }: Childful): JSX.Element {
  return (
    <>
      <div className={styles.defaultLayout}>
        <Header />
        <main className={styles.mainContainer}>{children}</main>
        <hr />
        <Footer />
      </div>
      <div className="debug-grid"></div>
    </>
  );
}
