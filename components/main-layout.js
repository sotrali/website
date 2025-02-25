import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import styles from "../styles/layout.module.css";
import utilStyles from "../styles/utils.module.css";

import BurgerMenu from "../components/Collapsible.js";
import { useState } from "react";

function NavLinks() {
  return (
    <div className={styles.linkStack}>
      <Link href='/' className={styles.navLink}>
        Home Page
      </Link>

      <Link href='/projects' className={styles.navLink}>
        My Projects
      </Link>

      <Link href='recommendations' className={styles.navLink}>
        Professional <br /> Recommendations
      </Link>

      <Link href='/info' className={styles.navLink}>
        About Me
      </Link>

      <Link href='tests' className={styles.navLink}>
        Sandbox
      </Link>

      <Link href='/tests/weatherAPI' className={styles.navLink}>
        Weather API
      </Link>
    </div>
  );
}

function PageHeader({ pageID }) {
  // Determine what page title/head information should be displayed
  let title = "Simon O'Shea - Welcome";
  let pageHeader = "Home";
  if (pageID === "info") {
    title = "Simon O'Shea - Info";
    pageHeader = "About Me";
  }
  if (pageID === "projects") {
    title = "Simon O'Shea - Projects";
    pageHeader = "My Projects";
  }
  if (pageID === "recommendations") {
    title = "Simon O'Shea - Recommendations";
    pageHeader = "Recommendations";
  }

  const [showMenu, setShowMenu] = useState(false);

  function handleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <header>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <title>{title}</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <div className={styles.header}>
        <span onClick={handleMenu}>
          <div className={styles.burgerButtons}>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
          </div>
        </span>

        <h1 className={styles.pageHeader}>{pageHeader}</h1>
      </div>

      <BurgerMenu isExpanded={showMenu} isOverlay={"true"}>
        <NavLinks />
      </BurgerMenu>

      <hr
        style={{
          color: "gray",
          backgroundColor: "gray",
          border: "1px solid gray",
        }}
      />
    </header>
  );
}

function Footer() {
  return (
    <div>
      <hr />
      <div className={utilStyles.spread} style={{ paddingTop: ".25rem" }}>
        <a href='https://www.linkedin.com/in/simon-o-shea/' target='_blank'>
          <button className={utilStyles.medButton}>My LinkedIn</button>
        </a>
        <a href='https://github.com/osheas1atwit' target='_blank'>
          <button className={utilStyles.medButton}>My Github</button>
        </a>

        <div style={{ display: "block" }}>
          <Link href='resume.pdf' target='_blank'>
            <button className={utilStyles.medButton}>
              <div
                className={utilStyles.tooltip}
                style={{ textDecoration: "none", cursor: "pointer" }}
              >
                My Resume
              </div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Layout({ children, pageID }) {
  return (
    <div className={styles.container}>
      <PageHeader pageID={pageID} />

      <main style={{ textAlign: "center" }}>{children}</main>

      <Footer />
    </div>
  );
}
