// import React from 'react';

import CartItem from "./CartItem";
import CartSummary from "./CartSummary";

const Cart = () => {
    const cartItems = [{
    _id: "P001",

    name: "Classic White T-Shirt",

    price: 1200,

    discountedPrice: 950,

    quantity: 2,

    images: ["..."],

    stock: 30
}];
    return (
        <div>
             <h1 className="text-5xl">Cart page</h1>
             
             <div className="grid lg:grid-cols-3 gap-8">
                   <div className="lg:col-span-2 space-y-6">
                        {cartItems.length ? (
                            cartItems.map(item => (
                                <CartItem key={item._id} item={item}/>
                            ))
                        ) : (
                            <div className="text-center py-20 border rounded-xl">
                                <h2 className="text-2xl font-semibold">
                                    Your cart is empty
                                </h2>
                                <p className="text-gray-500 mt-2">start shopping to add product</p>
                            </div>
                        )}
                   </div>
                   <CartSummary/>
             </div>
        </div>
    );
};

export default Cart;