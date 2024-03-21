import Link from "next/link";

import Layout from "../components/main-layout.js";

import styles from "../styles/layout.module.css";
import utilStyles from "../styles/utils.module.css";

function Quote({ children, author, title, location, link }) {
  return (
    <div>
      <p className={utilStyles.quote}>
        <i>"{children}"</i>
      </p>

      <div style={{ textAlign: "right", marginRight: "1rem" }}>
        <span style={{ marginBottom: "0", paddingBottom: "0" }}>
          <h1 className={utilStyles.quoteAuthor}>
            -
            <a href={link} target='_blank'>
              {author}
            </a>
          </h1>
        </span>
        <h3 className={utilStyles.quoteAuthorInfo}>
          {title}
          <br />
          <i>{location}</i>
        </h3>
      </div>
    </div>
  );
}

// Main Component
export default function Main() {
  return (
    <Layout pageID={"testimonials"}>
      <p>
        I am deeply appreciative to the following people for taking the time to
        write these kind words about me. They were a fantastic support system
        and made my time at Wentworth Institute of Technology truly fulfilling.
      </p>

      <hr className={utilStyles.lightHr} />

      <Quote
        author={"Tory Lam"}
        title={"Assistant Director and Lab Coordinator of Accelerate"}
        location={"Wentworth Institute of Technology"}
        link={"https://wit.edu/directory/tory-lam"}
      >
        In the 7 years I’ve been working at Wentworth both as an Assistant
        Director for our Innovation + Entrepreneurship Center and now Lead Lab
        Technician, I can say without a doubt that Simon has stood out among the
        thousands of students I’ve engaged with when it comes to his leadership
        and personable skills. For someone like Simon who spends more time
        helping and caring for others, he truly deserves to be recognized for
        his dedication to making the world a better place.
      </Quote>

      <hr className={utilStyles.lightHr} />

      <Quote
        author={"Emily Casey"}
        title={"Associate Director of Admissions"}
        location={"Wentworth Institute of Technology"}
        link={"https://wit.edu/directory/emily-casey"}
      >
        I have overseen Simon in his role as an Admissions Ambassador, and now
        Coordinator, on the Admissions Ambassador team at Wentworth Institute of
        Technology for the past three years. Simon has grown into a strong
        student leader the past three years and is one that newer members often
        look to for advice and guidance. He has consistently been a team member
        I trust to engage well with prospective students and families. Hiring
        him to lead the team of Admissions Ambassadors this year was an easy
        choice, and he has stepped into this leadership role effortlessly. Simon
        has stayed undoubtedly and unapologetically himself throughout his time
        as a student. He has pursued his interests, both inside and outside of
        his major, by taking part in or creating other student organizations,
        such as Financial Literacy Club or Colleges of the Fenway Skate Club. He
        has taken advantage of the different opportunities Wentworth provides
        their students and has made the most out of his time as an undergraduate
        student.
      </Quote>

      <hr className={utilStyles.lightHr} />

      <Quote
        author={"Brian Quigley"}
        title={"Director of Transition Programs & Family Engagement"}
        location={"Wentworth Institute of Technology"}
        link={"https://wit.edu/directory/brian-quigley"}
      >
        I know Simon will dedicate himself completely to his education and his
        work. Simon’s work with our orientation programs required attention to
        detail, organization, frequent and clear communication, and patience. He
        is one of the most reliable students I have worked with in my six years
        at Wentworth, and he is always willing to help out with any project or
        task. Perhaps more important than Simon’s work ethic are his positive
        attitude and his ability to make others feel welcome and included. He
        takes a genuine interest in learning about other peoples’ passions,
        sharing his own with them, and doing so in a way that puts anyone he is
        talking to at ease. It is in Simon’s nature to jump right in, make
        connections, and seek out learning opportunities.
      </Quote>
      <br />
    </Layout>
  );
}
