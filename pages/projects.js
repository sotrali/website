import Image from "next/image";
import Link from "next/link";

import Layout from "../components/main-layout";
import utilStyles from "../styles/utils.module.css";

import Collapsible from "../components/Collapsible.js";

import { useState } from "react";

function Project({
  title,
  skills,
  children,
  githubLink = "https://www.github.com/osheas1atwit",
  hasSecondButton = false,
  secondButtonText = "",
  secondButtonLink = "",
}) {
  const [showContent, setShowContent] = useState(false);

  function handleClick() {
    setShowContent(!showContent);
  }

  return (
    <div className={utilStyles.expandBox} style={{ textAlign: "left" }}>
      <div className={utilStyles.expandBoxHeadSpread} onClick={handleClick}>
        <p className={utilStyles.expandBoxTitle}>{title}</p>
        <p className={utilStyles.expandBoxSkills}>{skills}</p>
      </div>

      <Collapsible isExpanded={showContent}>
        <hr />

        <div>{children}</div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingBottom: "1rem",
          }}
        >
          <Link href={githubLink} target='_blank'>
            <Image
              src='/github.png'
              width={25}
              height={25}
              title='go to git repo'
            />
          </Link>

          {hasSecondButton && (
            <Link href={secondButtonLink} target='_blank'>
              <button className={utilStyles.medButton}>
                {secondButtonText}
              </button>
            </Link>
          )}
        </div>
      </Collapsible>
    </div>
  );
}

// Main Function
export default function Home() {
  return (
    <Layout pageID={"projects"}>
      <br />
      <Project
        title='Personal Website'
        skills='NEXT.JS / AWS'
        githubLink='https://github.com/osheas1atwit/professional-website'
        hasSecondButton={true}
        secondButtonLink='https://hub.docker.com/r/osheas/personal-website'
        secondButtonText='Docker'
      >
        <p>
          This project is the website you're on right now! Since graduating from
          Wentworth Institute of Technology in August '23, I set my sights on
          React. I have been focusing on React because it is:
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
        <p>
          This site was built with Next.js and is hosted in an S3 bucket (which
          is it doesn't have an SSL certificate). Besides tools provided by the
          vanilla Next.js framework, everything has been put together by hand! I
          built my own site-template and custom components (like these
          collapsible boxes), and styled everything myself!
        </p>
      </Project>

      <Project
        title='CGM Stats'
        skills='REACT / PYTHON / DOCKER'
        githubLink='https://github.com/shepherdm1atwit/CGM-Stats/tree/bootstrap-refactor'
        hasSecondButton={false}
      >
        <p>
          CGM Stats is a web application for people with diabetes. It securely
          interacts with the Dexcom API to enable users to quickly access their
          blood-glucose information and basic trends from any internet-connected
          device. <br />
          <br />
          My team and I became{" "}
          <span className={utilStyles.tooltip}>
            PHRP
            <span
              className={utilStyles.tooltiptextCenter}
              style={{ fontSize: "1rem" }}
            >
              PHRP:
              <br /> Protecting Human Research Participants
            </span>
          </span>{" "}
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
            alt='an academic poster describing the CGM Stats project'
            width={864}
            height={576}
            style={{ marginBottom: "1rem" }}
          ></Image>
        </Link>
      </Project>

      <Project
        title='Pathfinding Algorithm Visualizer'
        skills='C# / UNITY'
        githubLink='https://github.com/osheas1atwit/pathfinding-visualizer'
        hasSecondButton={false}
      >
        <p>
          My graduate classical artificial intelligence course introduced me to
          a variety of strategies for solving problems with basic AI concepts.
          We covered various seraching strategies with and without heuristics,
          Markov Decision Processes, first order logic, conjuntive normal form,
          and more. This project is a visualizer for a handful of basic
          seraching algorithms developed with a partner over the course of two
          weeks.
          <br />
          <br />
          The goal was to create an interactive experience that focuses on the
          enjoyment of watching the computer make good decisions all on its own!
        </p>

        <Link href='pathfinder.jpg' target='_blank'>
          <Image
            src='/pathfinder.jpg'
            title='click to enlarge'
            alt='a screenshot of the program'
            width={864}
            height={576}
          ></Image>
        </Link>

        <p>
          The repo contains a pre-built executable if you want to try the game
          yourself! Just click the little icon below.
        </p>
      </Project>

      <Project
        title='MythMatchr'
        skills='C# / UNITY'
        githubLink='https://github.com/osheas1atwit/MythMatchr'
        hasSecondButton={true}
        secondButtonLink='https://drive.google.com/file/d/1WexVwxeEXa23TS78dbG35dPkxtFYEbSZ/view?usp=share_link'
        secondButtonText='Play Game'
      >
        <p>
          MythMatchr is a play on the popular{" "}
          <a href='https://www.geoguessr.com/'>Geoguessr</a> web game{" "}
          <span className={utilStyles.tooltip} style={{ fontSize: "1rem" }}>
            (what's that?)
            <span
              className={utilStyles.tooltiptextCenter}
              style={{
                width: "15rem",
                fontSize: "1em",
              }}
            >
              Geoguessr is a game based on Google Earth street-view. <br />
              <br />
              You get placed on a random street somewhere on Earth, and you have
              to use clues based on what you see to guess where you are.
            </span>
          </span>
          . The goal of this project was to create an engaging, interactive
          experience that teaches the player about folklore. You may be
          surprised and learn something new by playing!
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
            alt='a screenshot of the game'
            width={450}
            height={499}
          />
        </Link>

        <p>
          There is a pre-built executable for this game hosted on Drive if you
          want to try it out below!
        </p>
      </Project>

      <Project
        title='Java Chat'
        skills='JAVA / NETWORKING'
        githubLink='https://github.com/osheas1atwit/pathfinding-visualizer'
        hasSecondButton={false}
      >
        <p>Java Chat is a chat application that feels like IRC.</p>

        <Link href='javachat.png' target='_blank'>
          <Image
            src='/javachat.png'
            title='click to enlarge'
            alt='a screenshot of the program'
            width={484}
            height={303}
            style={{ marginBottom: "1rem" }}
          />
        </Link>
      </Project>

      <Project
        title='CLI Integration Calculator'
        skills='JAVA / CALCULUS'
        githubLink='https://github.com/osheas1atwit/integrationCalculator/tree/master'
        hasSecondButton={false}
      >
        <p>
          A basic command line program built for calculus II that can calculate
          exact and estimated values. It estimates using the fundamental theorem
          of calculus and the midpoint, trapezoidal, and Simpsons Riemann sum
          methods.
        </p>
      </Project>

      <p style={{ textAlign: "center" }}>
        (Not made with my computer, but I've also built a{" "}
        <Link href='/cbg.pdf'>cigar box guitar</Link> and{" "}
        <span className={utilStyles.tooltip}>
          welded a chair
          <span className={utilStyles.tooltiptextCenter}>
            <Link href='welded_chair.jpg'>
              <Image
                src='/welded_chair.jpg'
                height={2016 / 5}
                width={1134 / 5}
                alt='a photo of Simon sitting in his welded chair'
              />
            </Link>
          </span>
        </span>{" "}
        that rocks on an old car's suspension spring)
      </p>
    </Layout>
  );
}
