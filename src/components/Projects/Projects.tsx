// styles
import styles from "./Projects.module.scss";

// components
import ProjectCard from "./ProjectCard/ProjectCard";

// context
import { useTheme } from "@/context/ThemeProvider";
import { useContextProvider } from "@/context/ContextProvider";

// projects data
import { projectsData } from "@/utils/data/projectsData";
import React from "react";

export default function Projects() {
  // initial state
  const { theme } = useTheme();
  const { isOpen } = useContextProvider();

  return (
    <section className={styles.projectsSection}>
      <div
        className={isOpen ? `${styles.projectsWrapper} ${styles.isOpen}` : styles.projectsWrapper}
      >
        <h2 id="scroll-to-projects" className={theme}>
          Projects
        </h2>
        <p className={`${styles.p} ${theme}`}>
          Explore my personal projects, showcasing my passion for development, skills, and some of
          my favourite technologies.
        </p>
        <div className={styles.projectGrid}>
          {projectsData.map((project, index) => (
            <React.Fragment key={index}>
              <ProjectCard
                title={project.title}
                description={project.description}
                links={project.links}
                tags={project.tags}
                images={project.images}
                alt={project.alt}
              />
              <div className={styles.divider}></div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
