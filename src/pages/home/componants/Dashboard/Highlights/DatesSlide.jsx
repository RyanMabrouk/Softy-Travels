import React from "react";
import calender from "../assets/calender.svg";

export function DatesSlide(props) {
  const formatter = new Intl.DateTimeFormat("fr", {
    day: "numeric",
    month: "short",
  });
  return (
    <div
      className="onHoverScale105 flex aspect-[7/1] cursor-pointer flex-row gap-8 rounded-3xl bg-background2 p-2 transition-all duration-[0.3s] ease-[ease-in]"
      data-aos="fade-up"
      data-aos-anchor-placement="top"
    >
      <img
        className="aspect-square h-20 rounded-3xl"
        src={props.img_url}
        alt=""
      />
      <div className="col-[2] flex flex-col justify-center gap-2">
        <h1 className="subtitle m-0">{props.destination}</h1>
        <div className="flex flex-row items-center gap-1">
          <img className="h-4" src={calender} alt="" />
          <p className="catch_phrase">
            {formatter.format(new Date(props.start_date)) +
              " - " +
              formatter.format(new Date(props.end_date))}
          </p>
        </div>
      </div>
    </div>
  );
}
