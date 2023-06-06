// styles
import styles from "./TechGrid.module.scss";

// next
import Image from "next/image";

// context
import { useTheme } from "@/context/ThemeProvider";

// import {
//   SiHtml5,
//   SiCss3,
//   SiJavascript,
//   SiNodedotjs,
//   SiReact,
//   SiSass,
//   SiNextdotjs,
//   SiGit,
//   SiTypescript,
// } from "@icons-pack/react-simple-icons";

import Html5Icon from "@/assets/icons/html5-color.svg";
import Css3Icon from "@/assets/icons/css3-color.svg";
import JavascriptIcon from "@/assets/icons/javascript-color.svg";
import NodeIcon from "@/assets/icons/nodedotjs-color.svg";
import ReactIcon from "@/assets/icons/react-color.svg";
import SassIcon from "@/assets/icons/sass-color.svg";
import NextIcon from "@/assets/icons/nextdotjs-color.svg";
import GitIcon from "@/assets/icons/git-color.svg";
import TypescriptIcon from "@/assets/icons/typescript-color.svg";

export default function TechGrid() {
  // initial state
  const { theme } = useTheme();

  return (
    <div className={styles.techGrid}>
      <div className={`${styles.gridItem} ${styles[theme]}`}>
        <Image src={Html5Icon} alt="" style={{ height: "35px", width: "35px" }} />
        <p>HTML5</p>
      </div>
      <div className={`${styles.gridItem} ${styles[theme]}`}>
        <Image src={Css3Icon} alt="" style={{ height: "35px", width: "35px" }} />

        <p>CSS3</p>
      </div>
      <div className={`${styles.gridItem} ${styles[theme]}`}>
        <Image src={JavascriptIcon} alt="" style={{ height: "35px", width: "35px" }} />
        <p>JavaScript</p>
      </div>
      <div className={`${styles.gridItem} ${styles[theme]}`}>
        <Image src={NodeIcon} alt="" style={{ height: "35px", width: "35px" }} />
        <p>Node.js</p>
      </div>
      <div className={`${styles.gridItem} ${styles[theme]}`}>
        <Image src={ReactIcon} alt="" style={{ height: "35px", width: "35px" }} />
        <p>React</p>
      </div>
      <div className={`${styles.gridItem} ${styles[theme]}`}>
        <Image src={SassIcon} alt="" style={{ height: "35px", width: "35px" }} />
        <p>Sass</p>
      </div>
      <div className={`${styles.gridItem} ${styles[theme]}`}>
        <Image src={NextIcon} alt="" style={{ height: "35px", width: "35px" }} />
        <p>Next.js</p>
      </div>
      <div className={`${styles.gridItem} ${styles[theme]}`}>
        <Image src={TypescriptIcon} alt="" style={{ height: "35px", width: "35px" }} />
        <p>TypeScript</p>
      </div>
      <div className={`${styles.gridItem} ${styles[theme]}`}>
        <Image src={GitIcon} alt="" style={{ height: "35px", width: "35px" }} />
        <p>Git</p>
      </div>
    </div>
  );
}
