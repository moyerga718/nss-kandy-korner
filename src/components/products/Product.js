import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { createPurchaseFetch } from "../ApiManager"

export const Product = ( {kandyUserObject, productObj, locations} ) => {
    const [feedback, setFeedback] = useState("")
    
    const makePurchase = () => {
        const purchaseObjForAPI = {
            userId: kandyUserObject.id,
            productId: productObj.id
        }

        createPurchaseFetch(purchaseObjForAPI)
        .then()
        .then(() => {
            setFeedback("You bought it :)")
        })
    }

    useEffect(() => {
        if (feedback !== "") {
            // Clear feedback to make entire element disappear after 3 seconds
            setTimeout(() => setFeedback(""), 3000);
        }
    }, [feedback])
    
    if (kandyUserObject.staff) {
        return <section className="product" key={`product--${productObj.id}`}>
            <h2>{productObj.name}</h2>
            <h3>Price: {productObj.price}</h3>
        </section>

    } else {
        return <>
        <div className={`${feedback.includes("Error") ? "error" : "feedback"} ${feedback === "" ? "invisible" : "visible"}`}>
            {feedback}
        </div>
        <section className="product" key={`product--${productObj.id}`}>
            <div>
                <h2>{productObj.name}</h2>
                <h3>Price: {productObj.price}</h3>

                <Link to="" onClick={
                    () => {
                        const productLocations = productObj.locationProducts
                        let locationString = ""
                        if (productLocations.length > 0) {
                            locationString = productLocations.map(
                                (productLocation) => {
                                    const myLocation = locations.find(location => location.id === productLocation.locationId)
                                    return `${myLocation.name}: ${myLocation.address}`
                                }
                            ).join(`\n`)
                        } else {
                            locationString = `NOWHERE... not a ${productObj.name} in sight. Sorry :(`
                        }
                        window.alert(`${productObj.name} can be purchased at:\n${locationString}`)
                    }}>Show Me Where</Link>
            </div>
            <div>
                <button onClick={() => makePurchase()}>buy me already</button>
            </div>
        </section>
        </>
    }
}