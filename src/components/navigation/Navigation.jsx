import {NavLink} from "react-router-dom";
import "./Navigation.css";

function Navigation() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/new">Nieuwe post</NavLink>
                </li>
                <li>
                    <NavLink to="/blogposts">Alle posts</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;