import { createClient } from "contentful"
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Fallback from "../../components/Fallback";

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
        fallback: true,
    }
}

export const getStaticProps = async({ params }) => {

    const { items } = await client.getEntries({
        content_type: "recipe",
        "fields.slug": params.slug
    });

    if (!items.length) {
        return {
            redirect: {
                destination: "/",
                permanent: false
            }
        }
    }

    return {
        props: {
            recipe: items[0],
        },
        revalidate: 1,
    }
}

const RecipeDetails = ({ recipe }) => {
    if(!recipe) return <Fallback />

    console.log(recipe);
    const { fields: { featuredImage, title, cookingTime, ingredients, method } } = recipe;

    return (
        <section className="container">
            <div className="top">
                <h2>{ title }</h2>
                <Image 
                   src={"https:" + featuredImage.fields.file.url} 
                   alt={"The dish " + title + " prepared fully."} 
                   width={800} 
                   height={500}                
                />
                <p>Takes about { cookingTime } minutes to cook.</p>
            </div>
            <div className="ingredients">
                <h3>Ingredients:</h3>
                <ul>
                    { ingredients.map(ingredient => <li key={ingredient}>{ ingredient }</li>) }
                </ul>
            </div>
            <div className="method">
                <h3>Method: </h3>
                <div>{ documentToReactComponents(method) }</div>
            </div>
            <style jsx>{`
                .container {
                    display: flex;
                    flex-wrap: wrap;
                    padding: 0 30px 30px 30px;
                    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
                }

                .top h2 {
                    font-size: 2.5rem;
                    margin: 0;
                    background: #fff;
                    padding: 20px;
                    position: relative;
                    top: 80px;
                    left: 10px;
                    transform: rotateZ(-10deg);
                    box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
                    z-index: 1;
                    width: fit-content;
                  }

                .ingredients {
                    margin: 4vh;                    
                }

                @media screen and (max-width: 600px){
                    .top h2 {
                        font-size: 1.5rem;
                        padding: 10px;
                        top: 30px;
                        transform: unset;
                        width: 80%;
                        box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;                        
                    }
                }
            `}</style>
        </section>
    )
}

export default RecipeDetails;