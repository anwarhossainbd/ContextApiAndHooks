import React, {useContext} from 'react';
import {ShopContext} from "../Contexts/ShopContext"

const ShowProducts =()=> {

    const myData =useContext(ShopContext);

    const {products} = myData ;
                        return(
                            <div>
                                <h1>All Products</h1>
                                {products.map(pro=>(
                                    <div key={pro.id}>
                                        <h2>Name: {pro.name}</h2>
                                        <h4>Price: {pro.price}</h4>
                                    </div>
                                ))}

                            </div>

                        );

    };


export default ShowProducts;