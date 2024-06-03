//Creacion de un componente funcional
import { useState } from "react";
import { SecondComponent as Saludito} from "./SecondComponent"

const FirstComponent = () =>{
  const [person, setPerson] = useState({
    nombre: "Airon",
    edad: 26,
    genero: "Masculino",
    dui: "04118131-0"
  })


  const cambioDeNombre = () => {
    if(person.nombre=="Airon"){
      setPerson({...person, nombre: "Goku"});

    }else{
      cambiarEstado({...person, nombre: "Airon"});
    }
    //cambiarEstado("Goku");
    //alert("Ya cambiaste tu nombre pa, felicitaciones!!")
  }
    return(
      <>
        <h1>Soy el primer componente</h1>
        {/**<Saludito nombre={person.nombre} edad={person.edad} genero={person.genero} />*/}
        <Saludito usuario={person}/>
        <button onClick={()=>cambioDeNombre()}>Apretame mee mee</button>
      </>

    )
  }
  export default FirstComponent
  