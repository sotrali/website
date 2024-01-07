import Image from "next/image";
import Link from "next/link";

import Layout from "../components/main-layout";
import utilsStyles from "../styles/utils.module.css";
import styles from "../styles/layout.module.css";

export default function About() {
  return (
    <Layout pageID={"info"}>
      <Image
        priority
        src='/headshot.png'
        className={styles.headshot}
        width={100}
        height={100}
        title='me :)'
        alt='My headshot photo.'
      />
      <div style={{ margin: "1em 0" }}>
        I enjoy playing with my computer,{" "}
        <div className={utilsStyles.tooltip}>
          riding my skateboard
          <span className={utilsStyles.tooltiptextCenter}>
            <Link href='kickflip.gif' target='_blank'>
              <Image
                src='/kickflip.gif'
                width={320}
                height={400}
                alt='A video of me doing a kickflip in the middle of the street.'
              />
            </Link>
          </span>
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
        <div className={utilsStyles.tooltip}>
          engaging with people,
          <div
            className={utilsStyles.tooltiptextCenter}
            style={{ fontSize: "1.2rem", width: "20rem" }}
          >
            I founded the COF Skate Club, a student organization with over 100
            members in the Fenway area. <br />
            <br />
            My goal was to form a friendly community of skaters that spanned
            multiple college campuses in Boston. My executive board and I
            collaborated with several other organizations in the area, held
            custom skateboard workshops, raffled off equipment, and more. COF
            Skate Club is under new leadership and still going strong
            (Instagram: @
            <a href='https://www.instagram.com/cofskateclub/'>cofskateclub</a>
            )!
          </div>
        </div>{" "}
        and{" "}
        <div className={utilsStyles.tooltip}>
          making things with my hands
          <span className={utilsStyles.tooltiptextCenter}>
            <Link href='/fb.jpg' target='_blank'>
              <Image
                src='/fb.jpg'
                width={518 / 2}
                height={484 / 2}
                alt='Me holding a partially completed fingerboard deck.'
              />
            </Link>
            <br />
            Halfway through making my <br /> first handmade fingerboard.
            <br /> 2022
          </span>
        </div>
        . I just recently graduated from Wentworth Institute of Technology with
        a degree in Computer Science and a minor in Business Managment.
        <br />
        <br />
        Working with computers has been an interest of mine since early high
        school when I{" "}
        <div className={utilsStyles.tooltip}>
          built my first gaming PC
          <span className={utilsStyles.tooltiptextCenter}>
            <Link href='old_simon.jpg' target='_blank'>
              <Image
                src='/old_simon.jpg'
                width={145 * 2}
                height={190 * 2}
                style={{ border: "black solid 1px" }}
                alt='Me sitting behind a computer with the side panel removed.'
              />
            </Link>
            <br />
            Me and my first computer. <br />
            ~2016
          </span>
        </div>
        . Over the years and up until attending WIT, my focus shifted from
        hardware to software. I have set my sights on becoming a highly
        competent full-stack software engineer, and am looking to join a team of
        other passionate and motivated individuals!
        <br />
        <br />
        Currently I work with a nonprofit based in my hometown,{" "}
        <a href='https://windowdressers.org'>WindowDressers</a>, which provides
        cheap window insulation options for communities across Northern New
        England. I work part time to help renovate their custom software
        solution and internal website.
        <br />
        <br />I enjoy making things that others can interact and engage with,
        especially if it helps them accomplish a goal, teaches them something,
        and/or puts a smile on their face. What do you like to make?
      </div>
    </Layout>
  );
}
