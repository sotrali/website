import Link from "next/link.js";
import Layout, { siteTitle } from "../../components/tests-layout";
import { getImageUrl } from "../../components/utils.js";
import styles from "../../styles/utils.module.css";

function Profile({
  imageId,
  name,
  profession,
  awards,
  discovery,
  imageSize = 100,
}) {
  return (
    <section className={styles.card}>
      <div style={{ textAlign: "center" }}>
        <h2>{name}</h2>

        <img
          style={{ borderRadius: "99%" }}
          src={getImageUrl(imageId)}
          alt={name}
          width={imageSize}
          height={imageSize}
        />
      </div>

      <ul>
        <li>
          <b>Profession:</b> {profession}
        </li>

        <li>
          <b>Awards: {awards.length} </b>({awards.join(", ")})
        </li>

        <li>
          <b>Discovered: </b>
          {discovery}
        </li>
      </ul>
    </section>
  );
}
function Scientists() {
  return (
    <>
      <h1>Notable Scientists</h1>
      <Profile
        imageId='szV5sdG'
        name='Maria Skłodowska-Curie'
        profession='physicist and chemist'
        discovery='polonium (chemical element)'
        awards={[
          "Nobel Prize in Physics",
          "Nobel Prize in Chemistry",
          "Davy Medal",
          "Matteucci Medal",
        ]}
      />
      <Profile
        imageId='YfeOqp2'
        name='Katsuko Saruhashi'
        profession='geochemist'
        discovery='a method for measuring carbon dioxide in seawater'
        awards={["Miyake Prize for geochemistry", "Tanaka Prize"]}
      />
    </>
  );
}

export default function Main() {
  return (
    <Layout home={false} id={1}>
      <Scientists />
    </Layout>
  );
}
