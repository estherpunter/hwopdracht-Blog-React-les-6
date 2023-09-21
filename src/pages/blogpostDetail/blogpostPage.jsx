import {Link, useParams} from "react-router-dom";
import posts from "/src/constants/data.json";

function Blogpost() {
    const {blogId} = useParams();

    return (
        <>
        <h1>Blogpost Detail {blogId}</h1>
            {posts.map((post) => {
                return <article key={post.id}>
                    <h2>{post.title}</h2>
                    <h3>{post.subtitle}</h3>
                    <p>Geschreven door {post.author} op {post.created} </p>
                    <p>{post.content}</p>
                    <p>{post.comments} reacties - {post.shares} keer gedeeld</p>
                </article>
            })}
            <Link to="/blogposts">Terug naar de overzichtspagina.</Link>
        </>
    )
}

export default Blogpost;