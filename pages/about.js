import Image from "next/image";
import Link from "next/link";

import Layout from "../components/main-layout";
import utilStyles from "../styles/utils.module.css";
import styles from "../styles/layout.module.css";

import ToolTip from "../components/tooltip";

export default function About() {
  return (
    <Layout pageID={"about"}>
      <Image
        priority
        src="/headshot.png"
        className={utilStyles.headshot}
        width={100}
        height={100}
        alt="My headshot photo."
      />
      <p style={{ margin: "1em 0" }}>
        I spend my free time playing with my computer,{" "}
        <ToolTip displayText="skateboarding">
          <Link href="kickflip.gif" target="_blank">
            <Image
              src="/kickflip.gif"
              width={518 * 0.6}
              height={484 * 0.6}
              alt="A video of me doing a kickflip in the middle of the street."
            />
          </Link>
          <br />
          Kickflip.
          <br />- Summer 2023 -
        </ToolTip>
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
        <ToolTip displayText="engaging with people," width={20}>
          I founded the COF Skate Club, a student organization with over 100
          members in the Fenway area. <br />
          <br />
          My goal was to form a friendly community of skaters that spanned
          multiple college campuses in Boston. My executive board and I
          collaborated with several other organizations in the area, held custom
          skateboard workshops, raffled off equipment, and more. COF Skate Club
          is under new leadership and still going strong (Instagram: @
          <a href="https://www.instagram.com/cofskateclub/">cofskateclub</a>
          )!
        </ToolTip>{" "}
        and{" "}
        <ToolTip displayText="making things with my hands">
          <Link href="/fb.jpg" target="_blank">
            <Image
              src="/fb.jpg"
              width={1440 / 4}
              height={1800 / 4}
              alt="Me holding a partially completed fingerboard deck."
            />
          </Link>
          <br />
          My first time making a fingerboard
          <br />
          deck, halfway through the process.
          <br /> - 2022 -
        </ToolTip>
        . In August 2023 I graduated from Wentworth Institute of Technology with
        a degree in Computer Science and a minor in Business Managment.
      </p>

      <p style={{ margin: "1em 0" }}>
        Working with computers has been an interest of mine since early high
        school when I{" "}
        <ToolTip displayText="built my first gaming PC">
          <Link href="old_simon.jpg" target="_blank">
            <Image
              src="/old_simon.jpg"
              width={145 * 2}
              height={190 * 2}
              style={{ border: "black solid 1px" }}
              alt="Me sitting behind a computer with the side panel removed."
            />
          </Link>
          <br />
          Me and my first computer. <br />
          ~2016
        </ToolTip>
        . Over the years leading up to my time at Wentworth, my focus shifted
        from hardware to software (though the interest in hardware remains).
      </p>

      <p style={{ margin: "1em 0" }}>
        I love the iterative process of creation and have been working on
        variations of my personal website for years. It's a constant work in
        progress, and continuous evolution is one of my favorite parts of being
        a software engineer. Recently, I came across the concept of{" "}
        <a href="https://www.methodsandtools.com/archive/softwaregardening.php">
          software gardening
        </a>{" "}
        and it resonated with me strongly. If you're a developer and have never
        heard of it before, I think it's worth the quick read!
      </p>

      <p style={{ margin: "1em 0" }}>
        I'm currently on the{" "}
        <a href="https://eustaceconsulting.com/">Eustace Consulting</a> team
        working as a developer and consultant. I am developing a 3rd party
        migration tool that moves QuickBooks Online data to the Salesforce
        native equivalent, Accounting Seed.
      </p>

      <p style={{ margin: "1em 0" }}>
        Otherwise, I enjoy making things that others can interact and engage
        with, especially if it helps them accomplish a goal, teaches them
        something, and/or puts a smile on their face. What do you like to make?
      </p>
    </Layout>
  );
}
