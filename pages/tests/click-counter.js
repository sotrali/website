import React, { useState } from "react";
import ReactDOM from "react-dom";
import Layout from "../../components/tests-layout";

import utilStyles from "../../styles/utils.module.css";

export default function App({ date }) {
  const [bgColor, setBg] = useState("#b7ccb9");
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
  function getRandomLightColor() {
    let r = 150 + Math.round(100 * Math.random());
    let g = 150 + Math.round(100 * Math.random());
    let b = 150 + Math.round(100 * Math.random());
    return `rgb(${r}, ${g}, ${b})`;
  }

  function handleChangeColor() {
    console.log("clicked");
    setBg(getRandomLightColor());
    document.getElementById("clicker").style.backgroundColor = bgColor;
  }

  return (
    <Layout id={6}>
      <h1>Click Time!</h1>

      <div
        id='clicker'
        className={utilStyles.card}
        style={{ textAlign: "center" }}
      >
        <h3>
          You clicked {count} times, last time at {prettyDate}!
        </h3>
        <button
          onClick={() => onCountChange(-1)}
          className={utilStyles.bigButton}
        >
          Decrement
        </button>{" "}
        <button
          onClick={() => onCountChange(1)}
          className={utilStyles.bigButton}
        >
          Increment
        </button>
        <br />
        <br />
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleChangeColor();
          }}
          className={utilStyles.medButton}
        >
          Change Color
        </button>
        <br />
        <br />
        <br />
        <a
          href='https://medium.com/@vitalyb/react-hooks-better-without-nested-functions-9ff6876a7f2c'
          target='_blank'
          style={{ fontSize: "0.8rem" }}
        >
          source
        </a>
      </div>
    </Layout>
  );
}
