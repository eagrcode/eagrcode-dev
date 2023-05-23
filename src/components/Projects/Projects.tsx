// styles
import styles from "./Projects.module.scss";

// components
import ProjectCard from "./ProjectCard/ProjectCard";

// context
import { useTheme } from "@/context/ThemeProvider";
import { useContextProvider } from "@/context/ContextProvider";

// images
import supatask from "@/assets/images/supatask-thumbnail.png";
import emdb from "@/assets/images/emdb-thumbnail.png";
import moongazer from "@/assets/images/moongazer-thumbnail.png";

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
        <div className={styles.projectGrid}>
          <ProjectCard
            title={"EMDB"}
            image={emdb}
            alt={"emdb-project-thumbnail"}
            gitHubUrl={"https://github.com/eagrcode/EMDB"}
            liveUrl={"https://emdb-eagrcode.netlify.app"}
            text={
              "A full-stack web app featuring user authentication, developed with React and Supabase."
            }
          />
          <div className={styles.divider}></div>
          <ProjectCard
            title={"Supatask"}
            image={supatask}
            alt={"supatask-project-thumbnail"}
            liveUrl={"https://supatask.vercel.app"}
            gitHubUrl={"https://github.com/eagrcode/supatask"}
            text={
              "A full-stack web app featuring user authentication, developed with React and Supabase."
            }
          />
          <div className={styles.divider}></div>
          <ProjectCard
            title={"MoonGazer Ceremonies"}
            image={moongazer}
            alt={"moongazer-project-thumbnail"}
            gitHubUrl={"https://github.com/eagrcode/moongazer-ceremonies"}
            liveUrl={"https://moongazerceremonies.co.uk"}
            text={"Business page for Lincolnshire based Celebrant."}
          />
          <div className={styles.divider}></div>
          <ProjectCard
            title={"Eagrcode"}
            image={supatask}
            alt={"eagrcode-project-thumbnail"}
            gitHubUrl={""}
            liveUrl={""}
            text={
              "A full-stack web app featuring user authentication, developed with React and Supabase."
            }
          />
          <div className={styles.divider}></div>
        </div>
      </div>
    </section>
  );
}
