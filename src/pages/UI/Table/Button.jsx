import React from "react";

export function Button(props) {
  return (
    <button
      className={
        "onHoverScale105 aspect-[3/1] h-10 cursor-pointer rounded-2xl border-none bg-primary font-bold text-background1 disabled:scale-100 disabled:cursor-default disabled:bg-[#6b7e30]" +
        props.className
      }
      onClick={props.onClick}
      disabled={props.disabled}
      type={props.type ? props.type : "button"}
    >
      {props.children}
    </button>
  );
}
