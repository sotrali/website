import Link from "next/link";

import Layout from "../components/main-layout.js";

import styles from "../styles/layout.module.css";
import utilStyles from "../styles/utils.module.css";

// Main Component
export default function Home() {
  return (
    <Layout pageID={"welcome"}>
      <p
        className={utilStyles.headingXl}
        style={{
          color: "rgb(110, 130, 90)",
          fontSize: "2rem",
          lineHeight: "1.3",
          fontWeight: "800",
          letterspacing: "-0.05rem",
          margin: "2rem 0 1rem 0",
        }}
      >
        Welcome.
      </p>
      <p style={{ fontSize: "1em", marginTop: "0", marginBottom: "2rem" }}>
        My name is Simon O'Shea, and this is my website.
        <br />
        <br />
        Based in Boston, I am a web developer,
        <br />
        Salesforce consultant, and aspiring
        <br />
        full-stack software engineer.
        <br />
        <br />
        My passions include connecting with
        <br />
        others, software, skateboarding, and
        <br />
        continuing to grow as a person.
      </p>
    </Layout>
  );
}
