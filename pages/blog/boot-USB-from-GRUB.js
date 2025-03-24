import PostLayout from "../../components/blogpost-layout.js";
import utilStyles from "../../styles/utils.module.css";

// Main Component
export default function Home() {
  return (
    <PostLayout
      title={"Booting from USB with GRUB"}
      postedMonthYear={"August 2024"}
      lastModified={"03/23/25"}
    >
      <p className={utilStyles.blogParagraph}>
        I found this information a few months ago and it has proven to be
        extremely useful in my Linux adventures since then. Shoutout to{" "}
        <a href="https://szymonkrajewski.pl/how-to-boot-system-from-usb-using-grub/">
          Szymon Krajewski
        </a>{" "}
        for teaching me this!
      </p>
      <hr className={utilStyles.lightHr} />
      <h3>
        <b>Step 1: Locate your USB drive</b>
      </h3>
      <p className={utilStyles.blogParagraph}>
        Once you are in the GRUB console, use{" "}
        <span className={utilStyles.inlineCode}>ls</span> to see what you're
        working with.
        <br />
        <br />
        In my cases, the USB I wanted was listed as{" "}
        <span className={utilStyles.inlineCode}>(hd0,msdos1)</span>, but it will
        likely be different on your machine.
        <br />
        <br />
        The drive labels can help you in determining which drive to use (to see
        the labels, use <span className={utilStyles.inlineCode}>ls -l</span> ),
        Hopefully you know what format the partition you're trying to boot into
        is.
      </p>
      <br />
      <br />
      <br />
      <h3>
        <b>Step 2: Enter the USB drive</b>
      </h3>
      <p className={utilStyles.blogParagraph}>
        Use this command to set GRUB's root directory to the USB:{" "}
        <span className={utilStyles.inlineCode}>set root=(hd0,msdos1)</span>
        <br />
        <br />
        To ensure you're inside the right drive, we'll use the{" "}
        <span className={utilStyles.inlineCode}>find</span> command to see what
        files are present.
        <br />
        <br />
        Type <span className={utilStyles.inlineCode}>find /</span> and hit TAB.
        The <span className={utilStyles.inlineCode}>efi/boot/</span> folder path
        should exist and have some files.
      </p>
      <br />
      <br />
      <br />
      <h3>
        <b>Step 3: Boot from the USB drive!</b>
      </h3>
      <p className={utilStyles.blogParagraph}>
        Now, we need to instruct GRUB to jump into the bootloader that already
        lives on the USB and load it for use. This process is called{" "}
        <i>
          <a href="https://www.gnu.org/software/grub/manual/grub/html_node/Chain_002dloading.html">
            chain-loading
          </a>
        </i>
        .
        <br />
        <br />
        Use the following command to chain-load the bootloader for your
        installation medium:
        <br />
        <span className={utilStyles.inlineCode}>
          chainloader /efi/boot/grubx64.efi
        </span>
        <br />
        <br />
        Finally, type <span className={utilStyles.inlineCode}>boot</span>!
        <br />
        <br />
        If everything went according to plan, you should have booted into your
        USB!
      </p>
    </PostLayout>
  );
}
