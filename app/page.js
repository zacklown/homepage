import Image from "next/image";
import Link from "next/link";
import profileImage from "../images/me_full.jpg";
import SiteHeader from "./site-header";
import { expertise, projects, socialLinks, stats } from "./site-data";

function ArrowUpRightIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M7 17 17 7M9 7h8v8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M14 5h5v5M10 14 19 5M19 13v4a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M12 2.5a9.5 9.5 0 0 0-3 18.5c.47.09.64-.2.64-.46v-1.62c-2.6.57-3.15-1.1-3.15-1.1-.42-1.1-1.04-1.39-1.04-1.39-.85-.58.07-.57.07-.57.95.07 1.44.97 1.44.97.83 1.46 2.2 1.03 2.74.8.08-.62.33-1.03.59-1.27-2.08-.24-4.27-1.04-4.27-4.63 0-1.02.36-1.85.96-2.5-.1-.23-.42-1.2.09-2.48 0 0 .78-.25 2.56.95A8.72 8.72 0 0 1 12 6.92c.77 0 1.55.1 2.28.31 1.78-1.2 2.56-.95 2.56-.95.51 1.28.19 2.25.1 2.48.6.65.95 1.48.95 2.5 0 3.6-2.2 4.39-4.29 4.62.34.3.64.88.64 1.79v2.65c0 .26.17.56.65.46A9.5 9.5 0 0 0 12 2.5Z" fill="currentColor" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M6.94 8.5a1.56 1.56 0 1 1 0-3.12 1.56 1.56 0 0 1 0 3.12ZM5.6 18.5V10h2.7v8.5H5.6Zm4.4 0V10h2.58v1.16h.04c.36-.68 1.24-1.4 2.55-1.4 2.73 0 3.23 1.8 3.23 4.13v4.61h-2.69v-4.08c0-.98-.01-2.23-1.36-2.23-1.36 0-1.56 1.06-1.56 2.16v4.15H10Z" fill="currentColor" />
    </svg>
  );
}

export default function HomePage() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <main className="page-shell">
      <SiteHeader brandHref="/" brandLabel="Zack Lown" />

      <section className="hero section" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Computer Engineer</p>
          <h1>
            Zack Lown
          </h1>
          <h2>Currently based in: Honolulu, HI</h2>
          <p className="lede">
            Hi, I'm Zack! I'm passionate about the software-hardware interaction that makes products feel like... finished products. I created this site to show off some of my personal projects and introduce myself to people who might be interested in working together.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/projects">
              Projects
            </Link>
            <a className="button button-secondary" href="/Zack%20Lown%20resume.pdf" download>
              Download resume
            </a>
            <a className="social-link" href={socialLinks.github} target="_blank" rel="noreferrer">
              <GithubIcon />
              GitHub
            </a>
            <a className="social-link" href={socialLinks.linkedin} target="_blank" rel="noreferrer">
              <LinkedInIcon />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="hero-panel">
          <div className="portrait-frame">
            <Image
              src={profileImage}
              alt="Photo of myself on a trail in Vietnam"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 420px"
            />
          </div>
          <div className="stat-grid">
            {stats.map((stat) => (
              <div className="stat-card" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="about-copy">
          <p className="eyebrow">Sites to learn more about me</p>
          <h2>My blogs to read about my personal and professional life</h2>
        </div>
        <div className="timeline-card">
          <p>
            I find writing about my experiences in both my personal and professional life helps me better reflect on what I have actually got out of experiences. I have alot of interests in both and this is also how I keep organized on what I've done. These are more raw than a resume and show more of a journey than a bullet pointed list.
          </p>
          <div className="action-cluster">
            <a className="button button-secondary button-with-icon" href={socialLinks.personalBlog} target="_blank" rel="noreferrer">
              Personal site
              <ExternalLinkIcon />
            </a>
            <a className="button button-secondary button-with-icon" href={socialLinks.professionalBlog} target="_blank" rel="noreferrer">
              Professional site
              <ExternalLinkIcon />
            </a>
          </div>
        </div>
      </section>

      <section className="section" id="projects">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Featured projects</p>
            <h2 className="section-title-wide">Some of my personal projects I've been working on.</h2>
          </div>
        </div>
        <div className="project-grid">
          {featuredProjects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-image">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 900px) 100vw, 33vw"
                />
              </div>
              <div className="project-body">
                <div className="project-topline">
                  <h3>{project.title}</h3>
                  {project.eyebrowHref ? (
                    <a
                      className="icon-link"
                      href={project.eyebrowHref}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${project.title}`}
                    >
                      <ArrowUpRightIcon />
                    </a>
                  ) : (
                    <Link
                      className="icon-link"
                      href={`/projects#${project.slug}`}
                      aria-label={`Read more about ${project.title}`}
                    >
                      <ArrowUpRightIcon />
                    </Link>
                  )}
                </div>
                <p>{project.description}</p>
                <ul className="tag-list" aria-label={`${project.title} technologies`}>
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <div className="project-actions">
                  <Link className="button button-secondary button-small" href={`/projects#${project.slug}`}>
                    Read more
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="projects-cta">
          <Link className="button button-primary" href="/projects">
            See all projects ({projects.length})
          </Link>
        </div>
      </section>

      <section className="section expertise-section" id="expertise">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">Capabilities</p>
            <h2>Skills and expertise I use often</h2>
          </div>
          <p className="section-note">
            Many of these skills were self taught and then later refined in my Bachelors. I love to always learn new technologies so this list is always changing, but it gives a good snapshot of the tools and techniques I use most often.
          </p>
        </div>
        <div className="expertise-grid">
          {expertise.map((group) => (
            <article className="expertise-card" key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <footer className="site-footer">
        <span>Zack Lown</span>
        <div>
          <Link href="/projects">Projects</Link>
          <a href={socialLinks.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </footer>
    </main>
  );
}
