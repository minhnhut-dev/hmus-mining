import { memo } from "react";
import "./SecondaryButton.css";

const SecondaryButton = ({
  children,
  className,
  startIcon,
  endIcon,
  ...props
}) => (
  <button
    className={["secondary-button", className].filter((x) => x).join(" ")}
    {...props}
  >
    {startIcon && (
      <span
        className={["secondary-button__start-icon", startIcon]
          .filter((x) => x)
          .join(" ")}
      />
    )}
    {children}
    {endIcon && (
      <span
        className={["secondary-button__end-icon", endIcon]
          .filter((x) => x)
          .join(" ")}
      />
    )}
  </button>
);

export default memo(SecondaryButton);
