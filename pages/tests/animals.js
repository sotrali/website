import { useState } from "react";
import Layout from "../../components/tests-layout.js";

import utilStyles from "../../styles/utils.module.css";

export default function main() {
  const [imageLink, setNewLink] = useState(0);

  async function handleLink(type) {
    const url =
      "https://shibe.online/api/" + type + "?count=1&urls=true&httpsUrls=true";

    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setNewLink(data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Layout id={7}>
      <h1>Animal Image API</h1>
      <div className={utilStyles.card} style={{ textAlign: "center" }}>
        <img src={imageLink}></img>
        <br />
        <button
          onClick={() => handleLink("birds")}
          className={utilStyles.bigButton}
        >
          new bird!
        </button>
        <button
          onClick={() => handleLink("cats")}
          className={utilStyles.bigButton}
        >
          new cat!
        </button>
        <button
          onClick={() => handleLink("shibes")}
          className={utilStyles.bigButton}
        >
          new shiba inu!
        </button>
      </div>
      <a href='https://shibe.online/'>API source</a>
    </Layout>
  );
}
