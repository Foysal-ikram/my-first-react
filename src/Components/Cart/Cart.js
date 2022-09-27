import React from 'react';


import './Cart.css'

  const Cart = (props) => {

    console.log(props.cart)


    return (
        <div>
            <h3>I am Cart</h3>
            <h5> area : {props.cart}</h5>
            
        </div>
    );
};

export default Cart;