/* eslint-disable react/prop-types */
import "./navBar.css";
import robotJson from '../robot_products.json'
import { Link } from "react-router-dom";

const NavBar = (props) => {

    const handleSearch = (searchValue) => {
        const robotsUpdated = robotJson.filter((eachRobot) => {
            return eachRobot.Name.toLowerCase().includes(searchValue.toLowerCase())
        })
        if (searchValue === "") {
            props.setRobots(robotJson)
        } else {
            props.setRobots(robotsUpdated)
        }
    }

    return (
        <nav id="navbar-element">
            <Link to="/products">
                <h1>RoboZon.com</h1>
            </Link>
            <div>
                <input onChange={(event) => handleSearch(event.target.value)} id="search-input" type="search" placeholder="Search robot" /><span id="magni-icon">🔍</span>
            </div>
            <div className="cart-container"><span id="cart-icon">🛒</span><span id="product-number">{props.cartNumber}</span> </div>
        </nav>
    )
}

export default NavBar;