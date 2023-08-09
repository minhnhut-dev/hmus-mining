import { memo } from "react";
import "./PrimaryButton.css";

const PrimaryButton = ({
  children,
  className,
  startIcon,
  endIcon,
  ...props
}) => (
  <button
    className={["primary-button", className].filter((x) => x).join(" ")}
    {...props}
  >
    {startIcon && (
      <span
        className={["primary-button__start-icon", startIcon]
          .filter((x) => x)
          .join(" ")}
      />
    )}
    {children}
    {endIcon && (
      <span
        className={["primary-button__end-icon", endIcon]
          .filter((x) => x)
          .join(" ")}
      />
    )}
  </button>
);

export default memo(PrimaryButton);
