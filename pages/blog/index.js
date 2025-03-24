import Layout from "../../components/main-layout.js";
import Link from "next/link";
import utilStyles from "../../styles/utils.module.css";

function Post({ title, link, date }) {
  return (
    <div style={{ textAlign: "left", margin: "0rem 2rem 1rem 2rem" }}>
      <Link href={link} className={utilStyles.blogLink}>
        {title}
      </Link>
      <br />
      <div className={utilStyles.blogDate}>Posted {date}</div>
    </div>
  );
}

// Main Component
export default function Home() {
  return (
    <Layout pageID={"blog"}>
      <Post
        title="One Year of Salesforce"
        link="blog/one-year-of-salesforce"
        date="March 2025"
      />
      <Post
        title="Simple DIY Poster Frame"
        link="blog/diy-poster-frame"
        date="December 2024"
      />
      <Post
        title="Booting from USB with GRUB"
        link="blog/boot-USB-from-GRUB"
        date="August 2024"
      />
      <Post
        title="A Light Guide for Installing Arch Linux on a MacBook Air 2015"
        link="blog/light-guide-for-installing-arch-on-macbook"
        date="March 2024"
      />
      <Post title="My React Sandbox" link="tests/" date="???" />
      <br />
    </Layout>
  );
}
