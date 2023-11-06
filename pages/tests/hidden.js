import Link from "next/link";
import Layout from "../../components/tests-layout";
import styles from "../../styles/layout.module.css";

export default function main() {
  return (
    <div className={styles.container}>
      <p style={{ textAlign: "center" }}>
        wow!! you found the extra secret page!
        <br />
        I've gotta figure out what to put here.
        <br />
        <br />
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='mailto:vesspa0330@gmail.com?subject=Hidden Page Suggestion'
        >
          suggest something
        </a>
      </p>

      <hr />
      <Link href='/tests'>bring me back</Link>
    </div>
  );
}
