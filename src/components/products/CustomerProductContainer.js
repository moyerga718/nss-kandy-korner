import {useState} from "react"
import {ProductList} from "./ProductList"
import {CustomerProductSearch} from "./CustomerProductSearch"

/*
Customer container has two child components - CustomerProductSearch which allows cust to search for products, and the general ProductList.
 Since the container is the parent of both, it shares search term state between them. SearchTerms are set in product search component,
 and searchTerms are observed in Product list
*/
export const CustomerProductContainer = () => {
    const [searchTerms, setSearchTerms] = useState("")

    return <>
        <CustomerProductSearch searchSetter={setSearchTerms}/>
        <ProductList searchTermState={searchTerms}/>
    </>
}