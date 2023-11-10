import Link from "next/link";
import Head from "next/head";
import { useState } from "react";

import { exerciseUrls as urls } from "../public/test_urls.js";
import utilStyles from "../styles/utils.module.css";
import styles from "../styles/tests.module.css";
import mainStyles from "../styles/layout.module.css";

function TableOfContents({ list, id, small = false }) {
  // call useState to receive our state variable and our set-function
  const [showTableOfContents, setShowTableOfContents] = useState(false);

  // create our own handle function to call the state-setter
  function handleShow() {
    // send in negated version of its current state to toggle
    setShowTableOfContents(!showTableOfContents);
  }

  return (
    <>
      <div className={small ? utilStyles.tocSmall : utilStyles.tocBig}>
        <p className={utilStyles.tocHead} onClick={handleShow}>
          {showTableOfContents ? "collapse" : "expand"} table of contents
        </p>

        {showTableOfContents && (
          <>
            <ol start={0}>
              {list.map((index) => (
                <li key={index.id}>
                  <Link href={index.url}>{index.title}</Link>
                  {id == index.id && " *"}
                </li>
              ))}
            </ol>
            <p style={{ fontSize: ".8em" }}>* denotes current page</p>
          </>
        )}
      </div>
    </>
  );
}

function PageNavButtons({ id }) {
  const hasNext = id < urls.length - 1;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "1em",
        marginTop: "1em",
      }}
    >
      {id > 1 ? (
        <Link href={urls[id - 1].url}>← Previous Page</Link>
      ) : id === 1 ? (
        <Link href='/tests'>← Back to Hidden Home</Link>
      ) : (
        <span></span>
      )}

      {id === 0 ? (
        <Link href={urls[id + 1].url}>Go to First Page →</Link>
      ) : hasNext ? (
        <Link href={urls[id + 1].url}>Next Page →</Link>
      ) : (
        <span style={{ fontSize: ".8em", alignSelf: "center" }}>
          (you are on the last page)
        </span>
      )}
    </div>
  );
}

function Footer({ home = false, id }) {
  return (
    <>
      <hr />
      {home && (
        <>
          <PageNavButtons id={id} />
          <TableOfContents list={urls} id={id} small={true} />
        </>
      )}
      {!home && (
        <>
          <PageNavButtons id={id} />
          <TableOfContents list={urls} id={id} small={true} />
        </>
      )}
    </>
  );
}

export default function Layout({ home = false, id = 0, children }) {
  let page = id.toString();
  let title = "Simon O'Shea - Test Page " + page;
  return (
    <div className={mainStyles.container}>
      <Head>
        <link rel='icon' href='/headshot.png' />
        <title>{title}</title>
      </Head>

      {/** display previous/next above page contents */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "1em",
          marginTop: "1em",
        }}
      >
        <span>
          <Link href='/'>← Back to Home</Link>
        </span>
        <span>
          page {id} of {urls.length - 1}
        </span>
      </div>

      <hr />

      {/** CHILDREN RENDERED HERE!!!!!!!!!!!!!!!!!!!!!!!!! */}
      <main style={{ textAlign: "center" }}>{children}</main>

      {!home && (
        <>
          <br />
          <hr />
          <div style={{ margin: "1em 0" }}>
            <i>
              <b>On this page</b>
            </i>
            : <br />
            {urls[id].description}
          </div>
        </>
      )}

      <Footer home={home} id={id} />
    </div>
  );
}
