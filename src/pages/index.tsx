import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.scss";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });
const myFont = localFont({ src: "../assets/my-font.ttf", fallback: ["sans-serif"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>eagrcode</title>
        <meta name="description" content="Portfolio of Web Developer Elliot Robinson" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.section}>
        <h1 className={`${myFont.className} ${styles.h1}`}>eagrcode</h1>
        <p>portfolio</p>
      </section>
    </>
  );
}
