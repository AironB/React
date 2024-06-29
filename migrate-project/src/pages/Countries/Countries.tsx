import { useState } from "react"
import {UseCountriesData} from "../../hooks/UseCountriesData"
import { ListCountries } from "./Components/ListCountries"
export const Countries = () => {
    const[region, setRegion]= useState<string>("")
    
    const countries = UseCountriesData(region);

  return (
    <div className="container">
        <h1 className="text-white">Countries</h1>
        <label className="form-label text-white"> Filter by Region:
                <select onChange={(e)=> setRegion(e.target.value)}>
                    <option value="">All</option>
                    <option value="Americas">America</option>
                    <option value="Asia">Asia</option>
                    <option value="Africa">Africa</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </label>

            <div className="container-fluid">
              {
                countries.length > 1 ?
            <ListCountries countries={countries}/>
            :
            <h1 className="text-white"> Loading</h1>
              }
            </div>
    </div>
  )
}

export default Countries
