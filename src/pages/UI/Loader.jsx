import React from "react";
import { ColorRing } from "react-loader-spinner";

export default function Loader() {
  return (
    <ColorRing
      visible={true}
      height="60"
      width="60"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
      colors={["#d1f366", "#d1f366", "#d1f366", "#d1f366", "#d1f366"]}
    />
  );
}
