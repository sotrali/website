import Link from "next/link";

import Layout from "../../components/main-layout.js";

import styles from "../../styles/layout.module.css";
import utilStyles from "../../styles/utils.module.css";

// Main Component
export default function Home() {
  return (
    <Layout pageID={"blog"}>
      <br />
      <br />
      <br />
      <Link
        href='posts/pitfalls-of-arch-on-macbook'
        className={utilStyles.blogLink}
      >
        The Pitfalls of installing Arch Linux on a MacBook Air 2015
      </Link>
      <hr className={utilStyles.lightHr} />
      <Link href='tests/' className={utilStyles.blogLink}>
        My React Sandbox
      </Link>
      <br />
      <br />
      <br />
    </Layout>
  );
}
