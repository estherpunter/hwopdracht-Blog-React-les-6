import './App.css'
import logoMedium from './assets/logo-medium.png'
import {Routes, Route, useNavigate, Link} from "react-router-dom";
import Home from "./pages/homePage/Home.jsx";
import NewPost from "./pages/newPostPage/NewPost.jsx";
import Overview from "./pages/overviewPage/Overview.jsx";
import PostDetail from "./pages/postDetailPage/PostDetail.jsx";
import NotFound from "./pages/notFoundPage/NotFound.jsx";


function App() {
    const navigate = useNavigate();

    return (
        <>
            <nav className="main-navigation outer-content-container">
                <div className="inner-nav-container">
                    <button type="button" className="main-navigation-logo-button" onClick={() => navigate('/')}>
                        <img src={logoMedium} alt="Logo that links to the home page"/>
                    </button>
                    <ul className="main-navigation-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/posts">Alle posts</Link></li>
                        <li><Link to="/new">Nieuwe post maken</Link></li>
                    </ul>
                </div>
            </nav>
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/new" element={<NewPost />} />
                    <Route path="/posts" element={<Overview />} />
                    <Route path="/posts/:id" element={<PostDetail />} />
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </main>
            <footer className="footer-navigation outer-content-container">
                Blogventure &copy; 2023 - ontwikkeld voor Novi Hogeschool
            </footer>
        </>
    )
}

export default App
