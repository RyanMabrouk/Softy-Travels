import React from "react";
import Loader from "../Loader";

export function PageLoader() {
  return (
    <div className="relative h-screen w-full bg-background1">
      <div className="absolute inset-0 flex items-center justify-center [&_svg]:h-36 [&_svg]:w-36">
        <Loader />
      </div>
    </div>
  );
}
