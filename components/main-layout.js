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
      <Link href='/' className={styles.navLink2}>
        Home
      </Link>

      <Link href='/projects' className={styles.navLink2}>
        Projects
      </Link>

      <Link href='/posts' className={styles.navLink2}>
        Blog
      </Link>

      <Link href='/testimonials' className={styles.navLink2}>
        Testimonials
      </Link>

      <Link href='/info' className={styles.navLink2}>
        About
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
  if (pageID === "testimonials") {
    title = "Simon O'Shea - Testimonials";
    pageHeader = "Testimonials";
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
      <div style={{ paddingTop: ".25rem" }}>

        <a href='https://www.linkedin.com/in/simon-o-shea/' target='_blank' title="Visit my LinkedIn">
          <Image src="/linkedin.png" width={25} height={25} alt="linkedin logo"></Image>
        </a>

        <a href='https://github.com/osheas1atwit' target='_blank' title="Visit my GitHub">
          <Image src="/github.png" width={25} height={25} alt="github logo"></Image>
        </a>

        <a href='/resume.pdf' target='_blank' title="View my resume">
          <Image src="/resume.png" width={25} height={25} alt="resume icon"></Image>
        </a>
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
