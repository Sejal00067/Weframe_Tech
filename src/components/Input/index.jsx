"use client"

import React from "react";
import PropTypes from "prop-types";

const shapes = {
    round: "rounded-md",
};
const variants = {
    fill: {
        white: "bg-white text-gray-500_02", 
        gray_50_02: "bg-gray-50_02", 
    },
};

const sizes = {
    sm: "h-[58px] px-5 text-[18px]", 
    xs: "h-[50px] px-3.5 text-[14px]", 
};

// eslint-disable-next-line react/display-name
const Input = React.forwardRef(
    (
        {
            className = "",
            name = "",
            placeholder = "",
            type = "text",
            label = "",
            prefix,
            suffix,
            onChange,
            shape,
            variant = "fill",
            size = "sm",
            color = "white",
            ...restProps
        },
        ref,
    ) => {
        return (
            <label
                className={`${className} flex items-center justify-center cursor-text flex-grow ${shape && shapes[shape]} ${variant && (variants[variant]?.[color] || variants[variant])} ${size && sizes[size]}`}
            >
                {!!label && label}
                {!!prefix && prefix}
                <input ref={ref} type={type} name={name} placeholder={placeholder} onChange={onChange} {...restProps} />
                {!!suffix && suffix}
            </label>
        );
    },
);

Input.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
    prefix: PropTypes.node,
    suffix: PropTypes.node,
    shape: PropTypes.oneOf(["round"]),
    size: PropTypes.oneOf(["sm", "xs"]),
    variant: PropTypes.oneOf(["fill"]),
    color: PropTypes.oneOf(["white", "gray_50_02"]),
};

export { Input };
