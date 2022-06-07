import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"


//Create Navbar links for employees. This navbar has PRODUCT LIST link, which routes to EmployeeProductContainer component
export const EmployeeNav = () => {
    const navigate = useNavigate()

    return (
        <ul className="navbar">
            <li className="navbar__item navbar__locations">
                <Link className="navbar__link" to="/locations">Locations</Link>
            </li>

            <li className="navbar__item navbar__locations">
                <Link className="navbar__link" to="/products">Product List</Link>
            </li>

            <li className="navbar__item navbar__locations">
                <Link className="navbar__link" to="/employees">Employees</Link>
            </li>

            <li className="navbar__item navbar__locations">
                <Link className="navbar__link" to="/customers">Customers</Link>
            </li>

            <li className="navbar__item navbar__logout">
                <Link className="navbar__link" to="" onClick={() => {
                    localStorage.removeItem("kandy_user")
                    navigate("/", { replace: true })
                }}>Logout</Link>
            </li>
        </ul>
    )
}