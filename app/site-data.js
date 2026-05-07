import adsbImage from "../images/adsb.jpeg";
import capstoneImage from "../images/capstone.jpeg";
import fluxImage from "../images/flux.jpeg";
import metadataImage from "../images/metadata.jpeg";
import srchImage from "../images/srch.jpeg";
import planeImage  from "../images/plane.png";

export const socialLinks = {
  github: "https://github.com/zacklown",
  linkedin: "https://www.linkedin.com/in/zack-lown/",
  personalBlog: "https://blog.zacklown.com",
  professionalBlog: "https://zacklown.github.io"
};

export const projects = [
  {
    slug: "Metadata",
    eyebrowLabel: "metadata.zacklown.com",
    eyebrowHref: "https://metadata.zacklown.com",
    title: "Metadata health Site",
    repoHref: "https://github.com/zacklown/health",
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
    repoHref: "https://github.com/zacklown/flux",
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
    repoHref: "https://github.com/orgs/AI-Authentication/repositories",
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
    repoHref: "https://github.com/manoa-srch",
    description:
      "A database for instructors to find and share resources for teaching socially responsible computing topics in their classrooms, designed to make it easier for educators to incorporate these important topics into their curriculum.",
    why:
      "In collaboration with Brown Univerity, my team in a software engineering course designed this project to address the need for more accessible resources on socially responsible computing..",
    how:
      "Using a Next.js frontend and a prisma/PostgreSQL backend, we created a robust admin and user auth flow hosted on Vercel and Neon db. Collaboration was a big part of this project as seen from the github repo tree.",
    tags: ["Vercel", "Full-Stack", "Github Collaboration", "Ethics"],
    image: srchImage
  },
  {
    slug: "plane",

    title: "AIAA Fixed Wing Drone ",
    description:
      "As a VIP project for my Bachelors, I worked with a team intergrating automous flight software into a custom-built drone using ardupilot.",
    why:
      "The need for the development of the automous drone function came from the limiutions set in the competion guidelines. I was in charge of drone avionics working alongside a team of all Mechanical Engineers.",
    how:
      "Ardupilot is a robust and open-source software for controlling drones. We used a pixhawk flight controller and custom-built the drone frame and avionics. The software was intergrated with the hardware and tested extensively to ensure reliable flight.",
    tags: ["Hardware-Software", "Design Systems", "Soldering", "CAD"],
    image: planeImage
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
