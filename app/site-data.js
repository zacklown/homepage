import adsbImage from "../images/adsb.png";
import capstoneImage from "../images/capstone.png";
import fluxImage from "../images/flux.png";
import metadataImage from "../images/metadata.png";
import srchImage from "../images/srch.png";

export const socialLinks = {
  github: "https://github.com/zacklown",
  linkedin: "https://www.linkedin.com/in/zack-lown/",
  personalBlog: "https://blog.zacklown.com",
  professionalBlog: "zacklown.github.com"
};

export const projects = [
  {
    slug: "Metadata",
    eyebrowLabel: "metadata.zacklown.com",
    eyebrowHref: "https://metadata.zacklown.com",
    title: "Metadata health Site",
    description:
      "A wikipedia-stype site used for organize my own personal research on topics in a searchable and UI-friendly way.",
    why:
      "With the amount of misinformation I've seen on social media about fad diets and fear mongering around health topics, I wanted to make a sciene-based site that I could share with my friends and that people I trust could contribute to.'",
    how:
      "This site is self-hosted off my server with a astro frontend and a headless CMS backend called payload with its own dedicated site for contributors. Its been fully dockerized for easy development with auto-deployment to my server when I push to main.",
    tags: ["Astro", "CMS", "Docker", "postgreSQL"],
    image: metadataImage
  },
  {
    slug: "adsb",
    eyebrowLabel: "ADSB.zacklown.com",
    eyebrowHref: "https://adsb.zacklown.com",
    title: "ADSB Flight Tracker",
    description:
      "An interactive flight tracking site that visualizes live ADS-B data from a local software-defined radio receiver ran out of my house.",
    why:
      "One of my many interests is signals and I thought this would be a fun way to visualize publically available data from the radio spectrum. I also wanted to learn more about software defined radios and how to process the data they receive.",
    how:
      "The site and decoder were avalible Github projects that I edited to make the site more personal. The SDR is a USB dongle with an antenna that I have set up in my house to receive the ADS-B signals that planes broadcast. The data is then processed and sent to the frontend.",
    tags: ["SDR", "Hardware-Software", "Interactive"],
    image: adsbImage
  },
  {
    slug: "flux",
    eyebrowLabel: "flux.zacklown.com",
    eyebrowHref: "https://flux.zacklown.com",
    title: "Flux Image and Doc Editor",
    description:
      "This is a UI-heavy project that does the basic functions of an image and document editor with a focus on simplicity after frusteration with the bloat of existing products.",
    why:
      "While there's not much transoformative about the core functionality, I wanted something that fit my basic needs and also put me in control of the data security. Other sites send uploads to a server for processing- I travel alot and reformatting a photo of your passport or other sensitive documents maybe shouldnt be on safephotoresizer.rus.",
    how:
      "This is a next.js app and it mainly uses the browser's built in canvas API to do the image processing. The document editor is built similarly except it uses a open-source library for exporting to PDF.",
    tags: ["Rust", "WASM", "Security"],
    image: fluxImage
  },
  {
    slug: "capstone",
    eyebrowLabel: "capstone.zacklown.com",
    eyebrowHref: "https://capstone.zacklown.com",
    title: "Adversarial Attack Face Authentication System",
    description:
      "A face authentication system designed to show how adversarial attacks can be used to bypass biometric security measures, built as my senior capstone project for my Bachelors in Computer Engineering.",
    why:
      "I find AI very interesting and wanted to explore the security implications of it. As AI becomes more prevalent in security systems, I think it's important to understand how it can be easily tricked and why its so important to have a human-in-the-loop.",
    how:
      "The frontend of this site is just a simple next.js app that uses the webcam to capture an image and send it to the backend for processing. The backend uses the ArcFace deep learning model and was trained on a large dataset. The attack uses the Projected Gradient Descent method to create false certainty.",
    tags: ["CMS", "Next.js", "Content design"],
    image: capstoneImage
  },
  {
    slug: "srch",
    eyebrowLabel: "srch.zacklown.com",
    eyebrowHref: "https://srch.zacklown.com",
    title: "Socially Responsible Computing Handbook",
    description:
      "An internal operations interface for monitoring events, triaging incidents, and keeping teams aligned around system health.",
    why:
      "Operations teams needed a single view for alerts, status, and response context so they could move faster during incidents and reduce handoff friction.",
    how:
      "I framed the product around prioritization: clear event grouping, escalation context where it matters, and layouts optimized for scanning under pressure.",
    tags: ["Monitoring", "Dashboards", "Systems"],
    image: srchImage
  },
  {
    slug: "briefcase-os",
    eyebrowLabel: "Project link",
    eyebrowHref: "https://example.com/briefcase-os",
    title: "Briefcase OS",
    description:
      "A personal command center for proposals, project notes, and delivery checklists, designed to reduce context switching.",
    why:
      "Independent operators need a system that keeps planning, delivery, and communication close together instead of spread across disconnected tools.",
    how:
      "I designed it as a practical workspace layer with repeatable templates, tight navigation, and just enough structure to support daily execution.",
    tags: ["Productivity", "Design systems", "Workflow"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBufL3pxjoIEyEZ9RGMQYITWo7zUqq5XxHWzI0SCz_E19pc380WCZXiufsnACyZu11hbPMNk6l10YudRPBeFA3NBsocXkickDkUselQH6SPnLx3dLhnz0L0DxTdVJ-MWnf_Xl_wAahHEKnbiZhNzVVfYOkJXlKoFLg6MRMBq-juyNH3Vab7_qFbLuAmDRgGGzNcRdFNbmH-8W6FZZOhtEB2VDjN6QcJwjY20tR050l2O3i5H7U9lWpgx_daV934qiCDI7aVXllWP4ni"
  }
];

export const expertise = [
  {
    title: "Frontend systems",
    items: ["Next.js", "React", "TypeScript", "Astro", "Tailwind"]
  },
  {
    title: "Backend foundations",
    items: ["Node.js", "PostgreSQL", "APIs", "Infrastructure"]
  },
  {
    title: "Product craft",
    items: ["UX architecture", "Editorial layouts", "Interaction design"]
  },
  {
    title: "Delivery",
    items: ["CI/CD", "GitHub workflows", "Performance review", "Documentation"]
  }
];

export const stats = [
  { value: "2026", label: "Graduated UHM" },
  { value: "23", label: "Personal Projects" },
  { value: "24", label: "Years old" }
];
