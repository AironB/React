import { useState } from "react"
import { RegisterForm } from "./components/RegisterForm"
import { LoginForm } from "./components/LoginForm"
//import {BrowserRoute, Route, Routes } from 'react-router-dom';

export const Session = () =>{
    const [TypeForm,setTypeForm]= useState(null);
    return(
        <div>
        <button onClick={()=>{setTypeForm('Login')}}>Iniciar Sesion </button>
        <button onClick={()=>{setTypeForm('Singup')}}>Registrarse</button>
          { TypeForm==="Singup"? <RegisterForm /> :  <LoginForm />}
        </div>
    )
}