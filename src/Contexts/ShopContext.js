import React, { createContext, useState} from 'react';

export const ShopContext =createContext() ;


const ShopContextProvider =(props)=> {

        const[products,setProducts]=useState({
            products:[
                {id:1, name:"Laptop",price:50000},
                {id:2, name:"Mobile",price:20000},
                {id:3, name:"I-Phone",price:80000},
                {id:4, name:"Watch",price:2000},
                {id:5, name:"MP-4",price:6000},
            ]
        });

    const doSomething=()=>{
        return "Join with Us"
    };



    return (
        <ShopContext.Provider value={{...products, doSome:doSomething}}>
            {props.children}
        </ShopContext.Provider>
    )

    }

export default ShopContextProvider;