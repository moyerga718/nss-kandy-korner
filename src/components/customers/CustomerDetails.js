import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { getCustomerDetailsFetch } from "../ApiManager"
import "./Customers.css"

export const CustomerDetails = () => {
    const navigate = useNavigate()
    const {customerId} = useParams()
    const [customer, updateCustomer] = useState({})

    useEffect(
        () => {
            getCustomerDetailsFetch(customerId)
                .then(
                    (data) => {
                        const singleCustomer=data[0]
                        updateCustomer(singleCustomer)
                })
        },
        [customerId]
    )

    return <section className="customer">
    <header className="customer__header"><b>{customer?.user?.name}</b></header>
    <div>Email: {customer?.user?.email}</div>
    <div>Loyalty Number: {customer.loyaltyNumber}</div>
    <button onClick={
        () => {
            navigate(`/customers/${customerId}/edit`)
        }
    }>Update Loyalty Number</button>
</section>
}