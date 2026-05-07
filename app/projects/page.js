import ProjectList from "./project-list";
import SiteHeader from "../site-header";
import { projects } from "../site-data";

export const metadata = {
  title: "Zack Lown | Projects",
  description: "A complete list of my projects."
};

export default function ProjectsPage() {
  return (
    <main className="page-shell">
      <SiteHeader brandHref="/" brandLabel="Zack Lown" />

      <section className="section page-intro">
        <p className="eyebrow">An incomplete list of</p>
        <h1>My Projects</h1>
        <p className="lede">
          Most of these are personal projects but some were done as part of course work and are noted as so. Click the links on the projects to go to their live site if applicable. 
        </p>
      </section>

      <section className="section section-tight">
        <ProjectList projects={projects} />
      </section>

      <h2>
        My professional blog lists some more of my informal and in-progress projects, and my github has a more complete list of all my code repositories, including ones that aren't polished enough to be listed here.
      </h2>

    </main>
  );
}
