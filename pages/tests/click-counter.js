import React, { useState } from "react";
import ReactDOM from "react-dom";
import Layout from "../../components/tests-layout";

import utilStyles from "../../styles/utils.module.css";

export default function App({ date }) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [count, setCount] = useState(0);

  function onCountChange(byValue) {
    setCount(count + byValue);
    setCurrentDate(new Date());
  }

  function formatDate() {
    const hour = currentDate.getHours();
    const minute = currentDate.getMinutes();
    const second = currentDate.getSeconds();

    return `${hour}:${minute}:${second}`;
  }

  const prettyDate = formatDate();

  return (
    <Layout id={6}>
      <h1>Click Time!</h1>
      <div className={utilStyles.card} style={{ textAlign: "center" }}>
        <h3>
          You clicked {count} times, last time at {prettyDate}!
        </h3>
        <button onClick={() => onCountChange(-1)}>Decrement</button>{" "}
        <button onClick={() => onCountChange(1)}>Increment</button>
        <br />
        <br />
        <a
          href='https://medium.com/@vitalyb/react-hooks-better-without-nested-functions-9ff6876a7f2c'
          target='_blank'
          className={utilStyles.secondaryLink}
        >
          source
        </a>
      </div>
    </Layout>
  );
}
