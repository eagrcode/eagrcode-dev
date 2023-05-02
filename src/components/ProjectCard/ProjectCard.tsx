// styles
import styles from "./ProjectCard.module.scss";

// next
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

// set prop types
type props = {
  title: string;
  image: StaticImageData;
  text: string;
  alt: string;
  gitHubUrl: string;
  liveUrl: string;
};

export default function ProjectCard({ title, image, text, alt, gitHubUrl, liveUrl }: props) {
  return (
    <div className={styles.project}>
      <h3>{title}</h3>
      <Image src={image} alt={alt} style={{ height: "auto", width: "100%" }} placeholder="blur" />
      <p>{text}</p>
      <div className={styles.iconContainer}>
        <Link href={gitHubUrl} target="_blank">
          <FontAwesomeIcon className={styles.icon} icon={faGithub} />
        </Link>
        <Link href={liveUrl} target="_blank">
          <FontAwesomeIcon className={styles.icon} icon={faLink} />
        </Link>
      </div>
    </div>
  );
}
