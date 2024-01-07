import Link from "next/link";

import Layout from "../components/main-layout.js";

import styles from "../styles/layout.module.css";
import utilStyles from "../styles/utils.module.css";

// Main Component
export default function Home() {
  return (
    <Layout pageID={"welcome"}>
      <p className={utilStyles.headingXl}>Welcome,</p>
      <p style={{ fontSize: "1em", marginTop: "0" }}>
        my name is Simon O'Shea. <br />
        <br />
        Based in Boston, I am a web developer
        <br />
        and an aspiring full-stack software engineer.
        <br />
        <br />
        My passions include connecting with
        <br />
        others, crafting great software, and
        <br />
        continuing to grow as a person.
        <br />
      </p>
      <div className={utilStyles.spread}>
        <Link href='tests' className={utilStyles.hidden}>
          i am secret!
        </Link>
      </div>
    </Layout>
  );
}
