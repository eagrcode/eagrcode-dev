// styles
import styles from "./TechGrid.module.scss";

// next
import Image from "next/image";

// context
import { useTheme } from "@/context/ThemeProvider";

import Html5Icon from "../../../../public/assets/icons/html5-color.svg";
import Css3Icon from "../../../../public/assets/icons/css3-color.svg";
import JavaScriptIcon from "../../../../public/assets/icons/javascript-color.svg";
import NodeIcon from "../../../../public/assets/icons/nodedotjs-color.svg";
import ReactIcon from "../../../../public/assets/icons/react-color.svg";
import SassIcon from "../../../../public/assets/icons/sass-color.svg";
import NextIcon from "../../../../public/assets/icons/nextdotjs-color.svg";
import GitIcon from "../../../../public/assets/icons/git-color.svg";
import TypeScriptIcon from "../../../../public/assets/icons/typescript-color.svg";

export default function TechGrid() {
  // initial state
  const { theme } = useTheme();

  return (
    <div className={styles.techGrid}>
      <div className={`${styles.gridItem} ${styles[theme]}`}>
        <Image src={Html5Icon} alt="HTML5" style={{ height: "35px", width: "35px" }} />
        <p>HTML5</p>
      </div>
      <div className={`${styles.gridItem} ${styles[theme]}`}>
        <Image src={Css3Icon} alt="CSS3" style={{ height: "35px", width: "35px" }} />
        <p>CSS3</p>
      </div>
      <div className={`${styles.gridItem} ${styles[theme]}`}>
        <Image src={JavaScriptIcon} alt="JavaScript" style={{ height: "35px", width: "35px" }} />
        <p>JavaScript</p>
      </div>
      <div className={`${styles.gridItem} ${styles[theme]}`}>
        <Image src={NodeIcon} alt="Node.js" style={{ height: "35px", width: "35px" }} />
        <p>Node.js</p>
      </div>
      <div className={`${styles.gridItem} ${styles[theme]}`}>
        <Image src={ReactIcon} alt="React" style={{ height: "35px", width: "35px" }} />
        <p>React</p>
      </div>
      <div className={`${styles.gridItem} ${styles[theme]}`}>
        <Image src={SassIcon} alt="Sass" style={{ height: "35px", width: "35px" }} />
        <p>Sass</p>
      </div>
      <div className={`${styles.gridItem} ${styles[theme]}`}>
        <Image src={NextIcon} alt="Next.js" style={{ height: "35px", width: "35px" }} />
        <p>Next.js</p>
      </div>
      <div className={`${styles.gridItem} ${styles[theme]}`}>
        <Image src={TypeScriptIcon} alt="TypeScript" style={{ height: "35px", width: "35px" }} />
        <p>TypeScript</p>
      </div>
      <div className={`${styles.gridItem} ${styles[theme]}`}>
        <Image src={GitIcon} alt="Git" style={{ height: "35px", width: "35px" }} />
        <p>Git</p>
      </div>
    </div>
  );
}
