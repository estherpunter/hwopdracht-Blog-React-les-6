import posts from "/src/constants/data.json"
import {Link} from "react-router-dom";

function Overview() {
console.log(posts);

    return (
        <>
        <h1>Overview page</h1>
            <h4>Totaal aantal blogposts: {posts.length}</h4>
            <ul>
                {posts.map((post) => {
                    return <li key={post.id}>
                       <Link to="/blogposts/:blogId">{post.title}</Link> ({post.author}) {post.comments} reacties - {post.shares} keer gedeeld
                    </li>
                })}
            </ul>
        </>
    );
}

export default Overview;