import React from 'react';
import fakeData from '../../fakeData';
import { useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
 

const Shop = () => {
    const first10 = fakeData.slice(0,10)
    const [products,setProducts]= useState(first10)
    const [cart,setCart] = useState([]) 
    // console.log(cart)
   
   //kono kisu handle sadhoronoto useState ar akhne kora hoy

   const handleAddProduct=(prod)=>{
       const newCart = [...cart,prod]
       setCart(newCart)
       
   }
    return (
        <div className ="shop-container"> 
            <div className="product-container">
                
                {
                    products.map(pd =><Product product ={pd} handleAddProduct ={handleAddProduct}></Product>)
                }
            
            </div>
            <div className="cart-container">
               <Cart cart ={cart}></Cart>

            </div>
          
        </div>
    );
};

export default Shop;