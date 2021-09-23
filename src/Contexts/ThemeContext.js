import React ,{createContext,useState} from 'react';

export const ThemeContext =createContext();

const ThemeContextProvider = (props) => {

    const[colors,setColors] =useState({
        bgColor:"orange",
        textColor: "#333"
    })
    return (
        <div>
            <ThemeContext.Provider value={{...colors}}>
                {props.children}
            </ThemeContext.Provider>
            
        </div>
    );
};

export default ThemeContextProvider;