import React from "react";

const Input = ({
  type,
  label,
  showLabel = true,
  value = "",
  placeholder,
  error,
  disabled,
  name,
  id,
  onChange,
  readonlyInput = false,
  required = false,
  bgWhite = false,
  onBlur,
  onFocus,
}) => {
  return (
    <div>
      {showLabel && (
        <label className="font-medium text-base leading-5 text-gray-800 mb-2" htmlFor={label}>
          {label}
        </label>
      )}
      <input
        className={`h-[4rem] w-[100%] font-semibold  ${
          bgWhite
            ? "#fff"
            : "py-[0.875rem] px-[1.3125rem] rounded-lg bg-[#f0f0f0]"
        } ${error ? "border-[red]" : ""}`}
        type={type}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        disabled={disabled}
        name={name}
        readOnly={readonlyInput}
        value={value}
        required={required}
      />
    </div>
  );
};

export default Input;
