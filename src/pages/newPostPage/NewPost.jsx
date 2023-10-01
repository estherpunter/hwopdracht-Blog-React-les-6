import './NewPost.css';
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import calculateReadTime from "../../helpers/calculateReadTime.js";

function NewPost() {
    const [formState, setFormState] = useState({
        title: '',
        subtitle: '',
        author: '',
        content: '',
    });

    const navigate = useNavigate();

    function handleChange(e) {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        })
    }

    function handleSubmit(e) {
        e.preventDefault();

        console.log({
            ...formState,
            shares: 0,
            comments: 0,
            created: new Date().toISOString(),
            readTime: calculateReadTime(formState.content),
        });

        console.log('De blog is succesvol verzameld! 🌈');
        navigate('/posts');
    }

    return (
        <section className="new-post-section outer-content-container">
            <div className="inner-content-container__text-restriction">
                <form className="new-post-form" onSubmit={handleSubmit}>
                    <h1>Post toevoegen</h1>
                    <label htmlFor="title-field">
                        Titel:
                    </label>
                    <input
                        type="text"
                        id="title-field"
                        name="title"
                        required
                        value={formState.title}
                        onChange={handleChange}
                    />

                    <label htmlFor="subtitle-field">
                        Subtitel:
                    </label>
                    <input
                        type="text"
                        id="subtitle-field"
                        name="subtitle"
                        required
                        value={formState.subtitle}
                        onChange={handleChange}
                    />


                    <label htmlFor="author-field">
                        Naam en achternaam:
                    </label>
                    <input
                        type="text"
                        id="author-field"
                        name="author"
                        required
                        value={formState.author}
                        onChange={handleChange}
                    />

                    <label htmlFor="post-content">Blogpost</label>
                    <textarea
                        name="content"
                        id="post-content"
                        cols="30"
                        rows="10"
                        required
                        minLength={300}
                        maxLength={2000}
                        value={formState.content}
                        onChange={handleChange}>
                    </textarea>

                    <button type="submit">
                        Toevoegen
                    </button>
                </form>
            </div>
        </section>
    )
}

export default NewPost;