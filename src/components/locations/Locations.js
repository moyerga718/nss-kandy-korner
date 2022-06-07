import { useEffect, useState } from "react"
import { getAllLocationsFetch } from "../ApiManager"
import "./Locations.css"

export const Locations = () => {
    // invoke useState to get location dataaaaa
    const [locations, setLocations] = useState([])

    //looks for initialization of state and then fetches data
    useEffect(
        () => { 
            getAllLocationsFetch()
                .then((locationArray) => {
                    setLocations(locationArray)
                }) 
                console.log("state change baybee")
         }, 
        []
    )
    
    return <>
        <h1>Locations</h1>
        {
            locations.map(
                (location) => {
                    return <section className = "location" key={`location--${location.id}`}>
                        <h2>{location.name}</h2>
                        <h3>Address: {location.address}</h3>
                        <h3>Size: {location.squareFt} square feet</h3>
                    </section>
                }
            )
        }
    </> 
}