import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Recipe Den</title>
        <meta name="description" content="Repository of recipes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to the Recipe Den!
        </h1>

        
      </main>

      <footer className={styles.footer}>
        &copy; Copyright 2021 Recipe Den
      </footer>
    </div>
  )
}
