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

export const getStaticProps = async(context) => {
    const { params } = context;

    const response = await client.getEntries({
        content_type: "recipe",
        "fields.slug": params.slug
    });

    return {
        props: {
            recipe: response.items
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