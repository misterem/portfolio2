import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Max Altman",
  author: "Max Moshe Altman",
  description:
    "Computer science student at The Hebrew University of Jerusalem with experience in IT and network" +
    " administration",
  lang: "en",
  siteLogo: "/max-1-small.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://linkedin.com/in/max-moshe-altman" },
    { text: "Github", href: "https://github.com/misterem" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Max Altman",
    specialty: "Computer science student",
    summary:
      "Computer science student at The Hebrew University of Jerusalem with experience in IT and network" +
      " administration",
    email: "MaxMosheAltman@gmail.com",
  },
  experience: [
    {
      company: "IDF",
      position: "IT & Network Administrator",
      startDate: "July 2020",
      endDate: "Aug 2022",
      summary: [
        "Managed over 400 AD Users and Computers",
        "In charge of Network Administration and Operation",
        "Worked with Elbit & Rafael technicians testing new software systems in the field",
        "Maintained multiple mobile Battle Management command units",
      ],
    },
  ],
  projects: [
    {
      name: "Random Walker",
      summary: "An application in Python that visualizes the mathematical concept of a random walk and a" +
        " lattice random walk with various features",
      linkPreview: "https://youtu.be/8Y-_j7cnulA",
      linkSource: "https://github.com/misterem/RandomWalker",
      image: "/walker.png",
    },
    {
      name: "Data Analysis of Emoji Use",
      summary: "An extensive analysis of emojis used in tweets and movie reviews online using publicly" +
        " available datasets",
      linkPreview: "/emoji.pdf",
      linkSource: "https://github.com/misterem/Emoji-Data-Project",
      image: "/emoji-3.png",
    },
  ],
  about: {
    description: `
      Hi, I'm Max. I'm currently pursuing a Bachelor of Science in Computer Science at The Hebrew University of Jerusalem, expecting to graduate in 2027. As a Network Administrator in The IDF, I managed over 400 Active Directory users and computers, ensuring seamless network operations. We frequently collaborated with leading industry technicians from companies like Elbit and Rafael to test innovative systems in the field.
    `,
    image: "/max-1-big.jpg",
  },
};

// #5755ff

