import React from "react";
import "./App.css";
import ListView from "./pages/listView";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ThemeProvider } from '../src/components/themecontext';

import PokeBook from "./pages/home";
import PokemonDetails from "./pages/detailView";
import Similar from "./components/sections/similar";
import Stats from "./components/sections/stats";
import About from "./components/sections/about";
import SearchResults from "./components/searchresults";

const App = () => {
  const router = createBrowserRouter([
    { path: "/", element: <PokeBook /> },
    { path: "/listview", element: <ListView /> },
    { path: "/search/:searchTerm", element: <SearchResults /> },
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
  <ThemeProvider >
  <RouterProvider router={router} />
  </ThemeProvider>
  );
};

export default App;
