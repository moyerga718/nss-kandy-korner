import "./Purchases.css"

export const Purchase = ( {purchaseObj, productData} ) => {
    const foundProduct = productData.find( product => product.id === purchaseObj.productId)
    
    if (foundProduct) {
        const productPriceString = foundProduct.price.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
        return <div className="purchase">
            <h3>{foundProduct?.name}</h3>
            <p><i>{`Price: ${productPriceString}`}</i></p>
        </div>
    }
}