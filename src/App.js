import React from 'react'
import "./App.css"
import ListView from './pages/listView'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import PokeBook from './pages/home'
import PokemonDetails from './pages/detailView'

const App = () => {

  const router = createBrowserRouter([
    { path: "/", element: <PokeBook/> },
    { path: "/listview", element: <ListView /> },
    { path: "/detailsview", element: <PokemonDetails /> },
    

  ]);

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App