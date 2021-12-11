import { createClient } from 'contentful'
import Head from 'next/head'
import Image from 'next/image'
import RecipeCard from '../components/RecipeCard'
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
      recipes: response.items,
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
        <h3 className={styles.title}>
          Welcome to the Recipe Den!
        </h3>
        <div className="recipe-list">
          { recipes.map(recipe => <RecipeCard key={recipe.sys.id} recipe={recipe} />) }
        </div>
      </main>

      <style jsx>{`
        .recipe-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 20px 60px;
        }
      `}</style>
    </div>
  )
}
