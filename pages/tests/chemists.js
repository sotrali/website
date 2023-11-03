import { getImageUrl } from "../../components/utils.js";
import Link from "next/link.js";
import styles from "../../styles/tests.module.css";
import utilStyles from "../../styles/utils.module.css";
import Layout from "../../components/tests-layout.js";

/**
 * THIS FILE CONTAINS:
 * practice with filtering arrays and
 * displaying different categories of data
 */

// array of data
const people = [
  {
    id: 0,
    name: "Creola Katherine Johnson",
    profession: "mathematician",
    accomplishment: "spaceflight calculations",
    imageId: "MK3eW3A",
  },
  {
    id: 1,
    name: "Mario José Molina-Pasquel Henríquez",
    profession: "chemist",
    accomplishment: "discovery of Arctic ozone hole",
    imageId: "mynHUSa",
  },
  {
    id: 2,
    name: "Mohammad Abdus Salam",
    profession: "physicist",
    accomplishment: "electromagnetism theory",
    imageId: "bE7W1ji",
  },
  {
    id: 3,
    name: "Percy Lavon Julian",
    profession: "chemist",
    accomplishment:
      "pioneering cortisone drugs, steroids and birth control pills",
    imageId: "IOjWm71",
  },
  {
    id: 4,
    name: "Subrahmanyan Chandrasekhar",
    profession: "astrophysicist",
    accomplishment: "white dwarf star mass calculations",
    imageId: "lrWQx8l",
  },
];

// reads in a given title and a list of people, formats data
// (expects data to be pre-categorized)
function ListPeople({ title, list }) {
  return (
    <div className={utilStyles.card}>
      <h2 style={{ marginTop: "0" }}>{title}</h2>

      <ul className={styles.ul}>
        {list.map((person) => (
          <li className={styles.li} key={person.id}>
            <img
              src={getImageUrl(person.imageId)}
              alt={person.name}
              className={styles.img}
            />
            <p>
              <b>{person.name}:</b>
              {" " + person.profession + " "}
              known for {person.accomplishment}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Chemists() {
  const chemists = people.filter((person) => person.profession === "chemist");
  const others = people.filter((person) => !(person.profession === "chemist"));

  return (
    <Layout id={4}>
      <h1>Chemists and Friends</h1>
      <ListPeople title='Pro Chemists' list={chemists} />
      <ListPeople title='Other Important Folk' list={others} />
    </Layout>
  );
}
