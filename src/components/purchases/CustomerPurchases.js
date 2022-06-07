import { Purchase } from "./Purchase.js"
import { useEffect, useState } from "react"
import { getAllProductsDetailedFetch, getAllPurchasesForCurrentUserFetch } from "../ApiManager.js"

export const CustomerPurchases = () => {
    const [purchases, setPurchases] = useState([])
    const [products, setProducts] = useState([])

    const localKandyUser = localStorage.getItem("kandy_user")
    const kandyUserObject = JSON.parse(localKandyUser)

    useEffect(
        () => {
            getAllPurchasesForCurrentUserFetch(kandyUserObject)
                .then(
                    (customerPurchases) => {
                        setPurchases(customerPurchases)
                    }
                )
            getAllProductsDetailedFetch()
                .then(
                    (productData) => {
                        setProducts(productData)
                    }
                )
        },
        []
    )
    return <>
        <h2>Your new candy friends</h2>
        {
            purchases.map(purchase => <Purchase key={`purchase--${purchase.id}`} purchaseObj={purchase} productData={products} />)
        }
    </>
}