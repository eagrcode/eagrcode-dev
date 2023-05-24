// styles
import styles from "./Projects.module.scss";

// components
import ProjectCard from "./ProjectCard/ProjectCard";

// context
import { useTheme } from "@/context/ThemeProvider";
import { useContextProvider } from "@/context/ContextProvider";

// projects data
import { projectsData } from "@/assets/data/projectsData";

// images
import supatask from "@/assets/images/supatask-thumbnail.png";
import emdb from "@/assets/images/emdb-thumbnail.png";
import moongazer from "@/assets/images/moongazer-thumbnail.png";

export default function Projects() {
  // initial state
  const { theme } = useTheme();
  const { isOpen } = useContextProvider();

  console.log(projectsData);

  return (
    <section className={styles.projectsSection}>
      <div
        className={isOpen ? `${styles.projectsWrapper} ${styles.isOpen}` : styles.projectsWrapper}
      >
        <h2 id="scroll-to-projects" className={theme}>
          Projects
        </h2>
        <div className={styles.projectGrid}>
          {projectsData.map((project) => (
            <>
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                links={project.links}
                tags={project.tags}
                images={project.images}
                alt={project.alt}
              />
              <div className={styles.divider}></div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
}
