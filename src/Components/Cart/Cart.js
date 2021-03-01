import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    let totalPopulation = 0;
    for (let i = 0; i < cart.length; i++) {
        const country = cart[i];
        totalPopulation = totalPopulation + country.country.population;
        console.log(country);
        
        
    }
    return (
        <div>
            <h2>cart Total: {cart.length}</h2>
            <p>total population: {totalPopulation}</p>
        </div>
    );
};

export default Cart;