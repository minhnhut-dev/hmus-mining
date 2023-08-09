import "./ProductsList.css";
import products from "assets/products.json";
import { ProductCard } from "components";

const ProductsList = () => {
  return (
    <div className="products-list">
      <h1 className="products-list__title">Groceries</h1>
      <div className="products-list__items">
        {products.map((product, key) => (
          <ProductCard key={key} product={product} id={key} />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
