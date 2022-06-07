import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { getCustomerDetailsByUserIdFetch, saveCustomerProfileFetch } from "../ApiManager"

export const CustomerProfile = () => {
    const navigate = useNavigate()
    const {customerUserId} = useParams()

    const [profile, updateProfile] = useState({
        userId: 0,
        loyaltyNumber: 0
    })

    useEffect(
        () => {
            getCustomerDetailsByUserIdFetch(customerUserId)
                .then((data) => {
                    const customerObj = data[0]
                    updateProfile(customerObj)
                })
        },
        []
    )

    const handleSaveButtonClick = (event) => {
        event.preventDefault()
        saveCustomerProfileFetch(profile)
        
            .then(
                () => {
                    navigate(`/customers/${customerUserId}`)
                }
            )
    }


    return (
        <>
        <form className="profile">
            <h2 className="profile__title">Edit Loyalty Number</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="loyaltyNumber">Loyalty Number:</label>
                    <input
                        required autoFocus
                        type="number"
                        className="form-control"
                        value={profile.loyaltyNumber}
                        onChange={
                            (evt) => {
                                const copy = {...profile}
                                copy.loyaltyNumber = evt.target.value
                                updateProfile(copy)
                            }
                        } />
                </div>
            </fieldset>
            <button
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="btn btn-primary">
                Save Loyalty Number
            </button>
        </form>
        </>
    )
}