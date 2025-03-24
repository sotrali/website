import PostLayout from "../../components/blogpost-layout.js";
import utilStyles from "../../styles/utils.module.css";
import Link from "next/link";

// Main Component
export default function Home() {
  return (
    <PostLayout
      title={"A Light Guide for Installing Arch Linux on a MacBook Air 2015"}
      postedMonthYear={"March 2024"}
      lastModified={"08/25/24"}
    >
      <div
        className={utilStyles.card}
        style={{ margin: "1.5rem 3rem", padding: "1rem" }}
      >
        {/* TODO: make the table of contents into a component */}
        <div style={{ textAlign: "center", fontWeight: "bold" }}>
          Table of Contents
        </div>
        <hr />
        <div style={{ textAlign: "left", paddingLeft: "1rem" }}>
          <ul style={{ paddingLeft: "1rem" }}>
            <li>
              <Link
                href="#intro"
                style={{ display: "inline-block", marginBottom: ".5rem" }}
              >
                Introduction
              </Link>
            </li>
            <li>
              <Link
                href="#tethering"
                style={{ display: "inline-block", marginBottom: ".5rem" }}
              >
                Section 1: Installing Arch via iPhone Tethering
              </Link>
            </li>
            <li>
              {" "}
              <Link
                href="#wifi"
                style={{ display: "inline-block", marginBottom: ".5rem" }}
              >
                Section 2: Packages for Wi-Fi Connection
              </Link>
            </li>
            <li>
              {" "}
              <Link
                href="#conflicts"
                style={{ display: "inline-block", marginBottom: ".5rem" }}
              >
                Section 3: Wi-Fi Driver Conflicts
              </Link>
            </li>
            <li>
              {" "}
              <Link
                href="#network-management"
                style={{ display: "inline-block", marginBottom: ".5rem" }}
              >
                Section 4: Bare Bones Network Management
              </Link>
            </li>
            <li>
              {" "}
              <Link
                href="#conclusion"
                style={{ display: "inline-block", marginBottom: ".5rem" }}
              >
                Conclusion
              </Link>
            </li>
            <li>
              {" "}
              <Link
                href="#next-steps"
                style={{ display: "inline-block", marginBottom: ".5rem" }}
              >
                Next Steps (for me)
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <h2 id={"intro"}>Introduction</h2>
      <p className={utilStyles.blogParagraph}>
        I bought a MacBook Air 2015 from a friend last year, intending to use it
        as a Linux playground or baby home server. I installed Manjaro on it and
        enjoyed playing with it for a few days, then I left it on my shelf,
        untouched, for almost a year. About two weeks ago, as a little post-grad
        project, I decided to abandon Microsoft Windows and fully embrace Linux,
        making it my daily driver. Trying Arch with limited Linux experience
        seemed like an educational. trial-by-fire, and maybe even fun approach
        to adopting a new OS. I was still hestitant to jump in without any
        safety net though, and going through the process on a virtual machine
        just didn't appeal to me. So, I decided I should first go through the
        whole install/config procedure on my ol' dusty MacBook before doing it
        on my primrary laptop. I knew buying that thing was a good idea!
        <br />
        <br />
        There are full-on guides for installing Arch on MacBooks and official
        Arch wiki pages specifically for Mac troubleshooting. I highly recommend
        you search for and read them as needed, they are very useful and I
        wouldn't be writing this without their help! There's more material than
        I initially realized, some are fancier walkthroughs that include extra
        things like dual-booting, and unfortunately some of it is just outdated.
        This article is not an installation walkthrough, I'm just providing
        recommendations/solutions that are specific to issues I encountered, for
        fun.
      </p>
      <hr className={utilStyles.lightHr} />
      <h2 id={"tethering"}>Section 1: Installing with iPhone Tethering</h2>
      <p className={utilStyles.blogParagraph}>
        When I first started, I was getting tangled up in the documentation
        trying to set up an internet connection. It's much easier than I first
        thought.
        <br />
        <br />
        Once you're in the live installation environment, simply plug your
        iPhone into the MacBook. Unlock the iPhone, and it should ask whether
        you "trust this computer" or not. If it doesn't ask you this, use the{" "}
        <span className={utilStyles.inlineCode}>idevicepair pair</span> command
        to initiate pairing. Once paired, your iPhone should automatically start
        a hotspot, and the Mac should automatically connect to it (start a
        hotspot if it doesn't do it automatically). Voila! That's it.
        <br />
        <br />
        HOWEVER! iPhone tethering like this is not built into stock Arch, so you
        must{" "}
        <a href="https://wiki.archlinux.org/title/installation_guide#Install_essential_packages">
          pacstrap
        </a>{" "}
        the <span className={utilStyles.inlineCode}>usbmuxd</span> and{" "}
        <span className={utilStyles.inlineCode}>libimobiledevice</span>{" "}
        packages. Plus, if you end up using{" "}
        <span className={utilStyles.inlineCode}>networkd</span> as your network
        manager, the tether won't automatically connect like it does in the live
        environment. You'll need to configure it as if it were any other wired
        connection (
        <a href="https://wiki.archlinux.org/title/IPhone_tethering#Using_systemd-networkd">
          how to configure wired connection with networkd
        </a>
        ).
      </p>
      <hr className={utilStyles.lightHr} />

      <h2 id={"wifi"}>Section 2: Packages for Wi-Fi</h2>
      <p className={utilStyles.blogParagraph}>
        The Macbook's wi-fi card (the Broadcom BCM4360) is unfortunately not
        supported by the default drivers, and it doesn't seem to jive well with{" "}
        <span className={utilStyles.inlineCode}>iwd</span> for wi-fi
        authentication, so we'll need to use other packages.
        <br />
        <br />
        Here are the packages you should include during your{" "}
        <a href="https://wiki.archlinux.org/title/installation_guide#Install_essential_packages">
          pacstrapping process
        </a>{" "}
        for connectivity (and why):
      </p>
      <ul style={{ textAlign: "left" }}>
        <li>
          <span className={utilStyles.inlineCode}>usbmuxd</span> and{" "}
          <span className={utilStyles.inlineCode}>libimobiledevice</span> (for
          iPhone tethering)
        </li>
        <br />
        <li>
          <span className={utilStyles.inlineCode}>broadcom-wl-dkms</span>{" "}
          (drivers for Broadcom wi-fi card)
        </li>
        <br />
        <li>
          <span className={utilStyles.inlineCode}>linux-headers</span> (computer
          needs these for building Broadcom drivers)
        </li>
        <br />
        <li>
          <span className={utilStyles.inlineCode}>wpa_supplicant</span> (for
          wi-fi authentication (in place of{" "}
          <span className={utilStyles.inlineCode}>iwd</span>)
        </li>
        <br />
        <li>
          <span className={utilStyles.inlineCode}>less</span> (this one isn't
          actually related to wifi, it's just a suggestion of mine. It's very
          helpful when you're just using a basic tty that can't scroll, I pipe
          command outputs into it all the time)
        </li>
      </ul>
      <p className={utilStyles.blogParagraph}>
        For network management, I've been using{" "}
        <span className={utilStyles.inlineCode}>networkd</span> and{" "}
        <span className={utilStyles.inlineCode}>resolved</span> alongside{" "}
        <span className={utilStyles.inlineCode}>wpa_supplicant</span> /{" "}
        <span className={utilStyles.inlineCode}>wpa_cli</span>. I explain this
        setup in <Link href={"#network-management"}>section five</Link>.
      </p>
      <hr className={utilStyles.lightHr} />
      <h2 id={"conflicts"}>Section 3: Wi-Fi Driver Conflicts</h2>
      <p className={utilStyles.blogParagraph}>
        The <span className={utilStyles.inlineCode}>broadcom-wl-dkms</span>{" "}
        package has some conflicts with other kernel modules, so we need to
        blacklist them.
        <br />
        <br />
        Create/Edit the file as root:{" "}
        <span className={utilStyles.inlineCode}>
          # nano /mnt/etc/modprobe.d/broadcom-wl-dkms.conf
        </span>
        <br />
        <br />
        This new file should just contain these lines:
      </p>
      <div className={utilStyles.blockCode}>
        blacklist b43
        <br />
        blacklist b43legacy
        <br /> blacklist bcm43xx
        <br /> blacklist bcma
        <br />
        blacklist brcm80211
        <br /> blacklist brcmfmac
        <br /> blacklist brcmsmac
        <br /> blacklist ssb
      </div>
      <p className={utilStyles.blogParagraph}>
        Then, run mkinitcpio:{" "}
        <span className={utilStyles.inlineCode}># mkinitcpio -p linux</span>
        <br />
        <br />
        You should be all set.
        <br />
        <i>
          <a href="https://bbs.archlinux.org/viewtopic.php?id=249038">source</a>
        </i>
      </p>
      <hr className={utilStyles.lightHr} />
      <h2 id={"network-management"}>
        Section 4: Bare Bones Network Management
      </h2>
      <p className={utilStyles.blogParagraph}>
        If you want to go super barebones, you can just use the built in{" "}
        <span className={utilStyles.inlineCode}>systemd-networkd</span> and{" "}
        <span className={utilStyles.inlineCode}>systemd-resolved</span> packages
        plus <span className={utilStyles.inlineCode}>wpa_supplicant</span> for
        all of your network management needs (assuming you've installed
        wpa_supplicant). In this section, we'll use these tools to get
        connected!
        <br />
        <br />
        Once you've gotten to the{" "}
        <a href="https://wiki.archlinux.org/title/installation_guide#Network_configuration">
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
        <i>
          <a href="https://wiki.archlinux.org/title/systemd-networkd#Wireless_adapter">
            source
          </a>
        </i>
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
        <i>
          <a href="https://itsfoss.com/install-arch-linux/#network-configuration">
            source
          </a>
        </i>
        <br />
        <br />
        <br />I would recommend restarting{" "}
        <span className={utilStyles.inlineCode}>networkd</span> and{" "}
        <span className={utilStyles.inlineCode}>resolved</span> afterwards to
        make sure the changes are put into effect, then{" "}
        <span className={utilStyles.inlineCode}>systemctl enable</span>-ing them
        so that they automatically launch upon boot in the future (
        <a href="https://wiki.archlinux.org/title/systemd#Using_units">
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
        <a href="https://wiki.archlinux.org/title/wpa_supplicant#Connecting_with_wpa_cli">
          these instructions
        </a>{" "}
        for logging into your wi-fi network. They're pretty straight forward and
        you should be able to just follow along in that section I linked to.
        <br />
        <br />
        NOTE: If you have problems with{" "}
        <span className={utilStyles.inlineCode}>wpa_cli</span> not
        starting/connecting properly, run it with{" "}
        <span className={utilStyles.inlineCode}>sudo</span>!
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
        to a network and a config saved, you will need to initialize it with the
        following command every time you reboot the computer:{" "}
        <span className={utilStyles.inlineCode}>
          wpa_supplicant -B -i _interface_ -c
          /etc/wpa_supplicant/wpa_supplicant.conf
        </span>{" "}
        <br />
        <br /> I just put this command in my{" "}
        <span className={utilStyles.inlineCode}>.bashrc</span> so I don't have
        to type it out every time I boot.
        <br />
        <br />
        To understand this setup more, read about{" "}
        <i>
          <a href="https://wiki.archlinux.org/title/systemd-networkd">
            networkd
          </a>
        </i>
        ,{" "}
        <i>
          <a href="https://wiki.archlinux.org/title/Systemd-resolved">
            resolved
          </a>
        </i>
        , and{" "}
        <i>
          <a href="https://wiki.archlinux.org/title/wpa_supplicant">
            wpa_supplicant
          </a>
        </i>
        .
      </p>
      <hr className={utilStyles.lightHr} />
      <h2 id={"conclusion"}>Conclusion</h2>
      <p className={utilStyles.blogParagraph}>
        As a lifelong Windows user, installing Arch provided a fun challenge and
        the opportunity to understand how my computer works more intimately. I
        have learned a lot about the operating system installation process, have
        become more comfortable navigating official documentation/manual pages,
        and have been deeply humbled in my attempts to convert to a more
        command-line-focused computer setup. It's amazing how much you learn
        while earning a computer science degree, and yet 80% of what I had to do
        to get Arch set up, I needed to teach myself on the spot. I am extremely
        grateful to my professors who introduced me to bash and disk management,
        as this process would've been a nightmare without it.
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
        believe that university is far too expensive for it to be so narrowly
        focused on high-level languages like Java. As a graduate who feels like
        they received the short end of the stick (and trust me, I really put
        effort into my education), I firmly believe students would benefit from
        a curriculum that focuses more on C, shells, and exploring other
        operating systems that are not Windows.
        <br />
        <br />
        Anyways, writing this was a lot of fun, and I hope that this post maybe
        helps someone out!
      </p>
      <hr className={utilStyles.lightHr} />
      <h2 id={"next-steps"}>Next Steps (for me)</h2>
      <p className={utilStyles.blogParagraph}>
        After I get comfortable with a window manager or desktop environment, I
        plan on using my newfound knowledge to finally convert my Windows laptop
        into an Arch machine. Then, I intend on wiping my Arch MacBook and using
        it to try out OpenBSD next! I just adore that little pufferfish, and its
        obsession with "correctness" has piqued my interest. I'm intrigued to
        see the differences/similarities between a BSD and Linux, but from my
        layman's understanding, OpenBSD is kind of like a more focused, security
        minded, less supported, and better documented Arch.
        <br />
        <br />
        Until next time!
      </p>
      <br />
      <br />
      <i>
        If you noticed any errors or mis-explanations of any of these steps,
        please feel free to contact me at <u>vesspa0330@gmail.com</u> and let me
        know!
      </i>
    </PostLayout>
  );
}
