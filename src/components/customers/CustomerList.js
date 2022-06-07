import { useEffect, useState } from "react"
import { getAllCustomerUsersFetch } from "../ApiManager"
import { Customer } from "./Customer"
import "./Customers.css"

export const CustomerList = () => {
    const [customers, setCustomers] = useState([])


    useEffect(
        () => {
            getAllCustomerUsersFetch()
            .then(
                (customerList) =>{
                    setCustomers(customerList)
                }
            )
        },
        []
    )

    return <article className="customers">
        <h2>Customer list</h2>
        {
            customers.map( customer => <Customer key={`customer--${customer.id}`}
                custObj={customer} />)
        }
        </article>
}