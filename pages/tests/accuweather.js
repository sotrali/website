import { useState } from "react";

import Layout from "../../components/tests-layout.js";
import utilStyles from "../../styles/utils.module.css";
import utils from "../../components/utils.js";

export default function main() {
  const [location, setLocation] = useState("");
  const [condition, setCondition] = useState("");

  async function handleSubmit() {
    try {
      console.log(location);
      let locationUrl =
        "http://dataservice.accuweather.com/locations/v1/search?apikey=" +
        process.env.ACCUWEATHER_KEY +
        "&q=" +
        location;

      console.log("location URL: " + locationUrl);

      const response1 = await fetch(locationUrl);
      const data1 = await response1.json();

      let locationKey = data1[0].Key;
      console.log("accuweather location key: " + locationKey);

      let conditionUrl =
        "http://dataservice.accuweather.com/currentconditions/v1/" +
        locationKey +
        "?apikey=" +
        process.env.ACCUWEATHER_KEY;

      console.log("condition URL: " + conditionUrl);

      const response2 = await fetch(conditionUrl);
      const data2 = await response2.json();

      console.log(data2);

      let forecast =
        location + " is " + data2[0].WeatherText.toLowerCase() + " right now.";

      setCondition(forecast);
    } catch (err) {
      console.log(err);
      setCondition(
        "ERROR: Either you didn't type a location in, you mispelled something, or I have run out of API requests for the day :("
      );
    }
  }

  return (
    <Layout id={8}>
      <h1>Accuweather API Probe</h1>
      <div className={utilStyles.card} style={{ textAlign: "center" }}>
        <br />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <input
            placeholder='type location here'
            className={utilStyles.search}
            onChange={(e) => setLocation(e.target.value)}
          />
          <br />
          <button type='submit' className={utilStyles.bigButton}>
            get current conditions
          </button>
          <div style={{ marginTop: "1em" }}>
            <p>{condition}</p>
          </div>
        </form>
        <br />
        <br />
        <a
          href='https://developer.accuweather.com/'
          target='_blank'
          style={{ fontSize: "0.8rem" }}
        >
          API source
        </a>
      </div>
    </Layout>
  );
}
