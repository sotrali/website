import Layout from "../components/main-layout.js";
import utilStyles from "../styles/utils.module.css";

export default function PostLayout({
  title,
  postedMonthYear,
  children,
  lastModified,
}) {
  return (
    <div id={"top"}>
      <Layout pageID={"blog"}>
        <h1
          className={utilStyles.blogLink}
          style={{ fontSize: "2rem", marginBottom: "0", paddingBottom: "0" }}
        >
          {title}
        </h1>
        <div className={utilStyles.blogDate} style={{ fontStyle: "italic" }}>
          - Posted {postedMonthYear} -
        </div>
        {children}
        <br />
        <br />
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            fontSize: ".7rem",
            textAlign: "center",
          }}
        >
          <span>
            <a href="/blog">back to posts</a>
          </span>
          <span>last modified: {lastModified}</span>
          <span>
            <a href="#top">back to top</a>
          </span>
        </div>
      </Layout>
    </div>
  );
}
