import React from "react"
import { ICountry } from "../../../models/ICountry"

interface ICountryProps{
  country: ICountry
}

export const CardCountry:React.FC<ICountryProps> = ({country}) => {
  return (
    <div className="card" style={{width: '18rem', height: '20rem'}}>
      <img src={country.flags.svg} className="card-img-top" />
    <div className="card-body">
      <h5 className="card-title">{country.name.common}</h5>
      <p className="card-text">Region: {country.region}</p>
    </div>
    </div>
  )
}

export default CardCountry
