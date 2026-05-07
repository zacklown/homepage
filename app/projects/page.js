import Link from "next/link";
import ProjectList from "./project-list";
import { projects, socialLinks } from "../site-data";

function ExternalLinkIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M14 5h5v5M10 14 19 5M19 13v4a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
    </svg>
  );
}

export const metadata = {
  title: "Zack Lown - Projects",
  description: "A complete list of my projects."
};

export default function ProjectsPage() {
  return (
    <main className="page-shell">
      <header className="site-header">
        <Link className="brand" href="/">
          Zack Lown
        </Link>
        <nav className="site-nav" aria-label="Primary">
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <a className="nav-external" href={socialLinks.personalBlog} target="_blank" rel="noreferrer">
            Personal blog
            <ExternalLinkIcon />
          </a>
          <a className="nav-external" href={socialLinks.professionalBlog} target="_blank" rel="noreferrer">
            Professional blog
            <ExternalLinkIcon />
          </a>
        </nav>
        <a className="button button-primary" href="/Zack%20Lown%20resume.pdf" download>
          Download resume
        </a>
      </header>

      <section className="section page-intro">
        <p className="eyebrow">Projects</p>
        <h1>Complete list of projects</h1>
        <p className="lede">
          All of my projects- most are personal but some were done as part of course work and are noted as so. Click the links on the projects to go to their live site if applicable. 
        </p>
      </section>

      <section className="section section-tight">
        <ProjectList projects={projects} />
      </section>
    </main>
  );
}
