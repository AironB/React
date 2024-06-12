//import React from 'react'

export const CardCountry = ({country}) => {
  return (
    <div className="row">
    <div className="card" style={{width: '18rem'}}>
        <img src={country.flags.svg} className="card-img-top" />
    <div className="card-body">
        <h5 className="card-title">Country: {country.name.common}</h5>
        <p className="card-text">Region: {country.region}</p>
        
    </div>
  </div>
  </div>
  )
}

export default CardCountry
