import {useState} from "react"
import {EmployeeList} from "./EmployeeList"
import {OpenEmployeeFormButton} from "./OpenEmployeeFormButton"


/*
Customer container has two child components - CustomerProductSearch which allows cust to search for products, and the general EmployeeList.
 Since the container is the parent of both, it shares search term state between them. SearchTerms are set in product search component,
 and searchTerms are observed in Product list
*/
export const EmployeeInfoContainer = () => {
    const [searchTerms, setSearchTerms] = useState("")

    return <>
        <OpenEmployeeFormButton />
        <EmployeeList />
    </>
}