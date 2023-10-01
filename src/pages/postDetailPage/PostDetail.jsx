import {Link, useParams} from "react-router-dom";
import posts from "/src/constants/data.json";
import {CaretLeft, Clock} from "@phosphor-icons/react";
import formatDateString from "../../helpers/formatDateString.js";
import axios from "axios";
import {useState} from "react";

function PostDetail() {
    const {id} = useParams();
    const {title, readTime, subtitle, author, created, content, comments, shares} = posts.find((post) => {
        return post.id.toString() === id;
    })


    async function getPost() {
        try {
            const response = await axios.get(`http://localhost:3000/posts/${id}`);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }


    return (
        <section className="post-detail-section outer-content-container">
            <div className="inner-content-container">
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
                <p className="post-detail-author">Geschreven door <em>{author}</em> op {formatDateString(created)}</p>
                <span className="post-detail-read-time">
                    <Clock color="#50535C" size={18}/>
                    <p> {readTime} minuten lezen</p>
                </span>
                <p>{content}</p>
                <p>{comments} reacties - {shares} keer gedeeld</p>

                <button type="button" onClick={getPost}>Bekijk de post hier</button>

                <Link to="/posts" className="back-link">
                    <CaretLeft color="#38E991" size={22}/>
                    <p>Terug naar de overzichtspagina.</p>
                </Link>

            </div>
        </section>
    )
}

export default PostDetail;