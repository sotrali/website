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
            members in the Fenway area. My goal was to form a friendly community
            of skaters that spanned multiple college campuses in Boston. My
            executive board and I collaborated with several other organizations
            in the area, held custom skateboard workshops, raffled off
            equipment, and more. COF Skate Club is under new leadership and
            still going strong (instagram: @cofskateclub)!
          </div>
        </div>
        , and{" "}
        <div className={styles.tooltip} title='click image to enlarge'>
          {" "}
          making things with my hands
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
        interest shifted from hardware to software. I have set my sights on
        becoming a highly competent full-stack software engineer and am looking
        to join a team of other passionate and motivated people!
        <br />
        <br />I enjoy making things that others can interact and engage with,
        especially if it helps them accomplish a goal, learn something, and/or
        puts a smile on their face.
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
        resume
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
