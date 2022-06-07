import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { createProductFetch, getAllProductTypesFetch } from "../ApiManager"

export const ProductForm = () => {
    //setter function that saves info that will be added to api...
    const [productTypes, setProductTypes] = useState([])
    const [product, update] = useState({
        name: "",
        price: 0,
        productTypeId: 0
    })

    //defining navigate for some reason idk why tbh
    const navigate = useNavigate()

    //get product type info right when state is initialized
    useEffect(
        () => {
            getAllProductTypesFetch()
                .then(
                    (productTypeArray) => {
                        setProductTypes(productTypeArray)
                    })
        },
        []
    )

    const handleSaveButtonClick = (event) => {
        event.preventDefault()
        console.log("ya blew it")

        // TODO: Create the object to be saved to the API
        /*
        {
            "userId": 3,
            "description": "Saepe ex sapiente deserunt et voluptas fugiat vero quasi. Ipsam est non ipsa. Occaecati rerum ipsa consequuntur. Ratione commodi unde sint non rerum. Sit quia et aut sunt.",
            "emergency": false,
            "dateCompleted": "Fri Apr 29 2022 14:02:20 GMT-0500 (Central Daylight Time)"
        }
        */
        const productToSendToAPI = {
            name: product.name,
            price: product.price,
            productTypeId: product.productTypeId
        }

        // TODO: Perform the fetch() to POST the object to the API

        createProductFetch(productToSendToAPI)
        .then( () => {
            navigate("/products")
        })
    }

    return (
        <form className="productForm">
            <h2 className="ProductForm__title">New Product Form!!! Ok</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Product Name:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Name of product"
                        value={product.name}
                        onChange={
                            (changeEvent) => {
                                const copy = { ...product }
                                copy.name = changeEvent.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="price">Price:</label>
                    <input
                        required autoFocus
                        type="number"
                        className="form-control"
                        placeholder="Price of product"
                        value={product.price}
                        onChange={
                            (changeEvent) => {
                                const copy = { ...product }
                                copy.price = parseInt(changeEvent.target.value)
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
            <label htmlFor="productType">Product Type:</label>
                {productTypes.map((productType) => {
                    return (
                        <div key={`productType--${productType.id}`}>
                            <input
                                onChange={(changeEvent) => {
                                    const copy = { ...product };
                                    copy.productTypeId = parseInt(changeEvent.target.value);
                                    update(copy);
                                }}
                                type="radio"
                                name="productType"
                                value={productType.id}
                            />{" "}
                            {productType.name}
                        </div>
                    );
                })}
            </fieldset>
            <button
                onClick = {(event) => handleSaveButtonClick(event)}
                className="btn btn-primary">
                Save new candy friend :3
            </button></form>
    )
}

