import React from 'react';
import "./App.css";
import ListView from './pages/listView';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import PokeBook from './pages/home';
import PokemonDetails from './pages/detailView';
import Similar from './components/sections/similar';
import Stats from './components/sections/stats';
import About from './components/sections/about';

const App = () => {
  const router = createBrowserRouter([
    { path: "/", element: <PokeBook /> },
    { path: "/listview", element: <ListView /> },
    {
      path: "/detailsview/:id", 
      element: <PokemonDetails />,
      children: [
        { path: "about", element: <About /> },
        { path: "stats", element: <Stats /> },
        { path: "similar", element: <Similar /> },
      ],
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
};

export default App;
