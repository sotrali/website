import Layout from "../../components/tests-layout";
import Head from "next/head";
import Link from "next/link";

import utilStyles from "../../styles/utils.module.css";

import { useRouter } from "next/navigation";

export default function welcome() {
  const router = useRouter();

  function buttonClick() {
    let input = prompt("enter the password:");

    if (input === "password") {
      router.push("/tests/hidden");
    } else if (input === "" || input === null) {
      alert(
        "at least give it a shot! \nhint: password is hidden on this page somewhere"
      );
    } else
      alert(
        "better luck next time :( \nhint: password is hidden on this page somewhere"
      );
  }

  return (
    <Layout home={true} id={0}>
      <Head></Head>

      <div>
        <p>
          This "sandbox" is a sub-section of my site where I experiement with
          web development. It started as a directory of javascript files for the
          little challenges and exercises found at the end of the lessons in the{" "}
          <a href='https://react.dev/learn/describing-the-ui' target='_blank'>
            React documentation
          </a>
          .
          <br /> <br />
          Since then, it has grown into a space where I put test pages and
          approach my site with a more casual attitude. The fancy styling and
          stuff found in the rest of my website is the result of me playing with
          React in this sandbox.
          <br />
          <br />
          For example, the table of contents found below was my first attempt at
          making a custom collapsible section of text. That concept was then
          expanded on until I had an animated component to{" "}
          <Link href='projects/'>display my projects</Link> in, which was then
          was turned into a hamburger menu for the primary section of my site.
          Feel free to look around! Can you manage to crack the password below?
          <br />
          <br />
        </p>
        <br />
        <span onClick={buttonClick}>
          <button className={utilStyles.medButton}>Click me?</button>
        </span>
        <p style={{ color: "whitesmoke", marginTop: "0", textAlign: "center" }}>
          password is: password
        </p>
      </div>
    </Layout>
  );
}

function Button({ onClick, children }) {
  return (
    <div style={{ textAlign: "center" }}>
      <button onClick={onClick} style={{ marginBottom: "2em" }}>
        {children}
      </button>
    </div>
  );
}
