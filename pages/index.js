import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Layout from "../components/main-layout.js";

import styles from "../styles/layout.module.css";
import utilStyles from "../styles/utils.module.css";

import { useState } from "react";

// Main Component
export default function Home() {
  return (
    <Layout id={"welcome"}>
      <p className={utilStyles.headingXl}>Welcome,</p>
      <p style={{ fontSize: "1em", marginTop: "0" }}>
        my name is Simon O'Shea. <br />
        <br />
        Based in Boston, I am an aspiring full-stack <br /> software engineer
        and part-time web developer.
        <br />
        <br />
        I am passionate about connecting with others, <br /> crafting great
        software, and living life to its fullest.
        <br />
      </p>
      <div className={utilStyles.spread}>
        <Link href='tests' className={utilStyles.hidden}>
          i am secret!
        </Link>
      </div>{" "}
    </Layout>
  );
}
