import React from "react"
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

const Header = () => {
    return (
        <div className="header_wrapper">
            <nav>
                <ul>
                    <Link to="/grocery-list">Grocery List</Link>
                </ul>
            </nav>
        </div>
    )
}

export default Header