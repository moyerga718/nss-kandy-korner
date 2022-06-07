import { EmployeeViews } from "./EmployeeViews"
import { CustomerViews } from "./CustomerViews"


//Check to see if user is staff or customer. Render correct view based on this.
export const ApplicationViews = () => {
	
	const localKandyUser = localStorage.getItem("kandy_user")
    const kandyUserObject = JSON.parse(localKandyUser)

	if (kandyUserObject.staff) {
		//return employee views
		return <EmployeeViews />
	} else {
		return <CustomerViews />
	}
	
}

