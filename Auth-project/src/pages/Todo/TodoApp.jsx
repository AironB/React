import React, { useContext, useEffect } from 'react'

export const TodoApp = () => {
   const {data} = useContext(useContext);
  return (
    <>
    <h1>Holiwi Amiwito</h1>, {data.email}
    {data ? <h1>{data.email}</h1> : <link to='/login'>Logueate pa</link>}
    </>
  )
}

