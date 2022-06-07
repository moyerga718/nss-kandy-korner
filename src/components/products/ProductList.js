import { useEffect, useState } from "react"
import { Product } from "./Product"
import { Link } from "react-router-dom"
import "./ProductList.css"
import { getAllLocationsFetch, getAllProductsDetailedFetch } from "../ApiManager"

export const ProductList = ({ expensiveState, searchTermState }) => {
    // invoke useState to get location dataaaaa
    const [products, setProducts] = useState([])
    const [selectedProduct, setSelectedProduct] = useState({})
    const [filteredProducts, setFiltered] = useState([])
    const [locations, setLocations] = useState([])

    

    
    const localKandyUser = localStorage.getItem("kandy_user")
    const kandyUserObject = JSON.parse(localKandyUser)
    
    //looks for initialization of state and then fetches data for products and product list
    useEffect(
        () => {
            getAllProductsDetailedFetch()
                .then((productArray) => {
                    setProducts(productArray)
                })
            getAllLocationsFetch()
                .then((locationArray) => {
                    setLocations(locationArray)
                })
            console.log('state change baybee')
        },
        []
        )
        
    useEffect(
        () => {
            if (kandyUserObject.staff) {
                setFiltered(products)
            }
        },
        [products]
    )

    useEffect(
        () => {
            if (expensiveState) {
                const expensiveProds = products.filter(product => product.price > 2)
                setFiltered(expensiveProds)
            } else {
                setFiltered(products)
            }
        },
        [expensiveState]
    )

    useEffect(
        () => {
            if (searchTermState === "") {
                setFiltered([])
            } else {
                const searchedProducts = products.filter(product => {
                    return product.name.toLowerCase().includes(searchTermState.toLowerCase())
                })
                setFiltered(searchedProducts)
            }
        },
        [searchTermState]
    )

    return <>
        {
            filteredProducts.map(
                (product) => <Product key={`Product--${product.id}`}kandyUserObject={kandyUserObject} productObj={product} locations={locations} />
                )
            }
    </>
}
