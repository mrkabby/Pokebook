import React from "react";
import "./App.css";
import ListView from "./pages/listView";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ThemeProvider } from "../src/components/themecontext";

import PokeBook from "./pages/home";
import SearchResults from "./components/searchresults";

const App = () => {
  const router = createBrowserRouter([
    { path: "/", element: <PokeBook /> },
    { path: "/listview", element: <ListView /> },
    { path: "/search/:searchTerm", element: <SearchResults /> },
  ]);

  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
