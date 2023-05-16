// next
import Head from "next/head";
import localFont from "next/font/local";

// styles
import styles from "@/styles/Home.module.scss";

// components
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import ProjectCard from "@/components/Projects/ProjectCard/ProjectCard";
import ContactForm from "@/components/Contact/ContactForm/ContactForm";

// context
import { useContextProvider } from "@/context/ContextProvider";
import { useTheme } from "@/context/ThemeProvider";

// images
import supatask from "@/assets/images/supatask-thumbnail.png";
import emdb from "@/assets/images/emdb-thumbnail.png";
import moongazer from "@/assets/images/moongazer-thumbnail.png";
import emdbmob from "@/assets/images/emdb-mobile-hero.jpg";

export default function Home() {
  // initial state
  const { isOpen } = useContextProvider();
  const { theme } = useTheme();

  return (
    <>
      <Head>
        <title>Eagrcode</title>
        <meta name="description" content="Portfolio of Web Developer Elliot Robinson" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <About />

      <section id="scroll-to-projects" className={styles.projectsSection}>
        <div className={styles.projectsWrapper}>
          <h2 className={theme}>Projects</h2>
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
            <ProjectCard
              title={"MoonGazer Ceremonies"}
              image={moongazer}
              alt={"moongazer-project-thumbnail"}
              gitHubUrl={"https://github.com/eagrcode/moongazer-ceremonies"}
              liveUrl={"https://moongazerceremonies.co.uk"}
              text={"Business page for Lincolnshire based Celebrant."}
            />
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
          </div>
        </div>
      </section>
      <section id="scroll-to-contact" className={styles.contactSection}>
        <div className={styles.contactWrapper}>
          <h2 className={theme}>Contact Me</h2>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
