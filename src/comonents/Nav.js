import React, {Component,useContext} from 'react';
import {ShopContext} from "../Contexts/ShopContext";

const  Nav =()=> {
    //static contextType =ShopContext ;
    const MyData =useContext(ShopContext)

        const{products}=MyData ;
        return (
            <div>

                <h1 style={{background:"black",color:"white",padding:"5px 10px"}}>We have total {products.length} Products</h1>
                
            </div>
        );

}

export default Nav;