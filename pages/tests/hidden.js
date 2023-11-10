import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/layout.module.css";

export default function main() {
  return (
    <div className={styles.container} style={{ textAlign: "center" }}>
      <p>
        <i>Wow!!</i> You found the extra secret page!
      </p>

      <p style={{ fontSize: ".9em" }}>
        <Image src='/dad.png' width={800} height={600} />
        me and my cool dad, circa ~2005
      </p>

      <p>
        <i>Go check out my friends!</i>
        <br />

        <b>
          <a href='https://chrystsound.bandcamp.com/' target='_blank'>
            chryst
          </a>
        </b>

        <br />
        <b>
          <a
            href='https://open.spotify.com/artist/4mgP1XtTPrt6aFIU1Iaklp?si=yrRO5F3FS9u6iVRR4SfMow'
            target='_blank'
          >
            ezra cares
          </a>
        </b>

        <br />
        <b>
          <a href='https://www.instagram.com/cofskateclub' target='_blank'>
            cof skate
          </a>
        </b>

        <br />
        <b>
          <a href='https://www.instagram.com/shredmancomic/' target='_blank'>
            shredman
          </a>
        </b>

        <br />
        <b>
          <a
            href='https://www.instagram.com/lonelyboneskateco/'
            target='_blank'
          >
            lonely bones
          </a>
        </b>
      </p>
      <hr />
      <Link href='/tests'>bring me back</Link>
    </div>
  );
}
