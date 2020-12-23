import Image from "next/image";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();
const { name, banner, date } = publicRuntimeConfig;

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>{name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {banner && <Image src={banner} width={300} height={200} />}
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">{name}</a>
        </h1>

        {date && <p className={styles.description}>{date}</p>}
      </main>
    </div>
  );
}
