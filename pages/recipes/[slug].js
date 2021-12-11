import { createClient } from 'contentful'

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {

    const response = await client.getEntries({
        content_type: "recipe",
    });

    const recipePaths = response.items.map(item => ({ params: { slug: item.fields.slug } }))

    return {
        paths: recipePaths,
        fallback: false,
    }
}

export const getStaticProps = async({ params }) => {

    const { items } = await client.getEntries({
        content_type: "recipe",
        "fields.slug": params.slug
    });

    return {
        props: {
            recipe: items[0]
        }
    }
}

const RecipeDetails = ({ recipe }) => {
    console.log(recipe);
    return (
        <section>
            Recipe Details Page
        </section>
    )
}

export default RecipeDetails;