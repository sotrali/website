import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Layout from "../components/main-layout";
import styles from "../styles/layout.module.css";
import utilStyles from "../styles/utils.module.css";

export default function About() {
  return (
    <Layout id={"about"}>
      <div>
        I enjoy playing with my computer,{" "}
        <div className={styles.tooltip} title='click vid to enlarge'>
          riding my skateboard
          <Link href='kickflip.gif' target='_blank'>
            <Image
              title='click to enlarge'
              src='/kickflip.gif'
              className={styles.tooltiptext}
              width={320}
              height={400}
            />
          </Link>
        </div>
        {/** TODO:
         *
         * make lil gif compilation
         * of my fingerboard creations
         * and throw in a clip at the end.
         * then replace this image with
         * it.
         *  |
         * \|/
         *  V
         */}
        ,{" "}
        <div className={styles.tooltip}>
          connecting with people
          <div
            className={styles.tooltiptext}
            style={{ fontSize: ".8em", width: "250px" }}
          >
            I founded the COF Skate Club, a student organization with over 100
            members in the Fenway area. The goal was to form a friendly
            community of skaters that spanned multiple college campuses in
            Boston. We collaborated with several other organizations in the
            area, held hands-on workshops, and more. There was an election for a
            new president before I graduated, and it is still going strong!
          </div>
        </div>
        , and{" "}
        <div className={styles.tooltip} title='click image to enlarge'>
          {" "}
          making fingerboards
          <Link href='fb.jpg' target='_blank'>
            <Image
              title='click to enlarge'
              src='/fb.png'
              className={styles.tooltiptext}
              width={518}
              height={484}
            />
          </Link>
        </div>
        . I just recently graduated from Wentworth Institute of Technology with
        a degree in Computer Science and a minor in Business Managment.
        <br />
        <br />
        Computers have been part of my life since late elementary school when I
        built my first gaming PC. Over the years and up until attending WIT, my
        interest shifted from being predominantly hardware to predominantly to
        software. I have set my sights on becoming a highly competent full-stack
        software engineer and am looking to kick off my career!
        <br />
        <br />I enjoy making things that others can interact and engage with,
        especially if it helps them accomplish a goal or learn something. I like
        starting personal projects and delving into ideas deep, trying to
        understand my subject as comprehensively as possible. I enjoy taking the
        extra time to explore and understand the details of whatever it is I am
        doing.
      </div>
      <br />

      <hr />
      <Footer />
    </Layout>
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

      <a href='https://www.linkedin.com/in/simon-o-shea/' target='_blank'>
        linkedIn
      </a>

      <a
        target='_blank'
        rel='noopener noreferrer'
        href='mailto:vesspa0330@gmail.com'
      >
        email me
      </a>
    </div>
  );
}
