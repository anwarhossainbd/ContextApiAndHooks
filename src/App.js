import React from "react";
import './App.css';
import ShopContextProvider from "./Contexts/ShopContext";
import ShowProducts from "./comonents/ShowProducts";
import "bootswatch/dist/materia/bootstrap.min.css";
import Nav from "./comonents/Nav";
import ThemeContextProvider from "./Contexts/ThemeContext";

function App() {
  return (
    <div className="container mt-5">

        <ShopContextProvider>
            <Nav />
            <ThemeContextProvider>
                <ShowProducts />
            </ThemeContextProvider>
        </ShopContextProvider>

    </div>
  );
}

export default App;
