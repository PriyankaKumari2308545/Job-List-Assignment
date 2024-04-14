import React from "react";

function Button({ onClick, children, disabled, buttonType = "primary" }) {
  const buttonTypeHandler=(type)=>{
    switch (type) {
      case "primary":
        return "text-[#fff] bg-[#1967d2] hover:bg-[#1967d2] hover:text-[#fff]"
  
        case "secondry":
          return "text-[#1967d2] bg-[#e2eaf8] hover:bg-[#1967d2] hover:text-[#fff]"

          case "success":
            return "text-[#fff] bg-[#34a853]"
      default:
        return "text-[#fff] bg-[#1967d2] hover:bg-[#1967d2] hover:text-[#fff]"
    }
  }
  return (
    <button
      className={`p-2 w-[100%] rounded-md text-[13px] lg:px-4  text-center border border-transparent   transition-colors duration-300 block ${
        (buttonTypeHandler(buttonType) )
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      <span>{children}</span>
    </button>
  );
}

export default Button;
