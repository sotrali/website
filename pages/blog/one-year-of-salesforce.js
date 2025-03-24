import PostLayout from "../../components/blogpost-layout.js";
import utilStyles from "../../styles/utils.module.css";

import Image from "next/image";

// Main Component
export default function Home() {
  return (
    <PostLayout
      title={"One Year of Salesforce"}
      postedMonthYear={"March 2025"}
      lastModified={"03/10/25"}
    >
      <p className={utilStyles.blogParagraph}>
        It has been a whole year since I joined the team at Eustace Consulting
        and plugged in to the world of Salesforce. At this point, I've created
        and modified pre-existing:
      </p>
      <ul className={utilStyles.blogUnorderedList}>
        <li>Flows</li>
        <li>Aura components</li>
        <li>VisualForce (VF) pages</li>
        <li>Experience Cloud sites</li>
        <li>Lighting Web Components (LWC)</li>
        <li>Apex triggers</li>
        <li>Apex classes (invocable, batched, scheduled, tests)</li>
      </ul>
      <p className={utilStyles.blogParagraph}>
        I have also migrated boatloads of data, both by hand and
        programmatically, and written Quickbooks integrations. It has been quite
        an eventful year, and I'm enjoying my time developing within this unique
        ecosystem. For fun and to commemorate my anniversary, I've decided to
        show off some of the early components I built.
      </p>

      <hr className={utilStyles.lightHr} />

      <p className={utilStyles.blogParagraph}>
        This Aura component was the first custom development job I had once I
        started to understand how Salesforce works. This build was for a real
        estate company that needed a better interface for logging commissions.
        Aura's MVC style of programming feels old and more redundant than more
        modern frameworks like React and LWC, but to be honest I kind of enjoy
        it. It reminds me of when I was working with Windows Presentation
        Foundation in XAML and C#/C++. See it in action below:
        <br />
        <br />
        {/** OG RESOLUTION: 540 x 960 */}
        <video height="250" witdth="460" controls>
          <source src="/Aura_Demonstration.mp4" type="video/mp4"></source>
        </video>
      </p>

      <hr className={utilStyles.lightHr} />

      <p className={utilStyles.blogParagraph}>
        Next up is my first VisualForce page project: an invoice generator for a
        law firm. I developed this by reverse engineering an existing VF page
        from a managed package (pages in managed packages are locked down) that
        my client wanted to make modifications to. I used the managed page as a
        reference to start, and once I understood VisualForce better, I heavily
        customized the controller and markup to suit my client's needs more
        appropriately. This statement generator is invoked from a legal matter
        record - it collects all of the invoices and recorded payments related
        to the current matter, does some math, and then renders the data as a
        PDF that can be sent to the relevant parties:
        <br />
        <br />
        <Image src="/VFPage.png" height={879} width={702} />
      </p>

      <hr className={utilStyles.lightHr} />

      <p className={utilStyles.blogParagraph}>
        Lastly, the first LWC I wrote. This was for a firm that does external
        HR/payroll support. They needed a better interface for viewing all the
        members of their heirarchichal campaigns. For some reason, certain
        default related lists (like Campaign Members) prevent you from creating
        filters, searching, or customizing which columns/fields are displayed. I
        really don't understand why only some objects are like that. Anyways, I
        made them a custom table that simulates the features of a normal list
        view, and then some. I'm quite proud of this one, especially since it is
        the first LWC I ever wrote. Here's a demonstration of it with some fake
        data:
        <br />
        <br />
        <video height="250" witdth="460" controls>
          <source src="/LWC_Demonstration.mp4" type="video/mp4"></source>
        </video>
      </p>

      <hr className={utilStyles.lightHr} />

      <p className={utilStyles.blogParagraph}>
        And there you have it, the first of my components in all three
        Salesforce flavors. Looking back, I'm quite proud of them. I may write
        some more posts about other things I've built for work, but only time
        will tell. Until next time!
      </p>
    </PostLayout>
  );
}
