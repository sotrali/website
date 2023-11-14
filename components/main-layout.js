import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import styles from "../styles/layout.module.css";
import utilStyles from "../styles/utils.module.css";

function NavLinks({ id }) {
  return (
    <>
      <hr />
      {id === "welcome" && (
        <div className={utilStyles.spread}>
          <Link href='/projects'>Projects & Experience</Link>

          <Link href='/info'>Info & Links</Link>
        </div>
      )}
      {id === "projects" && (
        <div className={utilStyles.spread}>
          <Link href='/'>Home</Link>

          <Link href='/info'>Info & Links</Link>
        </div>
      )}
      {id === "info" && (
        <div className={utilStyles.spread}>
          <Link href='/'>Home</Link>

          <Link href='/projects'>Projects & Experience</Link>
        </div>
      )}
    </>
  );
}

export default function Layout({ children, id }) {
  let title = "Simon O'Shea - Welcome";
  if (id === "info") title = "Simon O'Shea - Info";
  if (id === "projects") title = "Simon O'Shea - Projects";
  return (
    <div className={styles.container}>
      <Head>
        <link rel='icon' href='/favicon.ico' />

        <title>{title}</title>

        <meta name='viewport' content='width=divice-width, initial-scale=1' />
      </Head>

      <header className={styles.header}>
        <Image
          priority
          src='/headshot.png'
          className={utilStyles.borderCircle}
          height={80}
          width={80}
          alt='A nice photo of Simon'
          style={{ border: "solid black 1px" }}
        />

        {id === "welcome" && (
          <h1 className={utilStyles.heading2Xl}>Simon O'Shea</h1>
        )}
        {id === "projects" && (
          <h1 className={utilStyles.heading2Xl}>My Projects</h1>
        )}
        {id === "info" && <h1 className={utilStyles.heading2Xl}>About Me</h1>}
      </header>

      <NavLinks id={id} />

      <hr />

      <main style={{ textAlign: "center" }}>{children}</main>
    </div>
  );
}
