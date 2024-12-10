"use client";

import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

// eslint-disable-next-line react/display-name
const Slider= React.forwardRef(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ({ items = [], activeIndex = 0, centerMode, magnifiedIndex = 0, activeSlideCss = "scale-75", ...props}, ref) => {
        const isSmall= (index) => {
            if (props?.activeIndex + magnifiedIndex >= items?.length) {
                return index !== props?.activeIndex + magnifiedIndex - items?.length;
            } else {
                return index !== props.activeIndex + magnifiedIndex;
            }
        };
        
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const slideItems = centerMode
          ? items?.map((child, index) => {
            if (isSmall(index)) {
                return React.cloneElement(child, {
                    ...child.props,
                    className: [child.props?.className, activeslidecss].filter(Boolean).join(""),
                });
            }
            return React.cloneElement(child);
          })
          : items;
        return (
          <AliceCarousel
            items={slideItems}
            infinite
            ref={ref}
            {...props}
            touchTracking
            mouseTracking
            disableButtonsControls
        />
    );
},
);

export {Slider };