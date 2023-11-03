import Link from "next/link";
import Layout from "../../components/tests-layout";
import styles from "../../styles/layout.module.css";

export default function main() {
  return (
    <div className={styles.container}>
      <p style={{ textAlign: "center" }}>
        wow!! you found the extra secret page!
        <br />
        what are you, a pen tester?
      </p>

      <hr />
      <Link href='/tests'>bring me back</Link>
    </div>
  );
}
