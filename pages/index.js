import { createClient } from 'contentful'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export const getStaticProps = async() => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const response = await client.getEntries({
    content_type: "recipe",
  });

  return {
    props: {
      recipes: response.items
    }
  }
}

export default function Home({ recipes }) {
  console.log(recipes);
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


    </div>
  )
}
