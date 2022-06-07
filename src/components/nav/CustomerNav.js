import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

//Creates customer nav bar. This one has FIND CANDY link, which navigates to Employee Product Container
export const CustomerNav = () => {
    const navigate = useNavigate()
    
    return (
        <ul className="navbar">
            <li className="navbar__item navbar__locations">
                <Link className="navbar__link" to="/locations">Locations</Link>
            </li>
            <li className="navbar__item navbar__findCandy">
                <Link className="navbar__link" to="/findCandy">Find Candy</Link>
            </li>
            <li className="navbar__item navbar__myOrders">
                <Link className="navbar__link" to="/myOrders">My Orders</Link>
            </li>
            <li className="navbar__item navbar__logout">
                <Link className="navbar__link" to="" onClick={() => {
                    localStorage.removeItem("kandy_user")
                    navigate("/", {replace: true})
                }}>Logout</Link>
            </li>
        </ul>
    )
}