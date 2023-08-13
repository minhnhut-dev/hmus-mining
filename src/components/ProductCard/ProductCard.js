import "./ProductCard.css";
import { capitalizeFirstLetter, generatePrice } from "utils";
import { Link, Price } from "components";
import { memo } from "react";
// import productImage from "assets/images/product.png";

const ProductCard = ({ product, className, id, ...props }) => (
  <Link
    className={["product-card", className].filter((x) => x).join(" ")}
    to={`/products/${product.id}`}
    {...props}
    style={{maxWidth: '180px'}}
  >
    <img
      src={product?.image ? product.image  : ""}
      alt={product.name || "default"}
      className="product-card__illustration"
      style={{with: '100%'}}
    />
    <div className="product-card__details">
      <h4>{capitalizeFirstLetter(product.name || product)}</h4>
      <Price>€ {generatePrice().toString()}</Price>
    </div>
  </Link>
);

export default memo(ProductCard);
