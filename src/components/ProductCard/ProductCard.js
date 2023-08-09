import "./ProductCard.css";
import { capitalizeFirstLetter, generatePrice } from "utils";
import { Link, Price } from "components";
import { memo } from "react";
import productImage from "assets/images/product.png";

const ProductCard = ({ product, className, id, ...props }) => (
  <Link
    className={["product-card", className].filter((x) => x).join(" ")}
    to={`/products/${product.id || 2}`}
    {...props}
  >
    <img
      src={productImage}
      alt={product}
      className="product-card__illustration"
    />
    <div className="product-card__details">
      <h4>{capitalizeFirstLetter(product.name || product)}</h4>
      <Price>€ {generatePrice().toString()}</Price>
    </div>
  </Link>
);

export default memo(ProductCard);
