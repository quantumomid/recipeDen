import Image from "next/image";
import Link from "next/link";

const RecipeCard = ({ recipe: { fields: { title, slug, cookingTime, thumbnail } } }) => {
    console.log(thumbnail.fields.file.details.image.height);
    return (
        <article className="card">
            <div className="featured">
                <Image 
                    src={"https:" + thumbnail.fields.file.url} 
                    alt={"The dish " + title + " prepared fully."} 
                    width={400} 
                    height={300}
                    // layout="fill"
                />
            </div>
            <div className="content">
                <div className="info">
                    <h4>{ title }</h4>
                    <p>Takes approximately { cookingTime } minutes to make.</p>
                </div>
                <div className="actions">
                    <Link href={"/recipes/" + slug}><a>Cook this!</a></Link>
                </div>
            </div>
        </article>
    )
}

export default RecipeCard;