// next
import Head from "next/head";
import type { NextPage } from "next";

// next font
import { Inter } from "next/font/google";
import localFont from "next/font/local";

// styles
import styles from "@/styles/Home.module.scss";

// components
import ResumeBtn from "@/components/buttons/ResumeBtn/ResumeBtn";
import Hero from "@/components/Hero/Hero";

// context
import { useContextProvider } from "@/context/ContextProvider";

const inter = Inter({ subsets: ["latin"] });
const myFont = localFont({ src: "../assets/my-font.ttf", fallback: ["sans-serif"] });

export default function Home() {
  // initial state
  const { isOpen } = useContextProvider();

  return (
    <>
      <Head>
        <title>eagrcode</title>
        <meta name="description" content="Portfolio of Web Developer Elliot Robinson" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={isOpen ? `${styles.section} ${styles.isOpen}` : styles.section}>
        <Hero />
        <ResumeBtn />
      </section>
      <section className={styles.section}>About</section>
      <section className={styles.section}>Projects</section>
      <section className={styles.section}>Contact</section>
    </>
  );
}
