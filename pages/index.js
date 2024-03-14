import Link from "next/link";

import Layout from "../components/main-layout.js";

import styles from "../styles/layout.module.css";
import utilStyles from "../styles/utils.module.css";

// Main Component
export default function Home() {
  return (
    <Layout pageID={"welcome"}>
      <p className={utilStyles.headingXl}>Welcome.</p>
      <p style={{ fontSize: "1em", marginTop: "0" }}>
        My name is Simon O'Shea, and this is my website.
        <br />
        <br />
        Based in Boston, I am a web developer
        <br />
        and aspiring full-stack software engineer.
        <br />
        <br />
        My passions include connecting with
        <br />
        others, great software, skateboarding, and
        <br />
        continuing to grow as a person.
        <br />
        <br />
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <Link href='/projects'>
            Projects
          </Link>
          <Link href='recommendations'>
            Recommendations
          </Link>
          <Link href='/info'>
            More About Me
          </Link>
        </div>
      </p>
    </Layout>
  );
}
