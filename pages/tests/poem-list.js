import Layout from "../../components/tests-layout";
import utilStyles from "../../styles/utils.module.css";

/**
 * THIS FILE CONTAINS:
 * practice with mapping array contents.
 * (goal: place <hr> tags in-between
 * an unknown number of <p>'s)
 */

// first, naive solution:
const poem = {
  lines: [
    "I write, erase, rewrite",
    "Erase again, and then",
    "A poppy blooms.",
  ],
};

function WriteLine({ index }) {
  if (index < poem.lines.length - 1) {
    return (
      <>
        <p style={{ textAlign: "center" }}>{poem.lines[index]}</p>
        <hr style={{ width: "50%" }} />
      </>
    );
  }
  return <p style={{ textAlign: "center" }}>{poem.lines[index]}</p>;
}

/** version that uses WriteLine */
export default function Poem() {
  return (
    <Layout id={5}>
      <h1>A Haiku</h1>
      <div className={utilStyles.card}>
        <h3 style={{ textAlign: "center" }}>A Poppy Blooms</h3>
        {poem.lines.map((line, index) => (
          <WriteLine key={index} index={index} />
        ))}
        <br />
        <i style={{ display: "block", textAlign: "right" }}>
          - Katsushika Hokusai
        </i>
      </div>
    </Layout>
  );
}

/** smarter version based on solution ideas 
 * 
export default function Poem() {
    return (
      <article>
        {poem.lines.map((line, index) =>
          <div key={index}>
            <p> {line} </p>
            {(index < poem.lines.length -1) && (<hr />)}
          </div>
        )}
      </article>
    );
  }*/
