import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Layout from "../components/main-layout.js";

import styles from "../styles/layout.module.css";
import utilStyles from "../styles/utils.module.css";

import { useState } from "react";

function Welcome() {
  return <></>;
}

function Footer() {
  return (
    <>
      <hr />
      <div className={utilStyles.spread}>
        <Link href='tests' className={utilStyles.hidden}>
          i am secret
        </Link>
      </div>
    </>
  );
}

// Main Function
export default function Home() {
  return (
    <Layout id={"welcome"}>
      <p className={utilStyles.headingLg}>
        <i>
          <b>Welcome!</b>
        </i>
      </p>
      <p style={{ fontSize: "1.2em" }}>
        This is my personal website, feel free to look around and learn more
        about me.
        <br />
        <br />
        Can you find the secret link on this page?
        <br />
      </p>

      <Footer />
    </Layout>
  );
}
