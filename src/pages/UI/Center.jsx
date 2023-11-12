import React from "react";

export function Center({ children }) {
  return (
    <div className={"flex !h-full !w-full items-center justify-center"}>
      {children}
    </div>
  );
}
