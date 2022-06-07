import { useNavigate } from "react-router-dom"
import "./NavBar.css"
import { EmployeeNav } from "./EmployeeNav"
import { CustomerNav } from "./CustomerNav"

// Check to see if user is staff or customer. Render EmployeeNav or CustomerNav depending on this. 
export const NavBar = () => {
    const navigate = useNavigate() 

    const localKandyUser = localStorage.getItem("kandy_user")
    const kandyUserObject = JSON.parse(localKandyUser)

    if (kandyUserObject.staff) {
        //return employee views
        return <EmployeeNav />
    } else {
        return <CustomerNav />
    }
}

