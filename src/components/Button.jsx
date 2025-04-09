import React from "react";
import PropTypes from "prop-types";

const Button = ({
  children,
  type = "button",
  bgColor = "bg-blue-600",
  textColor = "text-white",
  borderColor = "border-transparent",
  hoverBgColor = "hover:bg-white",
  hoverTextColor = "hover:text-blue-600",
  className = "",
  ...props
}) => {
  return (
    <button
      type={type}
      className={`inline-block px-4 py-2 text-sm leading-none rounded border ${bgColor} ${textColor} ${borderColor} ${hoverBgColor} ${hoverTextColor} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// ✅ Define PropTypes for runtime validation
Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  borderColor: PropTypes.string,
  hoverBgColor: PropTypes.string,
  hoverTextColor: PropTypes.string,
  className: PropTypes.string,
};

// ✅ Default Props (if not provided)
Button.defaultProps = {
  type: "button",
  bgColor: "bg-blue-600",
  textColor: "text-white",
  borderColor: "border-transparent",
  hoverBgColor: "hover:bg-white",
  hoverTextColor: "hover:text-blue-600",
  className: "",
};

export default Button;
