import Layout from "../components/main-layout.js";
import utilStyles from "../styles/utils.module.css";

// Main Component
export default function Home() {
  return (
    <Layout pageID={"welcome"}>
      <p
        className={utilStyles.headingXl}
        style={{
          color: "#6E825A",
          fontSize: "2rem",
          lineHeight: "1.3",
          fontWeight: "800",
          letterspacing: "-0.05rem",
          marginBottom: "1rem",
        }}
      >
        Welcome.
      </p>
      <p style={{ fontSize: "1em", marginTop: "0", marginBottom: "2rem" }}>
        My name is Simon O'Shea, I am a software
        <br />
        engineer living in Boston.
        <br />
        <br />
        I enjoy working with computers, skateboarding,
        <br />
        making stuff, and connecting with others.
        <br />
        <br />
        I'm glad you're here, please take a look around.
      </p>
    </Layout>
  );
}
