import './newBlogpostPage.css'
import {useForm} from "react-hook-form";

function NewBlogpost() {
    const {register, handleSubmit} = useForm();

    function handleFormSubmit(data){
        console.log(data);
    }

    return (
        <>
            <h1>Nieuwe Blogpost</h1>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <label htmlFor="title-field">
                    Titel:
                    <input
                        type="text"
                        id="title-fied"
                        {...register("title")}
                    />
                </label>

                <label htmlFor="subtitle-field">
                    Subtitel:
                    <input
                        type="text"
                        id="subtitle-field"
                        {...register("subtitle")}
                    />
                </label>

                <label htmlFor="author-field">
                    Auteur:
                    <input
                        type="text"
                        id="author-field"
                        {...register("author")}
                    />
                </label>

                <label htmlFor="message-field">
                    Bericht:
                    <textarea
                        id="message-field"
                        cols="30"
                        rows="10"
                        placeholder="Schrijf hier je bericht"
                        {...register("content")}

                    ></textarea>
                </label>

                <button
                    type="submit"
                >
                    Verzenden
                </button>
            </form>

        </>
    )
}

export default NewBlogpost;