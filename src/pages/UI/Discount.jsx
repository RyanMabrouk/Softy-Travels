import React from "react";
import discount from "./assets/discount.svg";

export function Discount(props) {
  if (!props.value) {
    return null;
  }
  return (
    <div className="flex justify-center">
      <div className="relative w-32 p-1 text-xl font-medium flex justify-center">
        <img className="aspect-square h-14" src={discount} alt="" />
        <p
          className="absolute right-[35%] top-[28.5%]"
          style={!props.value ? { right: "40%" } : {}}
        >
          {props.value}%
        </p>
      </div>
    </div>
  );
}
