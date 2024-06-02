//Creacion de un componente funcional
import { useState } from "react";
import { SecondComponent as Saludito} from "./SecondComponent"

const FirstComponent = () =>{
  const [nombreEstado, cambiarEstado] = useState("Airon")
  const cambioDeNombre = () => {
    if(nombreEstado=="Airon"){
      cambiarEstado("Goku");
    }else{
      cambiarEstado("Airon");
    }
    //cambiarEstado("Goku");
    //alert("Ya cambiaste tu nombre pa, felicitaciones!!")
  }
    return(
      <>
        <h1>Soy el primer componente</h1>
        <Saludito nombre={nombreEstado} edad="35" genero="Masculino" />
        <Saludito nombre="Mario" edad="30" genero="Masculino"/>
        <button onClick={()=>cambioDeNombre()}>Apretame mee mee</button>
      </>

    )
  }
  export default FirstComponent
  