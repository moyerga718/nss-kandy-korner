import { Link } from "react-router-dom"

export const Customer = ({ custObj }) => {
    return <section className="customer">
        <div>
            <Link to={`/customers/${custObj.id}`}>{custObj.name}</Link>
        </div>
    </section>
}