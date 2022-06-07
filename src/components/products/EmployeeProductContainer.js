import {useState} from "react"
import {ProductList} from "./ProductList"
import {EmployeeProductButtons} from "./EmployeeProductButtons"

/*
Employee container has two child components - EmployeeProductButtons, which renders jsx to create buttons that filter products by price
and allow employee to access form to create new product, and the general ProductList.
 Since the container is the parent of both, it shares state between the two components - expensive and initial.

*/
export const EmployeeProductContainer = () => {
    const [initial, setInitial] = useState([true])
    const [expensive, setExpensive] = useState([false])

    return <>
        <h1>Products</h1>
        <EmployeeProductButtons initialSetter={setInitial} initialState={initial} expensiveSetter={setExpensive} expensiveState={expensive}/>
        <ProductList expensiveState={expensive}/>
    </>
}