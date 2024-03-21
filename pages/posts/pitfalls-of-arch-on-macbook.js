import Link from "next/link";

import Layout from "../../components/main-layout.js";

import Collapsible from "../../components/Collapsible.js";

import styles from "../../styles/layout.module.css";
import utilStyles from "../../styles/utils.module.css";

// Main Component
export default function Home() {
  return (
    <Layout pageID={"blog"}>
      <h1
        id={"top"}
        className={utilStyles.blogLink}
        style={{ fontSize: "2rem", marginBottom: "0", paddingBottom: "0" }}
      >
        The Pitfalls of Installing Arch Linux on a MacBook Air 2015
      </h1>

      <i>~ Posted March 2024</i>

      <div
        className={utilStyles.card}
        style={{ margin: "1.5rem 3rem", padding: "1rem" }}
      >
        <div style={{ textAlign: "center", fontWeight: "bold" }}>
          Table of Contents
        </div>
        <hr />
        <div style={{ textAlign: "left", paddingLeft: "1rem" }}>
          <Link
            href='#overview'
            style={{ display: "inline-block", marginBottom: ".5rem" }}
          >
            Section 1: Getting a Bird's-Eye View
          </Link>
          <br />
          <Link
            href='#tethering'
            style={{ display: "inline-block", marginBottom: ".5rem" }}
          >
            Section 2: Installing Arch via iPhone Tethering
          </Link>
          <br />
          <Link
            href='#wifi'
            style={{ display: "inline-block", marginBottom: ".5rem" }}
          >
            Section 3: Packages For Wi-Fi Connection
          </Link>
          <br />
          <Link
            href='#conflicts'
            style={{ display: "inline-block", marginBottom: ".5rem" }}
          >
            Section 4: Wi-Fi Driver Conflicts
          </Link>
          <br />
          <Link
            href='#network-management'
            style={{ display: "inline-block", marginBottom: ".5rem" }}
          >
            Section 5: Bare Bones Network Management
          </Link>
          <br />
          <Link
            href='#grub'
            style={{ display: "inline-block", marginBottom: ".5rem" }}
          >
            Bonus Tip: Booting From USB Using GRUB
          </Link>
          <br />
          <Link
            href='#conclusion'
            style={{ display: "inline-block", marginBottom: ".5rem" }}
          >
            Conclusion
          </Link>
          <br />
          <Link
            href='#next-steps'
            style={{ display: "inline-block", marginBottom: ".5rem" }}
          >
            Next Steps (for me)
          </Link>
          <br />
        </div>
      </div>

      <p className={utilStyles.blogParagraph}>
        I bought a MacBook Air 2015 from a friend last year, intending to use it
        as a Linux playground or baby home server. I installed Manjaro on it and
        enjoyed playing with it for a few days, then I left it on my shelf,
        untouched, for almost a year. I have since graduated from college, and
        now I'm looking for things to keep myself busy with (besides my two
        jobs). About two weeks ago, I decided to abandon Microsoft Windows and
        fully embrace Linux, making it my daily driver. I figured trying Arch
        with limited Linux experience would be an educational trial-by-fire
        experience. Hesitant to immediately wipe my primary laptop and jump
        ship, I decided I should first go through the whole install/config
        process on my ol' dusty MacBook. Welcome back MacBook!
        <br />
        <br />
        Despite having installed Manjaro on the Mac before and performing
        Windows installations throughout my life, it took me longer than
        expected to get Arch off the ground. I fell into a few pitfalls that may
        take other users who are new to Linux some time to climb out of, so I
        wanted to make this article to help out. Although now that I think of
        it, most people trying Arch for the first time are probably already
        experienced with Linux. If they're not, they may be inclined to use the
        installation script, rather than do it by hand. It may very well be that
        this post turns out to be nothing more than a writing exercise, but
        maybe there's someone else out there trying to install Arch by hand on a
        MacBook Air 2015 with limited Linux experience, and I dedicate this to
        them. To get back to the point: in hindsight, these problems I
        encountered were simple, but it took me a while to get everything
        straightened out.
        <br />
        <br />
        There are other guides on installing Arch on MacBooks and official wiki
        pages specifically for Mac troubleshooting. I highly recommend you
        search for and read them as needed because they are very useful. Some
        are full-blown walkthroughs and may include extra things like
        dual-booting, and some are outdated. This article isn't an installation
        walkthrough, I'm just providing recommendations/solutions that are
        specific to issues I encountered.
      </p>
      <hr className={utilStyles.lightHr} />

      <h2 id={"overview"}>Section 1: Getting a Bird's-Eye View</h2>
      <p className={utilStyles.blogParagraph}>
        The official documentation is great, but progress might be slow if
        you're trying to navigate the wiki by yourself for the first time. While
        wiki-wandering can be very educational, I think a concise, high-level
        explanation of the process could be useful for a first-timer:
        <br />
        <br />
        (If you already know what the install process is, you can skip this
        section)
        <br />
        <br />
        The very first step is to get an ISO of Arch and burn it to a USB stick,
        creating your "live environment". When you boot from the USB and to get
        into the live environment, you are starting up a little preconfigured
        Arch system. This little system can be used for installing Arch (duh),
        system maintenance, or even recovery purposes. When you're inside the
        live environment, you aren't using the computer's internal drives, but
        you can still see them as connected storage devices with a command like{" "}
        <span className={utilStyles.inlineCode}>fdisk -l</span>. Since the
        drives are still accessible to us, we still have the ability to
        read/write/delete the information stored on them.
        <br />
        <br />A quick explanation of the whole install process is: we boot into
        the live environment, get rid of the old data on the computer's internal
        disk, repartition and format it, and then download/install the{" "}
        <a href='https://wiki.archlinux.org/title/installation_guide#Install_essential_packages'>
          essential Arch packages
        </a>{" "}
        onto it. Voila, once you've installed the packages and done some basic
        configuration (like setting a login password), you have officially
        installed Arch.
        <br />
        <br />
        Some things to note:
        <br />
        <br />
        ~ The live environment is going to reset itself every time you shut the
        computer down. Any packages/files you install/create on the live
        environment system will no longer exist upon reboot.
        <br />
        <br />
        ~ Assuming you followed the official instructions and only installed the
        essential packages (and nothing more), your new out-of-the-box Arch
        system will be less equipped than the live environment. For example, the
        MacBook won't be able to connect to the internet without additional
        packages.
        <br />
        <br />
        Thankfully, you can easily include any extra packages you need (or want)
        alongside the essentials. In the third section, I'll give you a few
        package suggestions and show you which one you need for the Broadcom
        BCM4360 Wi-Fi card! (spoiler: it's{" "}
        <span className={utilStyles.inlineCode}>usbmuxd</span>)
        <br />
        <br />
        If you're reading this right now and are about to start installing Arch
        on a MacBook 2015, then I recommend reading through my whole article
        quickly before beginning! Or don't. During the actual installation, I
        recommend using the{" "}
        <a href='https://wiki.archlinux.org/title/installation_guide#'>
          official installation guide
        </a>{" "}
        along side another, less technically-worded guide, such as{" "}
        <a href='https://itsfoss.com/install-arch-linux/'>this one</a>. Bouncing
        back between the two can be helpful if you're struggling to understand
        what the official guide is asking you to do.
      </p>
      <hr className={utilStyles.lightHr} />

      <h2 id={"tethering"}>Section 2: Installing Arch via iPhone Tethering</h2>
      <p className={utilStyles.blogParagraph}>
        When I started my first install and went to the official tethering
        instructions for iPhones, it said that you need to install drivers for
        tethering to work. It took me a day to realize that the drivers I needed
        were pre-installed on the live environment. By then, I had already set
        up a whole virtual machine running Arch on my Windows computer just to
        download and compile said drivers to transfer to my MacBook via USB...
        Anyways, if you have an iPhone, it should be pretty simple to get
        tethered up.
        <br />
        <br />
        Once you're in the live environment, simply plug your iPhone into the
        MacBook. Unlock the iPhone, and it should ask whether you "trust this
        computer" or not. If it doesn't ask you this, use the{" "}
        <span className={utilStyles.inlineCode}>idevicepair pair</span> command
        to initiate pairing. Once paired, your iPhone should automatically start
        a hotspot, and the Mac should automatically connect to it (it's like
        magic). You should be able to ping your favorite website now!
        <br />
        <br />
        Remember, iPhone tethering like this won't be possible on your fresh
        Arch system without installing the necessary packages. Lastly, if you
        end up using <span className={utilStyles.inlineCode}>networkd</span> as
        your network manager, the tether won't automatically connect like it
        does in the live environment. You'll need to configure it as if it were
        any other wired connection (
        <a href='https://wiki.archlinux.org/title/IPhone_tethering#Using_systemd-networkd'>
          how to configure wired connection with networkd
        </a>
        ).
      </p>
      <hr className={utilStyles.lightHr} />

      <h2 id={"wifi"}>Section 3: Packages For Wi-Fi Connection</h2>
      <p className={utilStyles.blogParagraph}>
        In order to get your fresh install of Arch connected to the internet,
        your MacBook needs some specific software that cooperates with its
        hardware. The wi-fi card (the Broadcom BCM4360) is unfortunately not
        supported by the default drivers, and the MacBook doesn't seem to jive
        well with <span className={utilStyles.inlineCode}>iwd</span> for wi-fi
        authentication, so we'll need alternatives.
        <br />
        <br />
        Here are the packages you should download (and why):
        <br />
        <br />- <span className={utilStyles.inlineCode}>usbmuxd</span> (for
        iPhone tethering)
        <br />
        <br />- <span className={utilStyles.inlineCode}>
          broadcom-wl-dkms
        </span>{" "}
        (drivers for Broadcom wi-fi card)
        <br />
        <br />- <span className={utilStyles.inlineCode}>
          linux-headers
        </span>{" "}
        (computer needs these for building Broadcom drivers)
        <br />
        <br />- <span className={utilStyles.inlineCode}>
          wpa_supplicant
        </span>{" "}
        (for wi-fi authentication (in place of{" "}
        <span className={utilStyles.inlineCode}>iwd</span>))
        <br />
        <br />- <span className={utilStyles.inlineCode}>less</span> (this one is
        not mac specific- but you can pipe really long command outputs into it,
        which is really helpful on a fresh install when you're using a basic tty
        with no scrolling)
        <br />
        <br />
        So, when you get to{" "}
        <a href='https://wiki.archlinux.org/title/installation_guide#Install_essential_packages'>
          the pacstrap step of the process
        </a>
        , I recommend including all of the above packages.
        <br />
        <br />
        For network management, I've been using{" "}
        <span className={utilStyles.inlineCode}>networkd</span> and{" "}
        <span className={utilStyles.inlineCode}>resolved</span> alongside{" "}
        <span className={utilStyles.inlineCode}>wpa_supplicant</span> /{" "}
        <span className={utilStyles.inlineCode}>wpa_cli</span>. I will explain
        that setup later.
      </p>
      <hr className={utilStyles.lightHr} />

      <h2 id={"conflicts"}>Section 4: Wi-Fi Driver Conflicts</h2>
      <p className={utilStyles.blogParagraph}>
        The <span className={utilStyles.inlineCode}>broadcom-wl-dkms</span>{" "}
        package has some conflicts with other kernel modules, so we need to
        blacklist them.
        <br />
        <br />
        Create the following file:{" "}
        <span className={utilStyles.inlineCode}>
          sudo nano /mnt/etc/modprobe.d/broadcom-wl-dkms.conf
        </span>
        <br />
        <br />
        This new file should just contain these lines: blacklist b43 blacklist
        b43legacy blacklist bcm43xx blacklist bcma blacklist brcm80211 blacklist
        brcmfmac blacklist brcmsmac blacklist ssb And then:{" "}
        <span className={utilStyles.inlineCode}>sudo mkinitcpio -p linux</span>
        <br />
        <br />
        You should be all set.
        <br />
        <i>
          <a href='https://bbs.archlinux.org/viewtopic.php?id=249038'>source</a>
        </i>
      </p>
      <hr className={utilStyles.lightHr} />

      <h2 id={"network-management"}>
        Section 5: Bare Bones Network Management
      </h2>
      <p className={utilStyles.blogParagraph}>
        If you want to go super barebones, you can just use the built in{" "}
        <span className={utilStyles.inlineCode}>systemd-networkd</span> and{" "}
        <span className={utilStyles.inlineCode}>systemd-resolved</span> plus{" "}
        <span className={utilStyles.inlineCode}>wpa_supplicant</span> for all of
        your network management needs. Once you've gotten to the{" "}
        <a href='https://wiki.archlinux.org/title/installation_guide#Network_configuration'>
          network configuration step
        </a>{" "}
        of the install process and have set your hostname, you will need to make
        sure you have a <span className={utilStyles.inlineCode}>networkd</span>{" "}
        configuration file and a hosts file.
        <br />
        <br />
        The <span className={utilStyles.inlineCode}>networkd</span>{" "}
        configuration file for your wi-fi card should be{" "}
        <span className={utilStyles.inlineCode}>
          /etc/systemd/networks/25-wireless.network
        </span>
        , and contain:
      </p>

      <div className={utilStyles.blockCode}>
        [Match]
        <br /> Name=YOUR_WIFI_CARD_NAME
        <br />
        <br /> [Network]
        <br /> DHCP=yes
        <br /> IgnoreCarrierLoss=3s
        <br />
      </div>

      <p className={utilStyles.blogParagraph}>
        (
        <i>
          <a href='https://wiki.archlinux.org/title/systemd-networkd#Wireless_adapter'>
            source
          </a>
        </i>
        )
        <br />
        <br />
        Use <span className={utilStyles.inlineCode}>ip link</span> or{" "}
        <span className={utilStyles.inlineCode}>networkctl</span> to find your
        wifi card's name. Mine was <i>wlp3s0</i>, yours will likely be similar.
        <br />
        <br />
        The hosts file should be:{" "}
        <span className={utilStyles.inlineCode}>/etc/hosts</span>, and contain:
        <br />
      </p>

      <div className={utilStyles.blockCode}>
        127.0.0.1 localhost <br />
        ::1 localhost <br />
        127.0.1.1 YOUR_HOSTNAME_HERE
      </div>

      <p className={utilStyles.blogParagraph}>
        (
        <i>
          <a href='https://itsfoss.com/install-arch-linux/#network-configuration'>
            source
          </a>
        </i>
        )
        <br />
        <br />
        <br />I would recommend restarting{" "}
        <span className={utilStyles.inlineCode}>networkd</span> and{" "}
        <span className={utilStyles.inlineCode}>resolved</span> afterwards to
        make sure the changes are put into effect, then enabling them so that
        they automatically launch upon boot in the future (
        <a href='https://wiki.archlinux.org/title/systemd#Using_units'>
          help for systemctl commands
        </a>
        )
        <br />
        <br />
        Once you've done that and you have a{" "}
        <span className={utilStyles.inlineCode}>networkd</span> configuration
        file for the wi-fi adapter, you need to use{" "}
        <span className={utilStyles.inlineCode}>wpa_supplicant</span> to get
        logged into the wi-fi network. Use{" "}
        <a href='https://wiki.archlinux.org/title/wpa_supplicant#Connecting_with_wpa_cli'>
          these instructions
        </a>{" "}
        for logging into your wi-fi network.
        <br />
        <br />
        NOTE: If you have problems with{" "}
        <span className={utilStyles.inlineCode}>wpa_cli</span> not connecting,
        run it with <span className={utilStyles.inlineCode}>sudo</span>!
        <br />
        <br />
        Once you've gone through those steps and enabled your network, you can
        check the status of your connection with{" "}
        <span className={utilStyles.inlineCode}>networkctl</span>. If you
        authenticated to the network successfully, the wi-fi card should be
        "routable" and "managed".
        <br />
        <br />
        FYI, even after you have{" "}
        <span className={utilStyles.inlineCode}>wpa_supplicant</span> connected
        to a network and a config saved, you will need to initialize it with the{" "}
        <span className={utilStyles.inlineCode}>
          wpa_supplicant -B -i _interface_ -c
          /etc/wpa_supplicant/wpa_supplicant.conf
        </span>{" "}
        command each time you reboot the computer. There's gotta be a way to
        automate that, but I haven't taken the time to figure it out yet.
        <br />
        <br />
        To understand this setup more, read about{" "}
        <i>
          <a href='https://wiki.archlinux.org/title/systemd-networkd'>
            networkd
          </a>
        </i>
        ,{" "}
        <i>
          <a href='https://wiki.archlinux.org/title/Systemd-resolved'>
            resolved
          </a>
        </i>
        , and{" "}
        <i>
          <a href='https://wiki.archlinux.org/title/wpa_supplicant'>
            wpa_supplicant
          </a>
        </i>
        .
      </p>
      <hr className={utilStyles.lightHr} />

      <h2 id={"grub"}>Bonus Tip: Booting From USB Using GRUB</h2>
      <p className={utilStyles.blogParagraph}>
        Rewinding back to the very beginning of the install process, my first
        issue was my lack of a boot menu besides the GRUB console. I had no
        BIOS, no OpenFirmware, no GUI for booting the computer at all! I had
        never seen GRUB before and I was already running into issues before I
        had even booted the live environment, so I was a little nervous.
        <br />
        <br />
        Thankfully, I found{" "}
        <a href='https://szymonkrajewski.pl/how-to-boot-system-from-usb-using-grub/'>
          a lovely post
        </a>{" "}
        that explains the process of booting from a USB with GRUB in a nice and
        concise manner. That post really helped me out- so much so, that I felt
        the need to save the procedure in this guide, reworded by myself (if you
        don't need to use GRUB, this is superfluous information):
        <br />
        <br />
        <b>Step 1: Locate your USB drive</b>
        <br />
        Once you are in GRUB console, use{" "}
        <span className={utilStyles.inlineCode}>ls -la</span> to see what
        devices you're working with.
        <br />
        <br />
        My live environment USB drive was{" "}
        <span className={utilStyles.inlineCode}>(hd0,msdos1)</span>, but it
        could be different on your machine.
        <br />
        <br />
        It was easy to determine which device was the live environment, because{" "}
        <span className={utilStyles.inlineCode}>(hd0,msdos1)</span> was the only
        device with a msdos partition GRUB could find, and the label for the
        drive was "ARCHLINUX_202402" (if you can't see the label, make sure
        you're including the <span className={utilStyles.inlineCode}>-l</span>{" "}
        flag).
        <br />
        <br />
        <b>Step 2: Enter the USB drive</b>
        <br />
        Use this command to set GRUB's root directory to the USB:{" "}
        <span className={utilStyles.inlineCode}>set root=(hd0,msdos1)</span>
        <br />
        <br />
        To ensure you're inside the right drive, we can use the{" "}
        <span className={utilStyles.inlineCode}>find</span> command to see what
        files are present. Type{" "}
        <span className={utilStyles.inlineCode}>find /</span> and hit TAB for a
        list of possible files. You should see an{" "}
        <span className={utilStyles.inlineCode}>arch/</span> and{" "}
        <span className={utilStyles.inlineCode}>boot/</span> folder, alongside
        some .efi files.
        <br />
        <br />
        <b>Step 3: Boot from the USB drive!</b>
        <br />
        Now, we need to instruct GRUB to jump into the bootloader that already
        lives on the USB, and load it for use. This process is called
        chain-loading (
        <i>
          <a href='https://www.gnu.org/software/grub/manual/grub/html_node/Chain_002dloading.html'>
            source
          </a>
        </i>
        ).
        <br />
        <br />
        Use the following command to chain-load the bootloader for the Arch
        installation medium:
        <br />
        <span className={utilStyles.inlineCode}>
          chainloader /efi/boot/BOOTx64.efi
        </span>
        <br />
        <br />
        NOTE: The bootloader file may have a slightly different name for you,
        but it will be in the{" "}
        <span className={utilStyles.inlineCode}>/efi/boot/</span> folder. So,
        just use best judgment when looking in the folder for the .efi file that
        makes the most sense.
        <br />
        <br />
        Finally, boot with <span className={utilStyles.inlineCode}>boot</span>!
        <br />
        <br />
        If everything went according to plan, you should be presented with a
        menu that give you the option to launch into the Arch Installation
        Medium.
      </p>
      <hr className={utilStyles.lightHr} />

      <h2 id={"conclusion"}>Conclusion</h2>
      <p className={utilStyles.blogParagraph}>
        As a lifelong Windows user, installing Arch provided a fun challenge and
        the opportunity to understand how my computer works a bit more
        intimately. I have learned a lot about the operating system installation
        process, I have become more comfortable navigating official
        documentation/manual pages, and I have been deeply humbled in my
        attempts to convert to a more command-line-focused computer setup. It's
        amazing how much you learn while earning a computer science degree, and
        yet 80% of what I had to do to get Arch set up, I needed to teach myself
        on the spot. I am extremely grateful to my professors who introduced me
        to bash and disk management, as this process would've been a nightmare
        without it.
        <br />
        <br />
        After having gone through this process, I believe that computer science
        students need far more exposure to the command line. Honestly, I think
        that computer science curriculums should require students to use a
        UNIX-like OS for all four years! I've seen peers in their 3rd/4th-year
        struggle with things like{" "}
        <span className={utilStyles.inlineCode}>ls</span> and{" "}
        <span className={utilStyles.inlineCode}>cd</span>, let alone piping
        output from one command into another. Who knows, I just personally
        believe that university is far too expensive for it to be focused purely
        on high-level languages like Java. As a student who felt like they got
        the short end of the stick, I really do think we would benefit from a
        stronger focus on C, using the CLI, and exploring systems that are not
        using Windows.
        <br />
        <br />
        Anyways, writing this was a lot of fun, and I hope that maybe this post
        actually helps someone out!
      </p>
      <hr className={utilStyles.lightHr} />

      <h2 id={"next-steps"}>Next Steps (for me)</h2>
      <p className={utilStyles.blogParagraph}>
        After I get comfortable with a nice WM or DE configuration, I plan on
        using my newfound knowledge to finally convert my Windows laptop into an
        Arch machine. Then, I intend on wiping my Arch MacBook and using it to
        try out OpenBSD next! I just adore that little pufferfish, and its
        obsession with "correctness" has drawn my attention. I'm intrigued to
        see the differences/similarities, but from my layman's understanding,
        OpenBSD is kind of like a more focused, security minded, and better
        documented Arch.
        <br />
        <br />
        Until next time!
      </p>
      <a href='#top' style={{ fontSize: ".7rem" }}>
        back to top
      </a>
    </Layout>
  );
}
