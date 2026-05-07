'use client';

import { useEffect } from "react";
import Image from "next/image";

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
            {project.eyebrowLabel || project.repoHref || project.eyebrowHref ? (
              <div className="project-meta">
                {project.eyebrowLabel ? (
                  <span className="project-eyebrow">{project.eyebrowLabel}</span>
                ) : (
                  <span />
                )}
                <div className="project-links">
                  {project.repoHref ? (
                    <a
                      className="button button-secondary button-small"
                      href={project.repoHref}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Go to Repo
                    </a>
                  ) : null}
                  {project.eyebrowHref ? (
                    <a
                      className="button button-primary button-small"
                      href={project.eyebrowHref}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Go to Site
                    </a>
                  ) : null}
                </div>
              </div>
            ) : null}
            <div className="project-topline">
              <h3>{project.title}</h3>
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
