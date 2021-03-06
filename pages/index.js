import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <h1>Himepage {process.env.apiKey}</h1>
      <button onClick={() => router.push("/cart")}>cart</button>
      <button onClick={() => router.push("/product")}>product</button>
    </div>
  );
}
