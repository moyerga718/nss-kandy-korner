import { deleteEmployeeFetch, deleteEmployeeUserFetch } from "../ApiManager"
import "./Employees.css"

export const Employee = ({ employeeId, userId, fullName, location, payRate, getAllEmployees }) => {

    const fireEmployee = () => {
        deleteEmployeeFetch(employeeId)
            .then(() => {
                deleteEmployeeUserFetch(userId)
            })
            .then(
                () => {
                    getAllEmployees()
                }
            )
    }

    return <section className="employee">
        <div>
            <header><b>{fullName}</b></header>
            <div>Location: {location}</div>
            <div>Pay Rate: ${payRate}</div>
        </div>
        <div>
            <button onClick={() => fireEmployee()}>FIRE {fullName.toUpperCase()}</button>
        </div>
    </section>
}