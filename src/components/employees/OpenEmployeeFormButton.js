import { useNavigate } from "react-router-dom"

export const OpenEmployeeFormButton = () => {
    const navigate = useNavigate()

    return <>
        <div>
            <button onClick={() => navigate("/employees/newHire")}>New employee who dis?</button>
        </div>
    </>
}