import {Link, useParams} from "react-router-dom";
import posts from "/src/constants/data.json";
import moment from "moment";

function formatDate(dateString) {
    const date = moment(dateString);
    const formattedDate = date.format('DD MMMM YYYY');

    return formattedDate;
}

function Blogpost() {
    const {blogId} = useParams();


    return (
        <>
        <h1>Blogpost Detail {blogId}</h1>
            {posts.map((post) => {
                return <article key={post.id}>
                    <h2>{post.title}</h2>
                    <h3>{post.subtitle}</h3>
                    <p>Geschreven door {post.author} op {formatDate(post.created)} </p>
                    <p>{post.content}</p>
                    <p>{post.comments} reacties - {post.shares} keer gedeeld</p>
                </article>
            })}
            <Link to="/blogposts">Terug naar de overzichtspagina.</Link>
        </>
    )
}

export default Blogpost;