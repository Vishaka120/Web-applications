import { ProductData } from "../ProductData";
import { Product } from "./Product";
function ProductsPage() {
  return (
    <div className="product-container">
      <h1 className="product-header">Shop Now!</h1>
      <div className="products">
        {ProductData.map((prod) => (
          <Product data={prod} />
        ))}
      </div>
    </div>
  );
}
export default ProductsPage;
