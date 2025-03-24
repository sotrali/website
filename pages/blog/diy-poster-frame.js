import PostLayout from "../../components/blogpost-layout.js";
import utilStyles from "../../styles/utils.module.css";
import Image from "next/image";
// Main Component
export default function Home() {
  return (
    <PostLayout
      title={"Simple DIY Poster Frame"}
      postedMonthYear={"December 2024"}
      lastModified={"12/21/24"}
    >
      <p className={utilStyles.blogParagraph}>
        Last month I went on a wonderful (but unfortunately short) trip to
        Nashville with my lovely girlfriend. Neither of us had been to the South
        before, so we tried to pack in as much we possibly could during the 48
        hours we had there.
        <br />
        <br />
        One of my favorite spots was the{" "}
        <a href="https://www.hatchshowprint.com/about">Hatch Show Print Shop</a>
        . They opened in 1879 and are still hand pressing posters to this day!
        It was fascinating to learn about traditional printing techniques — they
        have turned the act of making art into an art.
        <br />
        <br />
        The workshop was extremely cozy and old fashioned. On the tour, they
        said they don't have any fonts made after ~1955. That means they don't
        even have Helvetica (created in 1957)! Did you know that the terms
        "uppercase" and "lowercase" are used because uppercase letter blocks
        were traditionally stored in the cabinets above the lowercase ones?
        Their style of poster is so distinct and creative that it is easy to
        identify their work scattered around Nashville. One of my favorites was
        the Peppa the Pig poster that you can see in this picture:
      </p>
      <Image
        src="/peppa-poster.jpg"
        height={2945 / 10}
        width={3879 / 10}
        style={{ margin: "1rem 0" }}
      ></Image>
      <br />
      <p className={utilStyles.blogParagraph}>
        If this sounds interesting and/or you're into typography, you should{" "}
        <a href="https://www.youtube.com/watch?v=gzJUP7f12J8">
          check this video out
        </a>
        !
      </p>
      <hr className={utilStyles.lightHr} />
      <p className={utilStyles.blogParagraph}>
        Anyways, I bought a poster from the print shop and wanted to make a
        frame for it. This approach was inspired by a frame my girlfriend bought
        a few years back that also pinches the top and bottom, but it uses
        magnets instead (expensive). All of these materials are basic hardware
        store items, and you can make them yourself in an afternoon!
      </p>
      <h2>LOM (list of materials):</h2>
      <ul className={utilStyles.blogUnorderedList}>
        <li>
          Some <b>square</b> wooden dowels (I used two 1 1/4" x 36" dowels made
          of poplar)
        </li>
        <li>
          Some medium/fine grit sandpaper (I used a fine, 120 grit sheet and it
          worked well!)
        </li>
        <li>An exacto knife or boxcutter type blade</li>
        <li>
          Not pictured: some thick string or thin rope (The rope I used was
          labeled "gardening twine", but anything works)
        </li>
        <li>
          <i>Optional: a saw to help cut through the dowels</i>
        </li>
      </ul>
      <Image
        src="/poster-frame-materials.jpg"
        height={2632 / 5}
        width={2186 / 5}
        style={{ margin: "1rem 0" }}
      ></Image>
      <p className={utilStyles.blogParagraph}>Here is the final result:</p>
      <Image
        src="/poster-frame.jpg"
        height={3024 / 9}
        width={4032 / 9}
        style={{ margin: "1rem 0" }}
      ></Image>
      <p className={utilStyles.blogParagraph}>
        Making the frame is a super simple process!
      </p>
      <ol className={utilStyles.blogUnorderedList}>
        <li>
          Cut your dowels into 4 equal pieces, slightly longer than the width of
          your poster (~1 inch longer). Sand the cut edges to reduce splinter
          risk.
        </li>
        <li>
          To make the bottom part of the frame, place the poster's bottom edge
          between two of the dowels. Leave about 1/2 an inch of dowel extending
          past either side of the poster. The bottom edge of the poster should
          be flush with the bottom edge of the top face of the dowel.
        </li>
        <li>
          Take short lengths of rope to tie the ends of the dowels together.
          They should be pinching the bottom edge of the poster firmly.
        </li>
        <li>
          Repeat step 2/3, but with the the top edge of the poster, and with one
          piece of rope that is around 1.25-1.5x the dowel length. You're
          creating the hanging cord and pinching the top dowels together in one
          move, so this may take some finesse. I recommend cutting the piece
          longer than is necessary (~2x length of dowels) to make tying it
          easier, but you don't want any additional slack or else the poster
          will hang low.
        </li>
      </ol>
      <p className={utilStyles.blogParagraph}>
        <i>Voila!</i> I really like this design because it's a cheap, less
        destructive, and adaptable alternative to the tacks I've been using. I
        think it looks quite nice too, if I don't say to myself.
      </p>
    </PostLayout>
  );
}
