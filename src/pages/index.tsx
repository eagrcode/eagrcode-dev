// next
import Head from "next/head";

// styles
import styles from "@/styles/Home.module.scss";

// components
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Skills from "@/components/Skills/Skills";
import Projects from "@/components/Projects/Projects";
import Contact from "@/components/Contact/Contact";

export default function Home() {
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
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
