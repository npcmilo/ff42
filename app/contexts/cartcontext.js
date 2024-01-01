import React, { createContext, useState } from 'react';
import Client from 'shopify-buy';

const client = Client.buildClient({
  domain: process.env.NEXT_PUBLIC_API_URL,
  storefrontAccessToken: process.env.NEXT_PUBLIC_STOREFRONT_ACCESS_TOKEN
});

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = async (productId) => {
    const product = await client.product.fetch(productId);
    setCart([...cart, product]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}