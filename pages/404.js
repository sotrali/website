import styles from "../styles/layout.module.css";
import Link from "next/link";

export default function Custom404() {
  return (
    <div className={styles.container} style={{ textAlign: "center" }}>
      <h1>404 - not found</h1>
      <Link href='/'>home</Link>
    </div>
  );
}
