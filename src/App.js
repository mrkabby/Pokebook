import React from 'react'
import PokeBook from "./pages/home"
import "./App.css"
import Topbar from './components/topbar'

const App = () => {
  return (
    <div>
       <PokeBook /> 
       <Topbar />
    </div>
  )
}

export default App