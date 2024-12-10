import React from "react";

const sizes = {
    texts: "text-[12px] font-normal",
    textmd: "text-[14px] font-normal",
    text2xl: "text-[24px] font-normal lg:text-[20px] md:text-[22px]",
    text3xl: "text-[30px] font-normal lg:text-[25px] md:text-[28px] sm:text-[26px]",
};

const Text = ({ children, className = "", as, size = "textmd", ...restProps }) => {
    const Component = as || "p";
    
    return (
    <Component className={`text-gray-800 font-geist ${className} ${sizes[size]} `} {...restProps}>
      {children}
    </Component>
);
};
export { Text };