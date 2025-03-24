import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

function PageHeader({ pageID }) {
  // Determine what page nav link should be italicized
  let title = "Welcome";

  if (pageID === "projects") {
    title = "Projects";
  } else if (pageID === "blog") {
    title = "Blog";
  } else if (pageID === "testimonials") {
    title = "Testimonials";
  } else if (pageID === "about") {
    title = "About";
  }

  return (
    <header style={{ marginBottom: "2rem" }}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        {pageID === "welcome" ? (
          <Link
            href="/"
            className="navLink-light"
            style={{ fontStyle: "italic", color: "#6e825a" }}
          >
            Home
          </Link>
        ) : (
          <Link href="/" className="navLink-light">
            Home
          </Link>
        )}

        {pageID === "projects" ? (
          <Link
            href="/projects"
            className="navLink-light"
            style={{ fontStyle: "italic", color: "#6e825a" }}
          >
            Projects
          </Link>
        ) : (
          <Link href="/projects" className="navLink-light">
            Projects
          </Link>
        )}

        {pageID === "blog" ? (
          <Link
            href="/blog"
            className="navLink-light"
            style={{ fontStyle: "italic", color: "#6e825a" }}
          >
            Blog
          </Link>
        ) : (
          <Link href="/blog" className="navLink-light">
            Blog
          </Link>
        )}

        {pageID === "testimonials" ? (
          <Link
            href="/testimonials"
            className="navLink-light"
            style={{ fontStyle: "italic", color: "#6e825a" }}
          >
            Testimonials
          </Link>
        ) : (
          <Link href="/testimonials" className="navLink-light">
            Testimonials
          </Link>
        )}

        {pageID === "about" ? (
          <Link
            href="/about"
            className="navLink-light"
            style={{ fontStyle: "italic", color: "#6e825a" }}
          >
            About
          </Link>
        ) : (
          <Link href="/about" className="navLink-light">
            About
          </Link>
        )}
      </div>

      <hr
        style={{
          color: "#6e825a",
          backgroundColor: "#6e825a",
          border: "1px solid #6e825a",
        }}
      />
    </header>
  );
}

function Footer() {
  return (
    <div style={{ paddingTop: ".25rem" }}>
      <hr
        style={{
          color: "#6e825a",
          backgroundColor: "#6e825a",
          border: "1px solid #6e825a",
        }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
        }}
      >
        <a
          href="https://www.linkedin.com/in/simon-o-shea/"
          target="_blank"
          title="Visit my LinkedIn"
          style={{ display: "inline-block", marginRight: "1rem" }}
        >
          <Image
            src="/linkedin.png"
            width={25}
            height={25}
            alt="linkedin logo"
            priority={true}
          ></Image>
        </a>

        <a
          href="https://github.com/sotrali"
          target="_blank"
          title="Visit my GitHub"
          style={{ display: "inline-block", marginRight: "1rem" }}
        >
          <Image
            src="/github.png"
            width={25}
            height={25}
            alt="github logo"
          ></Image>
        </a>

        <a
          href="/resume.pdf"
          target="_blank"
          title="View my resume"
          style={{ display: "inline-block", marginRight: "1rem" }}
        >
          <Image
            src="/resume.png"
            width={25}
            height={25}
            alt="resume icon"
          ></Image>
        </a>
      </div>
    </div>
  );
}

export default function Layout({ children, pageID }) {
  return (
    <div className={"container-light"}>
      <PageHeader pageID={pageID} />

      <main style={{ textAlign: "center" }}>{children}</main>

      <Footer />
    </div>
  );
}
