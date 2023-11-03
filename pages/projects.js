import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Layout from "../components/main-layout";
import styles from "../styles/layout.module.css";
import utilStyles from "../styles/utils.module.css";

import { useState } from "react";

function ExpandBox({ title, skills, children }) {
  const [showWebsiteBlurb, setShowWebsiteBlurb] = useState(false);

  function handleShow() {
    setShowWebsiteBlurb(!showWebsiteBlurb);
  }
  return (
    <div className={utilStyles.expandBox}>
      <div className={utilStyles.expandBoxHeadSpread} onClick={handleShow}>
        <p className={utilStyles.expandBoxTitle}>{title}</p>
        <p className={utilStyles.expandBoxSkills}>
          <i>{skills}</i>
        </p>
      </div>
      {showWebsiteBlurb && (
        <div>
          <hr /> {children}
        </div>
      )}
    </div>
  );
}

export function Intro() {
  return (
    <p>
      I am a curious individual that enjoys spending time on my computer. This
      page highlights a few of the things I have used my computer to create!
    </p>
  );
}

export function Footer() {
  return (
    <div className={utilStyles.spread}>
      <Link href='/resume.pdf' target='_blank'>
        view resume
      </Link>
      <a href='https://www.github.com/osheas1atwit' target='_blank'>
        github
      </a>
    </div>
  );
}

// Main Function
export default function Home() {
  return (
    <Layout id={"projects"}>
      <Intro />

      <ExpandBox title='Personal Website' skills='JS(X) / DOCKER'>
        <p>
          This project is the website you're on right now (built with Next.js)!
          Since graduating from Wentworth Institute of Technology in August '23,
          I set my sights on React. I have been focusing on React because it is:
        </p>
        <ul>
          <li>
            Written in Javascript, a language I am working on improving my
            skills in.
          </li>
          <li>
            Popular. I'm not saying this to bandwagon, its popularity has
            resulted in incredibly useful frameworks like Next.js and
            React-Bootstrap. JS is the most in-demand language right now.
          </li>
        </ul>
        <Link
          href='https://github.com/osheas1atwit/professional-website'
          target='_blank'
        >
          source code
        </Link>
      </ExpandBox>

      <ExpandBox title='CGM Stats' skills='JS(X) / PYTHON / DOCKER'>
        <p>
          CGM Stats is a web application for people with diabetes. It securely
          interacts with the Dexcom API to enable users to quickly access their
          blood-glucose information and basic trends from any internet-connected
          device. <br />
          <br />
          My team and I became{" "}
          <div className={styles.tooltip}>
            PHRP
            <span
              className={styles.tooltiptext}
              style={{ fontSize: ".8em", width: "10em" }}
            >
              <i>(protecting human research participants)</i>
            </span>
          </div>{" "}
          certified in order to conduct research to guide our implementation.
          Our research plan was approved by Wentworth's Institute Review Board,
          and we got to work. <br />
          <br />
          This project was my first exposure to React and showed me what it was
          like to start a full-scale application from scratch.
        </p>
        <Link href='/cgm_poster.png' target='_blank'>
          <Image
            src='/cgm_poster.png'
            title='click to enlarge'
            width={864}
            height={576}
          ></Image>
        </Link>

        <a
          href='https://github.com/shepherdm1atwit/CGM-Stats/tree/bootstrap-refactor'
          target='_blank'
        >
          source code
        </a>
      </ExpandBox>

      <ExpandBox title='Pathfinding Algorithm Visualizer' skills='C# / UNITY'>
        <p>
          My graduate classical artificial intelligence course introduced me to
          a variety of strategies for solving problems with basic AI concepts.
          We covered various seraching strategies with and without heuristics,
          Markov Decision Processes, first order logic, conjuntive normal form,
          and more. This project is a visualizer for a handful of basic
          seraching algorithms developed with a partner over the course of two
          weeks. <br />
          <br />
          The goal was to create an interactive experience that focuses on the
          enjoyment of watching the computer make good decisions all on its own!
        </p>
        <Link href='pathfinder.jpg' target='_blank'>
          <Image
            src='/pathfinder.jpg'
            title='click to enlarge'
            width={864}
            height={576}
          ></Image>
        </Link>
        <a
          href='https://github.com/osheas1atwit/pathfinding-visualizer'
          target='_blank'
        >
          source code / download
        </a>
      </ExpandBox>

      <ExpandBox title='MythMatchr' skills='C# / UNITY'>
        <p>
          MythMatchr is a play on the popular "GeoGuessr"{" "}
          <div className={styles.tooltip} style={{ fontSize: ".6em" }}>
            (what's that?)
            <div
              className={styles.tooltiptext}
              style={{ width: "200px", fontSize: "1.2em" }}
            >
              Geoguessr is a game where you are placed somewhere random on Earth
              in Google Maps street-view. The goal is to use context clues based
              on what you see from the streets to guess exactly where you are on
              the map.
            </div>
          </div>{" "}
          web-game. The goal of this project was to create an engaging,
          interactive experience that teaches the player about folklore. You may
          be surprised and learn something new by playing!
          <br />
          <br />
          In our game, the player is presented with an illustration and the name
          of a mythological creature. The goal is for the player to use existing
          knowledge, context clues based on the name and photograph, and hints
          provided to guess the original country that the given myth emerged
          from.
        </p>

        <Link href='mythmatchr.png' target='_blank'>
          <Image
            src='/mythmatchr.png'
            title='click to enlarge'
            width={450}
            height={499}
          />
        </Link>

        <br />
        <a
          href='https://github.com/connellatatwit/MythMatcher/tree/recover-spot'
          target='_blank'
        >
          source code / download
        </a>
      </ExpandBox>

      <ExpandBox title='Java Chat' skills='JAVA / NETWORKING'>
        <p>Java Chat is a chat application that feels like IRC.</p>

        <Link href='javachat.png' target='_blank'>
          <Image
            src='/javachat.png'
            title='click to enlarge'
            width={484}
            height={303}
          />
        </Link>
        <a href='https://github.com/osheas1atwit/javaChat' target='_blank'>
          source code / download
        </a>
      </ExpandBox>

      <ExpandBox title='CLI Integration Calculator' skills='JAVA / CALCULUS'>
        <p>
          A basic command line program built for calculus II that can calculate
          exact and estimated values. It estimates using the fundamental theorem
          of calculus and the midpoint, trapezoidal, and Simpsons Riemann sum
          methods.{" "}
        </p>

        <a
          href='https://github.com/osheas1atwit/integrationCalculator/tree/master'
          target='_blank'
        >
          source code / download
        </a>
      </ExpandBox>
      <hr />

      <Footer />
    </Layout>
  );
}
