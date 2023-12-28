import Layout from "../../components/tests-layout";
import Head from "next/head";

import utilStyles from "../../styles/utils.module.css";

import { useRouter } from "next/navigation";

export default function welcome() {
  const router = useRouter();

  function buttonClick() {
    let input = prompt("enter the password:");

    if (input === "password") {
      router.push("/tests/hidden");
    } else if (input === "" || input === null) {
      alert("at least give it a shot!");
    } else
      alert(
        "better luck next time :( \nhint: password is hidden on this page somewhere"
      );
  }

  return (
    <Layout home={true} id={0}>
      <Head></Head>

      <div>
        <h3>You found me?!</h3>
        <p>
          This is a very secret collection of pages...
          <br />
          <br />
          You are reading the index page of a 'hidden' directory that contains
          my code for the little challenges and exercises found at the end of
          the lessons in the{" "}
          <a href='https://react.dev/learn/describing-the-ui' target='_blank'>
            React documentation
          </a>
          .
          <br />
          <br />
          This is where I experiment and toy with React. Despite having used
          React for part of a school project, I wanted to go back through the
          documentation thoroughly and try all the exercises. It has been quite
          a bit of fun!
        </p>
        <br />
        <button onClick={buttonClick} className={utilStyles.medButton}>
          Click me?
        </button>
        <p style={{ color: "whitesmoke", marginTop: "0", textAlign: "center" }}>
          password: password
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
