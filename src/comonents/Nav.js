import React, {Component} from 'react';
import {ShopContext} from "../Contexts/ShopContext";

class Nav extends Component {
    static contextType =ShopContext ;
    render() {
        const{products}=this.context ;
        return (
            <div>

                <h1 style={{background:"black",color:"white",padding:"5px 10px"}}>We have total {products.length} Products</h1>
                
            </div>
        );
    }
}

export default Nav;