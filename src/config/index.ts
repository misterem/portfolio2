import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Max Moshe Altman",
  author: "Max Moshe Altman",
  description:
    "Computer science student at The Hebrew University of Jerusalem with experience in IT and network" +
    " administration",
  lang: "en",
  siteLogo: "/alejandro-small.jpg",
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
    name: "Max Moshe Altman",
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
        "Implemented advanced memory management and code optimization techniques, resulting in a reduction in application load time by 40% and a decrease in crashes by 25%. This significantly improved user experience and increased user retention by 20%.",
        "I led a team of developers in building and integrating new features using Jetpack Android components such as LiveData and ViewModel. This enabled us to build scalable and maintainable applications, reducing the crash rate by 20% and speeding up the time to delivery of new features by 15%.",
        "Integrated Google Pay for in-app purchases, resulting in a 35% increase in mobile transaction revenue. Additionally, implemented Firebase Analytics to gain insights into user behavior, enabling data-driven optimizations and a 30% increase in user retention.",
      ],
    },
  ],
  projects: [
    {
      name: "Spotifu Music",
      summary: "A music streaming app that emulates Spotify's core features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/spotifu.png",
    },
    {
      name: "Shopp App",
      summary: "An e-commerce platform that replicates Shopify's key features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/shopify-clon.png",
    },
  ],
  about: {
    description: `
      Hi, I'm Max. I'm currently pursuing a Bachelor of Science in Computer Science at The Hebrew University of Jerusalem, expecting to graduate in 2027. As a Network Administrator in The IDF, I managed over 400 Active Directory users and computers, ensuring seamless network operations. We frequently collaborated with leading industry technicians from companies like Elbit and Rafael to test innovative systems in the field.
    `,
    image: "/alejandro-big.jpg",
  },
};

// #5755ff

