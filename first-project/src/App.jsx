import './App.css'
import FirstComponent from './Components/FirstComponent'

function App() {

  return (
    <div>
    <h1>Holiwi</h1>
    <h1>FSJ 22</h1>
    {/**Llaves indican que va a ir codigo js aca adentro */}
    {/**Llamar/invocar a nuestro componente */}
      <FirstComponent />
    </div>
  )
}

export default App


/**
import React, {Component} from 'react'


export default class App extends Component{

  render (){

    return (
      <div>
        <h1>Holiwi FSJ22</h1>
      </div>
    )
  }
}
*/

