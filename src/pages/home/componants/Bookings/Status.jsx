import React from "react";

export function Status(props) {
  return (
    <div className="flex flex-row justify-center capitalize [&_div]:w-24 [&_div]:rounded-lg [&_div]:p-2 [&_div]:text-center [&_div]:font-bold [&_div]:text-[#e0f2fe]">
      <div
        className={props.value === "ongoing" ? "bg-[#3333ff]" : "bg-secondry"}
      >
        {props.value}
      </div>
    </div>
  );
}
