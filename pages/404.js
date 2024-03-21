import styles from "../styles/layout.module.css";
import Link from "next/link";

import Layout from "../components/main-layout.js";

export default function Custom404() {
  return (
    <Layout>
      <h1 style={{ padding: "8rem 0" }}>404 - not found</h1>
    </Layout>
  );
}
