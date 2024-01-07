import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import styles from "../styles/layout.module.css";
import utilStyles from "../styles/utils.module.css";

import Collapsible from "../components/Collapsible.js";
import { useState } from "react";

function NavLinks() {
  return (
    <>
      <hr />
      <div className={utilStyles.spread}>
        <Link href='/'>
          <button className={utilStyles.medButton}>Home Page</button>
        </Link>
        <Link href='/projects'>
          <button className={utilStyles.medButton}>My Projects</button>
        </Link>
        <Link href='/info'>
          <button className={utilStyles.medButton}>About Me</button>
        </Link>
      </div>
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Link href='/tests/weatherAPI'>
          <button className={utilStyles.medButton} style={{ height: "3rem" }}>
            Check the Weather!
          </button>
        </Link>
      </div>
    </>
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
          <button className='menuButton' style={{ padding: "0" }}>
            {/** padding: 0 is to keep mobile text alignment proper */}
            Menu
          </button>
        </span>

        <h1 className={utilStyles.heading2Xl}>{pageHeader}</h1>
      </div>
      <Collapsible isExpanded={showMenu}>
        <NavLinks />
      </Collapsible>
      <hr />
    </header>
  );
}

function Footer() {
  return (
    <div>
      <hr />
      <div className={utilStyles.spread} style={{ paddingTop: ".25rem" }}>
        <a href='https://www.linkedin.com/in/simon-o-shea/'>
          <button className={utilStyles.medButton}>My LinkedIn</button>
        </a>
        <a href='https://github.com/osheas1atwit'>
          <button className={utilStyles.medButton}>My Github</button>
        </a>

        <div style={{ display: "block" }}>
          <Link href='resume.pdf'>
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
