// next
import Head from "next/head";
import localFont from "next/font/local";

// styles
import styles from "@/styles/Home.module.scss";

// components
import HeroBtn from "@/components/buttons/HeroBtn/HeroBtn";
import Hero from "@/components/Hero/Hero";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import ContactForm from "@/components/ContactForm/ContactForm";

// context
import { useContextProvider } from "@/context/ContextProvider";

// images
import supatask from "@/assets/images/supatask-thumbnail.png";
import emdb from "@/assets/images/emdb-thumbnail.png";
import moongazer from "@/assets/images/moongazer-thumbnail.png";
import emdbmob from "@/assets/images/emdb-mobile-hero.jpg";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAws,
  faCss3,
  faHtml5,
  faNodeJs,
  faReact,
  faSass,
} from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  // initial state
  const { isOpen } = useContextProvider();

  return (
    <>
      <Head>
        <title>Eagrcode</title>
        <meta name="description" content="Portfolio of Web Developer Elliot Robinson" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={isOpen ? `${styles.heroSection} ${styles.isOpen}` : styles.heroSection}>
        <Hero />
        <HeroBtn />
      </section>
      <section id="scroll-to-about" className={styles.aboutSection}>
        <div className={styles.about}>
          <h2>About Me</h2>
          <div className={styles.aboutBtm}>
            <div className={styles.aboutText}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ex impedit deserunt,
                eius esse fugiat itaque sed sunt quidem consequatur debitis laudantium, repellendus
                accusamus reprehenderit ducimus provident ut corrupti architecto?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ex impedit deserunt,
                eius esse fugiat itaque sed sunt quidem consequatur debitis laudantium, repellendus
                accusamus reprehenderit ducimus provident ut corrupti architecto?
              </p>
            </div>
            <div className={styles.techGrid}>
              <FontAwesomeIcon className={styles.gridItem} icon={faReact} />
              <FontAwesomeIcon className={styles.gridItem} icon={faSass} />
              <FontAwesomeIcon className={styles.gridItem} icon={faNodeJs} />
              <FontAwesomeIcon className={styles.gridItem} icon={faCss3} />
              <FontAwesomeIcon className={styles.gridItem} icon={faHtml5} />
              <FontAwesomeIcon className={styles.gridItem} icon={faAws} />
            </div>
          </div>
        </div>
      </section>
      <section id="scroll-to-projects" className={styles.projectsSection}>
        <div className={styles.projectsWrapper}>
          <h2>Projects</h2>
          <div className={styles.projectGrid}>
            <ProjectCard
              title={"EMDB"}
              image={emdbmob}
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
          <h2>Contact Me</h2>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
