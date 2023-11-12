import React, { useEffect, useState } from "react";
import { Card } from "./Card";
import { Slide } from "./Slide";
import { Title } from "../Title";
import { RadioBtn } from "./RadioBtn";
import useDestinations from "../../../../../hooks/useDestinations";

export default function Main() {
  const { data: destinations, error, loading } = useDestinations();
  const [checked, setChecked] = useState("");
  function handleCheck(e) {
    setChecked(e.target.value);
    console.log(e.target.value);
  }
  const options = [
    { text: "Most Popular", id: "price_per_night" },
    { text: "Special Offers", id: "discount" },
  ];
  return (
    <main className="row-[2] flex flex-col gap-8">
      <header className="flex flex-col">
        <h1 className="title ">Hello Alice.!</h1>
        <p className="catch_phrase">Welcome back explore the world.!</p>
      </header>
      <section className="flex flex-col gap-2">
        <Title title="Easy Visa Destinations" link="/Home/Destinations" />
        <div className="flex flex-row justify-center gap-8">
          {destinations?.map((e, i) => {
            if (i < 4) {
              return <Card key={e.id} {...e} />;
            }
          })}
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <div className="ml-4 flex flex-row gap-8 text-grey3  ">
          {options.map((e, i) => {
            return (
              <RadioBtn
                key={"mainardioinput" + i}
                checked={checked}
                handleCheck={handleCheck}
                {...e}
              />
            );
          })}
        </div>
        <div className=" grid grid-cols-2 grid-rows-2 justify-between gap-4">
          {destinations
            ?.sort((a, b) => {
              return b[checked] - a[checked];
            })
            .map((e, i) => {
              if (i < 4) {
                return (
                  <Slide
                    key={"slide" + i}
                    addDiscount={checked === "discount"}
                    {...e}
                  />
                );
              }
            })}
        </div>
      </section>
    </main>
  );
}
