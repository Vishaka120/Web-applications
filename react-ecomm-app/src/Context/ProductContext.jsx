import { createContext, useState } from "react";
import { ProductData } from "../ProductData";

//Context is a seperate file where we can write all the functionalities that we are using
export const ProductsContext = createContext(null);
// initializing the count for each item to 0
//eg: id 1:0(items)
//    id 2:0...
const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < ProductData.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};
export const ProductsContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) =>
      // increment the count against the id
      ({ ...prev, [itemId]: prev[itemId] + 1 })
    );
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) =>
      // increment the count against the id
      ({ ...prev, [itemId]: prev[itemId] - 1 })
    );
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: newAmount,
    }));
  };
  const totalCartAmount = () => {
    let total = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = ProductData.find((prod) => prod.id === Number(item));
        total += cartItems[item] * itemInfo.price;
      }
    }
    return total;
  };
  //To pass on the parameters used here
  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    totalCartAmount,
  };
  console.log(cartItems);
  return (
    <ProductsContext.Provider value={contextValue}>
      {props.children}
    </ProductsContext.Provider>
  );
};
//creatContext
//context provider
//useContext in the component where you wanna call the methods defined here
//Wrap all the compnents in app.jsx with the provider
