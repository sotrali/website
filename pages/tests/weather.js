import { useState } from "react";

import Layout from "../../components/tests-layout.js";
import utilStyles from "../../styles/utils.module.css";
import utils from "../../components/utils.js";

export default function main() {
  const [location, setLocation] = useState("boston");
  const [condition, setCondition] = useState("(press button for forecast)");

  async function handleSubmit() {
    try {
      console.log(location);
      let locationUrl =
        "http://dataservice.accuweather.com/locations/v1/search?apikey=" +
        process.env.WEATHER_KEY +
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
        process.env.WEATHER_KEY;

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
        "error: either you mispelled something or i've run out of api requests for the day :("
      );
    }
  }

  return (
    <Layout id={8}>
      <div style={{ textAlign: "center" }}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <input
            placeholder={location}
            className={utilStyles.search}
            onChange={(e) => setLocation(e.target.value)}
          />
          <br />
          <button type='submit'>get condition</button>
          <div>
            <p>{condition}</p>
          </div>
        </form>
      </div>
    </Layout>
  );
}
