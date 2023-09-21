import './App.css'
import logo from './assets/logo.png'
import {Routes, Route} from "react-router-dom";
import Home from "./pages/home/HomePage.jsx";
import NewBlogpost from "./pages/newBlogpost/newBlogpostPage.jsx";
import Overview from "./pages/overview/overviewPage.jsx";
import Blogpost from "./pages/blogpostDetail/blogpostPage.jsx";
import Navigation from "./components/navigation/Navigation.jsx";


function App() {
  return (
      <>
      <Navigation/>
    <div className="page-container">
        <img src={logo} alt="Company logo"/>
      <h1>Begin hier met het maken van jouw blog-applicatie!</h1>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/new" element={<NewBlogpost/>}/>
            <Route path="/blogposts" element={<Overview/>}/>
            <Route path="/blogposts/:blogId" element={<Blogpost/>}/>
        </Routes>
    </div>
      </>
  )
}

export default App
