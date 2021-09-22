import React from "react";
import './App.css';
import ShopContextProvider from "./Contexts/ShopContext";
import ShowProducts from "./comonents/ShowProducts";

import "bootswatch/dist/materia/bootstrap.min.css";
import Nav from "./comonents/Nav";

function App() {
  return (
    <div className="container mt-5">

        <ShopContextProvider>
            <Nav />
            <ShowProducts />
        </ShopContextProvider>

    </div>
  );
}

export default App;
