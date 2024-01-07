import { useState } from "react";

import Layout from "../../components/tests-layout.js";
import utilStyles from "../../styles/utils.module.css";

function verboseOutput(data) {
  let condition = data.current.condition.text;
  let feelsLike = data.current.feelslike_f;
  let icon = data.current.condition.icon;

  let city = data.location.name;
  let locationRegion = data.location.region;
  let locationCountry = data.location.country;
  let localTime = data.location.localtime.split(" ");

  let windSpeed = data.current.wind_mph;
  let windDir = data.current.wind_dir;
  let visibility = data.current.vis_miles;

  let updated = data.current.last_updated;

  let mapsLink =
    "http://maps.google.com/?z=14&ll=" +
    data.location.lat +
    "," +
    data.location.lon;

  return (
    <div style={{ textAlign: "center", lineHeight: "1.6em" }}>
      <a href={mapsLink} target='_blank' title='open location in Maps'>
        {city}, {locationRegion}, {locationCountry}
      </a>{" "}
      <br />
      <img
        src={icon}
        style={{ width: "2em", height: "2em", marginTop: ".5em" }}
      />
      <br />
      <i>Current Time:</i>
      <br />
      {localTime[1]}
      <br />
      <br />
      <i>Current Conditions:</i>
      <br />
      {condition}, feels like {feelsLike} °F
      <br />
      Wind blowing <i>{windDir}</i> at {windSpeed} mph
      <br />
      Visibility for {visibility} miles
      <p style={{ fontSize: ".6em", marginTop: "1rem" }}>
        Last updated: {updated}
      </p>
    </div>
  );
}

export default function main() {
  const [location, setLocation] = useState("");
  const [condition, setCondition] = useState(
    "(search results will show here!)"
  );

  // checkboxes are weird and the order of events is a pain.
  // therefore verboseMode is always opposite of what the checkbox
  // represents, so use it accordingly.
  const [verboseMode, setVerbose] = useState(false);

  async function handleSubmit() {
    try {
      console.log(location);

      let conditionUrl =
        "http://api.weatherapi.com/v1/current.json?key=" +
        process.env.WEATHER_KEY +
        "&q=" +
        location +
        "&aqi=no";

      console.log("condition URL: " + conditionUrl);

      const response = await fetch(conditionUrl);
      const data = await response.json();

      console.log(data);

      if (verboseMode) {
        setCondition(verboseOutput(data));
      } else {
        let city = data.location.name;
        let condition = data.current.condition.text;
        let forecast = `${city} is ${condition.toLowerCase()} right now.`;
        setCondition(forecast);
      }
    } catch (err) {
      console.log(err);
      setCondition("Your search didn't return any results :(");
    }
  }

  function handleCheck() {
    setVerbose(!verboseMode);
    console.log(verboseMode);
  }

  return (
    <Layout id={9}>
      <h1>Weather API Probe</h1>
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

          <br />
          <input type='checkbox' id='vCheck' onChange={handleCheck} />
          <label htmlFor='vCheck'>verbose output</label>

          <div
            className={utilStyles.card}
            style={{ marginTop: "1em", textAlign: "center" }}
          >
            <p>{condition}</p>
          </div>
        </form>

        <br />
        <br />
        <a
          href='https://www.weatherapi.com/'
          target='_blank'
          className={utilStyles.secondaryLink}
        >
          API source
        </a>
      </div>
    </Layout>
  );
}
