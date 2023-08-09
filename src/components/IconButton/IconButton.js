import "./IconButton.css";

const IconButton = ({ icon, className, children }) => (
  <button className={["icon-button", className].filter((x) => x).join(" ")}>
    <span className={icon}></span>
    {children}
  </button>
);

export default IconButton;
