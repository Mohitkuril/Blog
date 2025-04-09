import React, { useId } from "react";

const Input = React.forwardRef(function Input(
  { label, type = "text", className = "", ...props },
  ref
) {
  const id = useId();
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="block text-s  font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        type={type}
        className={`${className} mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50`}
        ref={ref}
        {...props}
        id={id}
      />
    </div>
  );
});

export default Input;
