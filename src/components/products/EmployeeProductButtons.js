import { useNavigate } from "react-router-dom"

export const EmployeeProductButtons = ( { initialSetter, initialState, expensiveSetter, expensiveState} ) => {
    const navigate = useNavigate()

    return <>

        <div>
            <button onClick={() => navigate("/products/create")}>Make a new product!!! Here!!</button>
        </div>
        <div>
        {
            (expensiveState && initialState === false)
            ? <>
                <button onClick={ () => {expensiveSetter(false) }}>no, show me <i>EVERYTHING</i></button>
            </>
            : <>
                <button onClick={ () => {expensiveSetter(true);initialSetter(false) }}>gimme that <i>Top Shelf Jazz</i></button>
            </>
        }
        </div>
    
    </>

}
