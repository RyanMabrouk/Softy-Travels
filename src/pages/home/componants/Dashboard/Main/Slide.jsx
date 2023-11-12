import React from "react";
import location from "../assets/location.svg";
import { Discount } from "../../../../UI/Discount";
export function Slide(props) {
  return (
    <div
      className="onHoverScale105 relative flex aspect-[11/1] w-full cursor-pointer flex-row gap-8 rounded-3xl bg-background2 p-3"
      data-aos="fade-up"
    >
      <img
        className="aspect-square h-24 rounded-2xl"
        src={props.img_url}
        alt=""
      />
      <div className="col-[2] flex flex-col justify-center gap-2">
        <h1 className="subtitle m-0">{props.destination}</h1>
        <div className="flex flex-row items-center gap-1">
          <img className="h-4" src={location} alt="" />
          <p className="catch_phrase">{props.country}</p>
        </div>
        <div className="flex flex-row items-center">
          <p className="text-xl text-primary">{props.price_per_night} $</p>
          <p className="catch_phrase">/ day</p>
        </div>
        <div className="absolute -right-[10%] -top-[10%] w-32">
          {props.addDiscount && <Discount value={props.discount} />}
        </div>
      </div>
    </div>
  );
}
