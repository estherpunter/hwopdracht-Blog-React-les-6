import './Overview.css'
// import posts from "/src/constants/data.json"
import {Link} from "react-router-dom";
import {useState} from "react";
import axios from "axios";

function Overview() {

    const [posts, setPosts] = useState([]);
    const [error, toggleError] = useState(false);

    async function getPosts() {
        try {
            const result = await axios.get('http://localhost:3000/posts');
            setPosts(result.data);
        } catch (error) {
            console.error(error);
            toggleError(true);
        }
    }

    return (
        <section className="overview-section outer-content-container">
            <div className="inner-content-container">
                <h1>Bekijk alle {posts.length} posts op het platform</h1>

                <button type="button" onClick={getPosts} >Klik hier voor alle posts</button>

                <ul className="post-list">
                    {posts.map((post) => {
                        return <li key={post.id} className="post-item">
                            <h2 className="post=title"><Link to={`/posts/${post.id}`}>{post.title}</Link> ({post.author})
                            </h2>
                            <p>{post.comments} reacties - {post.shares} keer gedeeld</p>
                            {error && <p>Er is iets misgegaan!</p>}
                        </li>
                    })}
                </ul>
            </div>
        </section>
    );
}

export default Overview;