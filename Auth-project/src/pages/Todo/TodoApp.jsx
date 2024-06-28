import React, { useContext } from 'react'
import { UserContext } from '../../context/userDataContext'
import {Link, useNavigate} from "react-router-dom";

export const TodoApp = () => {
   const {data, setData} = useContext(useContext);

   const navigate = useNavigate();

   const logout = () => {
    setData(null);
    navigate('/login')
   }
  return (
    <>
    <h1>Holiwi Amiwito</h1>, {data.email}
    <button onClick={()=>{logout}}>Desloguearse</button>
    {data ? <h1>{data.email}</h1> : <link to='/login'>Logueate pa</link>}
    </>
  )
}

