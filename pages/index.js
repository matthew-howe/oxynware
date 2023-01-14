import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Oxynware</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />


      <main className={styles.main}>
        <h1 className={styles.title}>Oxynware</h1>

        <p className={styles.description}>Software Systems </p>

        <div className={styles.grid}>
          <Link href="https://oxynpoker.com">
            <a href="https://oxynpoker.com" className={styles.card}>
              <h2>OxynPoker&rarr;</h2>
              <p>Nash Equilibrium solution terminal and training game.</p>
            </a>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
