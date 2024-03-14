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
        <Link href='/projects'>
          <button className={utilStyles.medButton} style={{ height: "2.5rem" }}>
            My <br />
            Projects
          </button>
        </Link>
        <br />
        <br />
        Based in Boston, I am a web developer
        <br />
        and aspiring full-stack software engineer.
        <br />
        <br />
        <Link href='recommendations'>
          <button
            className={utilStyles.medButton}
            style={{ width: "9rem", height: "2.5rem" }}
          >
            Professional <br /> Recommendations
          </button>
        </Link>
        <br />
        <br />
        My passions include connecting with
        <br />
        others, crafting great software, and
        <br />
        continuing to grow as a person.
        <br />
        <br />
        <Link href='/info'>
          <button className={utilStyles.medButton} style={{ height: "2.5rem" }}>
            More <br /> About Me
          </button>
        </Link>
      </p>
    </Layout>
  );
}
