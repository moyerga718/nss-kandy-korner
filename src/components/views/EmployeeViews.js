import { Outlet, Route, Routes } from "react-router-dom"
import { Locations } from "../locations/Locations"
import { ProductList } from "../products/ProductList.js"
import { ProductForm } from "../products/ProductForm.js"
import { EmployeeProductContainer } from "../products/EmployeeProductContainer"
import { EmployeeInfoContainer } from "../employees/EmployeeInfoContainer"
import { EmployeeForm } from "../employees/EmployeeForm"
import { CustomerList } from "../customers/CustomerList"
import { CustomerDetails } from "../customers/CustomerDetails"
import { CustomerProfile} from "../customers/CustomerProfile"

export const EmployeeViews = () => {
	return <><h1>Kandy Korner</h1>
	<h2><i>Come on get your sweets now</i></h2>
	<Routes>
		<Route path="/locations" element={<Locations />} />
		<Route path="/products" element={<EmployeeProductContainer />} />
		<Route path="products/create" element={ <ProductForm /> } />
		<Route path="/employees" element={ <EmployeeInfoContainer /> } />
		<Route path="/employees/newHire" element={ <EmployeeForm />} />
		<Route path="/customers" element={ <CustomerList /> } />
		<Route path="customers/:customerId" element={ <CustomerDetails/> } />
		<Route path="customers/:customerUserId/edit" element={ <CustomerProfile/> } />

	</Routes>
	</>
}