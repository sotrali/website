import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import styles from "../styles/layout.module.css";



function PageHeader({ pageID }) {
  // Determine what page nav link should be italicized
  let title = "Welcome";

  let onHome = false;
  let onProjects = false;
  let onBlog = false;
  let onTestimonials = false;
  let onAbout = false;

  if (pageID === "welcome") {
    onHome = true;
  }
  if (pageID === "projects") {
    title = "Projects";
    onProjects = true;
  }
  if (pageID === "blog") {
    title = "Blog";
    onBlog = true;
  }
  if (pageID === "testimonials") {
    title = "Testimonials";
    onTestimonials = true;
  }
  if (pageID === "about") {
    title = "About";
    onAbout = true;
  }


  return (
    <header>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <title>{title}</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Link href='/' className="navLink" style={{ fontStyle: onHome && "italic" }}>
          Home
        </Link>

        <Link href='/projects' className="navLink" style={{ fontStyle: onProjects && "italic" }}>
          Projects
        </Link>

        <Link href='/posts' className="navLink" style={{ fontStyle: onBlog && "italic" }}>
          Blog
        </Link>

        <Link href='/testimonials' className="navLink" style={{ fontStyle: onTestimonials && "italic" }}>
          Testimonials
        </Link>

        <Link href='/about' className="navLink" style={{ fontStyle: onAbout && "italic" }}>
          About
        </Link>
      </div>

      <hr
        style={{
          color: "gray",
          backgroundColor: "gray",
          border: "1px solid gray",
        }}
      />
    </header >
  );
}

function Footer({ pageID }) {
  return (
    <div style={{ paddingTop: ".25rem" }}>
      <hr style={{
        color: "gray",
        backgroundColor: "gray",
        border: "1px solid gray",
      }} />
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ lineHeight: "0px" }}>

          <a href='https://www.linkedin.com/in/simon-o-shea/' target='_blank' title="Visit my LinkedIn" style={{ paddingRight: "1rem" }}>
            <Image src="/linkedin.png" width={25} height={25} alt="linkedin logo"></Image>
          </a>

          <a href='https://github.com/osheas1atwit' target='_blank' title="Visit my GitHub" style={{ paddingRight: "1rem" }}>
            <Image src="/github.png" width={25} height={25} alt="github logo"></Image>
          </a>

          <a href='/resume.pdf' target='_blank' title="View my resume">
            <Image src="/resume.png" width={25} height={25} alt="resume icon"></Image>
          </a>
        </div>
        <div>

          {/*   could put something here in footer on opposite side of links    */}

        </div>
      </div>
    </div>
  );
}

export default function Layout({ children, pageID }) {
  return (
    <div className={styles.container}>
      <PageHeader pageID={pageID} />

      <main style={{ textAlign: "center" }}>{children}</main>

      <Footer pageID={pageID} />
    </div>
  );
}
