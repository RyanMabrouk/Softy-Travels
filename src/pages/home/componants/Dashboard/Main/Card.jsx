import React from "react";

export function Card(props) {
  return (
    <div
      className="group w-fit cursor-pointer rounded-[2rem] bg-background2 transition-all duration-[0.3s] ease-[ease-in]"
      data-aos="flip-right"
    >
      <img
        className="aspect-[14.125/11.25] h-[11.25rem] rounded-3xl p-2"
        src={props.img_url}
        alt=""
      />
      <h2 className="subtitle mx-3 my-2 text-xl">{props.destination}</h2>
      <hr className="w-full border-t border-dashed border-background3" />
      <div className="flex flex-row items-center justify-between rounded-b-[2rem] px-4 py-2 group-hover:bg-primary ">
        <p className="catch_phrase group-hover:bg-transparent group-hover:text-background1">
          Starting at
        </p>
        <h2 className="subtitle mx-3 my-2 text-xl group-hover:text-background1">
          {props.price_per_night} $
        </h2>
      </div>
    </div>
  );
}
