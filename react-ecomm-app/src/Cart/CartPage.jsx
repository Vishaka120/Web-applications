import { ProductData } from "../ProductData";
import { ProductsContext } from "../Context/ProductContext";
import { useContext } from "react";
import { CartItem } from "./CartItem";
export const CartPage = () => {
  const { cartItems, totalCartAmount } = useContext(ProductsContext);
  const total = totalCartAmount();
  return (
    <div className="cart">
      <h2 className="cart-header">Your Cart Items</h2>
      {ProductData.map((prod) => {
        if (cartItems[prod.id] !== 0) {
          return <CartItem data={prod} />;
        }
      })}
      <div className="card checkout">
        {total > 0 ? (
          <div className="card-body">
            <p className="cart-total">SubTotal: ${total}</p>
            <button type="button" className="btn btn-warning btn-block btn-lg">
              Proceed to Pay
            </button>
          </div>
        ) : (
          <h6 className="empty-cart">Your cart is empty</h6>
        )}
      </div>
    </div>
  );
};
