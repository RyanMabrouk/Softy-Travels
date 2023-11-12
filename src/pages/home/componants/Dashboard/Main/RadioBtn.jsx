import React from "react";

export function RadioBtn(props) {
  return (
    <>
      <label
        htmlFor={props.id}
        className={
          props.checked === props.id
            ? "cursor-pointer text-[1.3rem] text-grey2"
            : "cursor-pointer text-xl hover:text-grey2 "
        }
      >
        {props.text}
      </label>
      <input
        type="radio"
        value={props.id}
        id={props.id}
        name="options"
        onClick={props.handleCheck}
      />
    </>
  );
}
