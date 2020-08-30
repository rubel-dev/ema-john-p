 import React from 'react';
 
 const Cart = (props) => {
     const cart = props.cart;
     console.log(cart)
    //  const total = cart.reduce((total,prd) => total + prd.price,0)

    let total = 0;
    for(let i = 0; i<cart.length; i++){
        const product = cart[i];
        total = total + product.price;

    }

    let shipping = 0;
    if(total > 35){
        shipping = 0;
    }
    else if(total > 15){
        shipping = 4.99;
    }
    else if(total > 0){
        shipping = 12.99;
    }

    const tax =Number((total *.1).toFixed(2)); 
    const grandTotal = Number(total + shipping + tax).toFixed(2)

    //ai toFixed and Number make korte chaile amra akta function o lekhte pari aitar jonno
    const formatNumber = num => {
        const result = num.toFixed(2);
        return Number(result);
    }
    
    //toFixed mane dosomik ar por 2 ghor ar toFixed korle aita string hoy tai ake number korte hobe
    //10% =10/100 = .1;
       
     return (
         <div>
             <h4>Order Summary :</h4>
            <p>Items Ordered : {cart.length}</p>
             <p>Product Price : {formatNumber(total)}</p>
            <p><small>Shipping Cost : {shipping}</small></p>
            <p><small>Tax + Vat : {tax}</small></p>
            <p>Total Price : {grandTotal}</p>
         </div>
     );
 };
 
 export default Cart;