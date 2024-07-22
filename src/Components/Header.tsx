import './Header.css';

import {Link} from "react-router-dom";

export default function Header() {
    return (
        <header>
            <h1>audio anthology.</h1>
            <h2>a music enthusiast platform</h2>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/add">Add Artist</Link></li>
                </ul>
            </nav>
        </header>
    )
}