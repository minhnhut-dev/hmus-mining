import { memo } from "react";
import "./Price.css";

const Price = ({ children }) => <h3 className="price">{children}</h3>;

export default memo(Price);
