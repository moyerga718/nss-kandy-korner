//~~~~~~~~~~~~~~~~~~~~~~~~~~~GETTER FETCH CALLS~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

export const getCustomerDetailsFetch = (customerId) => {
    return fetch(`http://localhost:8088/customers?_expand=user&userId=${customerId}`)
        .then(response => response.json())
}

export const getAllCustomerUsersFetch = () => {
    return fetch(`http://localhost:8088/users?isStaff=false`)
        .then(response => response.json())
}

export const getCustomerDetailsByUserIdFetch = (customerUserId) => {
    return fetch(`http://localhost:8088/customers?userId=${customerUserId}`)
        .then(response => response.json())
}

export const getAllLocationsFetch = () => {
    return fetch(`http://localhost:8088/locations`)
        .then(response => response.json())
}

export const getAllEmployeesDetailedFetch = () => {
    return fetch(`http://localhost:8088/employees?_expand=user&_expand=location`)
        .then(response => response.json())
}

export const getAllProductTypesFetch = () => {
    return fetch(`http://localhost:8088/productTypes`)
        .then(response => response.json())
}

export const getAllProductsDetailedFetch = () => {
    return fetch(`http://localhost:8088/products?_embed=locationProducts`)
        .then(response => response.json())
}

export const getAllPurchasesForCurrentUserFetch = (kandyUserObject) => {
    return fetch(`http://localhost:8088/purchases?userId=${kandyUserObject.id}`)
        .then(response => response.json())
}



//~~~~~~~~~~~~~~~~~~~~~~~~~~~POST FETCH CALLS~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

export const createEmployeeUserFetch = (userToSendToAPI) => {
    return fetch(`http://localhost:8088/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userToSendToAPI)
    })
        .then(response => response.json())
}

export const createEmployeeFetch = (employeeToSendToAPI) => {
    return fetch(`http://localhost:8088/employees`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(employeeToSendToAPI)
    })
        .then(response => response.json())
}

export const createPurchaseFetch = (purchaseObjForAPI) => {
    fetch(`http://localhost:8088/purchases`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(purchaseObjForAPI)
    })
        .then(response => response.json())
}

export const createProductFetch = (productToSendToAPI) => {
    return fetch(`http://localhost:8088/products`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(productToSendToAPI)
    })
        .then(response => response.json())
}



//~~~~~~~~~~~~~~~~~~~~~~~~~~~PUT FETCH CALLS~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

export const saveCustomerProfileFetch = (profile) => {
    return fetch(`http://localhost:8088/customers/${profile.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(profile)
    })
        .then(response => response.json())
}



//~~~~~~~~~~~~~~~~~~~~~~~~~~~DELETE FETCH CALLS~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

export const deleteEmployeeFetch = (employeeId) => {
    return fetch(`http://localhost:8088/employees/${employeeId}`, {
        method: "DELETE"
    })
}

export const deleteEmployeeUserFetch = (userId) => {
    return fetch(`http://localhost:8088/users/${userId}`, {
        method: "DELETE"
    })
}