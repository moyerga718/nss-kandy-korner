import { Outlet, Route, Routes } from "react-router-dom"
import { Locations } from "../locations/Locations"
import { CustomerProductContainer } from "../products/CustomerProductContainer"
import { CustomerPurchases } from "../purchases/CustomerPurchases"

export const CustomerViews = () => {
	return <><h1>Kandy Korner</h1>
	<h2><i>Come on get your sweets now</i></h2>
	<Routes>
		<Route path="/locations" element={<Locations />} />
		<Route path="/findCandy" element={<CustomerProductContainer />} />
		<Route path="/myOrders" element={<CustomerPurchases />} />

	</Routes>
	</>
}

