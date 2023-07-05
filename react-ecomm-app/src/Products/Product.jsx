import { ProductsContext } from "../Context/ProductContext";
import React, { useContext } from "react";
export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ProductsContext);
  const noOfItems = cartItems[id];
  return (
    <div className="card-container">
      <div className="d-flex justify-content-center container mt-5">
        <div className="prod-card p-3 bg-white">
          <i className="fa fa-apple"></i>
          <div className="about-product text-center mt-2">
            <img src={productImage} width="280" height="280" />
            <div>
              <h6>{productName}</h6>
              {/* <h6 className="mt-0 text-black-50">Apple pro display XDR</h6> */}
            </div>
          </div>
          <div className="d-flex justify-content-between total font-weight-bold mt-4">
            <span>Total</span>
            <span>${price}</span>
            <button className="btn btn-primary" onClick={() => addToCart(id)}>
              Add to cart{noOfItems > 0 && <>({noOfItems})</>}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
