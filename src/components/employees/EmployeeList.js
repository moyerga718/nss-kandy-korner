import { useState, useEffect } from "react"
import { getAllEmployeesDetailedFetch } from "../ApiManager"
import { Employee } from "./Employee"

export const EmployeeList = () => {

    const [employees, setEmployees] = useState([])
    const [displayEmployees, setDisplayEmployees] = useState([])
    
    const getAllEmployees = () => {
        getAllEmployeesDetailedFetch()
        .then(
            (employeeData) => {
                setEmployees(employeeData)
            }
            )
    }
    useEffect(
        () => {
                getAllEmployees()
            },
        []
    )

    useEffect(
        () => {
            setDisplayEmployees(employees)
        },
        [employees]
    )

    return <article className="employees">
        <h2>EmployeeList</h2>
        {
            displayEmployees.map( employee => <Employee key={`employee--${employee.id}`} 
                    employeeId={employee.id}
                    userId={employee.user.id}
                    fullName={employee.user.name}
                    location={employee.location.name}
                    payRate={employee.payRate}
                    getAllEmployees={getAllEmployees} />)
        }
        </article>
}