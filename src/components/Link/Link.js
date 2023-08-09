import "./Link.css";
import { Link as RouterLink } from "react-router-dom";

const Link = ({ children, className, ...props }) => (
  <RouterLink
    className={["link", className].filter((x) => x).join(" ")}
    {...props}
  >
    {children}
  </RouterLink>
);

export default Link;
