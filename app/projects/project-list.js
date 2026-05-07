'use client';

import { useEffect } from "react";
import Image from "next/image";

function ArrowUpRightIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M7 17 17 7M9 7h8v8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
    </svg>
  );
}

export default function ProjectList({ projects }) {
  useEffect(() => {
    const scrollToHashProject = () => {
      const hash = window.location.hash.slice(1);
      if (!hash) return;

      const target = document.getElementById(hash);
      if (!target) return;

      requestAnimationFrame(() => {
        target.scrollIntoView({
          behavior: "smooth",
          block: "center"
        });
      });
    };

    scrollToHashProject();
    window.addEventListener("hashchange", scrollToHashProject);

    return () => {
      window.removeEventListener("hashchange", scrollToHashProject);
    };
  }, []);

  return (
    <div className="project-list">
      {projects.map((project) => (
        <article className="project-card project-card-wide" id={project.slug} key={project.title}>
          <div className="project-image project-image-wide">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 980px) 100vw, 42vw"
            />
          </div>
          <div className="project-body project-body-wide">
            {project.eyebrowHref && project.eyebrowLabel ? (
              <a
                className="project-eyebrow-link"
                href={project.eyebrowHref}
                target="_blank"
                rel="noreferrer"
              >
                {project.eyebrowLabel}
              </a>
            ) : null}
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
                <span className="icon-link" aria-hidden="true">
                  <ArrowUpRightIcon />
                </span>
              )}
            </div>
            <p>{project.description}</p>
            <ul className="tag-list" aria-label={`${project.title} technologies`}>
              {project.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
            <div className="project-detail-grid">
              <section className="project-detail-block">
                <p className="detail-label">Why</p>
                <p>{project.why}</p>
              </section>
              <section className="project-detail-block">
                <p className="detail-label">How</p>
                <p>{project.how}</p>
              </section>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
