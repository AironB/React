import { useEffect, useState } from "react"

const APIuri="https://restcountries.com/v3.1/all"

export const useCountriesData = (region) => {
   //Estado para guardar y consultar los paises)
    //countries ->para consultar los paises
    //setCountries -> para guardar o cambiar los paises
    
    const [countries, setCountries] = useState([
        {
            name:{common:""},
            flags:{svg:""},
            region:""
        }
    ])//*el useState(ACA VA EL VALOR INICIAL*/
    const fetchCountries= async()=>{

    let response = await fetch(APIuri)
    let data = await response.json()
                   // console.log(data)
    let filterCountries= data;
    if (region!=""){
        filterCountries = data.filter((country) => country.region === region )
         console.log(filterCountries);
                    }
                    setCountries(filterCountries);//Guardamos los datos dentro de estado
                        }
                    useEffect(()=>{
                        fetchCountries();

            },[region] )

  return countries
  
}
