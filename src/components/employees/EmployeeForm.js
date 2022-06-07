import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { getAllLocationsFetch, createEmployeeUserFetch, createEmployeeFetch } from "../ApiManager"

export const EmployeeForm = () => {

    const [locations, setLocations] = useState([])
    const [newUser, updateNewUser] = useState({
        name: "",
        email: "",
        isStaff: true
    })
    const [newEmployee, updateNewEmployee] = useState({
        userId: 0,
        startDate: "",
        payRate: 0,
        locationId: 0
    })

    const navigate = useNavigate()

    useEffect(
        () => {
            getAllLocationsFetch()
                .then(
                    (locationArray) => {
                        setLocations(locationArray)
                    }
                )
        },
        []
    )

    const handleSaveButtonClick = (event) => {
        event.preventDefault()
        

        const userToSendToAPI = {
            name: newUser.name,
            email: newUser.email,
            isStaff: newUser.isStaff
        }

        // TODO: Perform the fetch() to POST the object to the API

        createEmployeeUserFetch(userToSendToAPI)
            .then((newUser) => {
                const employeeToSendToAPI = {
                    userId: newUser.id,
                    startDate: newEmployee.startDate,
                    payRate: newEmployee.payRate,
                    locationId: newEmployee.locationId
                }
                createEmployeeFetch(employeeToSendToAPI)
                    .then(() => {
                        navigate("/employees")
                    })
            })
    }

    // .then( () => {
    //     navigate("/employees")
    // })

    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">New Employee Form</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Employee Name:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Name of employee"
                        value={newUser.name}
                        onChange={
                            (changeEvent) => {
                                const copy = { ...newUser }
                                copy.name = changeEvent.target.value
                                updateNewUser(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Employee Email:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Employee email"
                        value={newUser.email}
                        onChange={
                            (changeEvent) => {
                                const copy = { ...newUser }
                                copy.email = changeEvent.target.value
                                updateNewUser(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Start Date:</label>
                    <input
                        required autoFocus
                        type="date"
                        className="form-control"
                        placeholder="start date"
                        value={newEmployee.startDate}
                        onChange={
                            (changeEvent) => {
                                const copy = { ...newEmployee }
                                copy.startDate = changeEvent.target.value
                                updateNewEmployee(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="price">Pay Rate:</label>
                    <input
                        required autoFocus
                        type="number"
                        className="form-control"
                        placeholder="Pay Rate"
                        value={newEmployee.payRate}
                        onChange={
                            (changeEvent) => {
                                const copy = { ...newEmployee }
                                copy.payRate = parseFloat(changeEvent.target.value)
                                updateNewEmployee(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <label htmlFor="location">Location:</label>
                {locations.map((location) => {
                    return (
                        <div key={`location--${location.id}`}>
                            <input
                                onChange={(changeEvent) => {
                                    const copy = { ...newEmployee };
                                    copy.locationId = parseInt(changeEvent.target.value);
                                    updateNewEmployee(copy);
                                }}
                                type="radio"
                                name="location"
                                value={location.id}
                            />{" "}
                            {location.name}
                        </div>
                    );
                })}
            </fieldset>
            <button
                onClick={(event) => handleSaveButtonClick(event)}
                className="btn btn-primary">
                Save new employee
            </button></form>
    )
}