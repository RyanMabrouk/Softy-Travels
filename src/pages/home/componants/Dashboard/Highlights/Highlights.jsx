import React from "react";
import { Title } from "../Title";
import { DatesSlide } from "./DatesSlide";
import { Calender } from "./Calender";
import useFlights from "../../../../../hooks/useFlights";
import useDestinations from "../../../../../hooks/useDestinations";

export default function Highlights() {
  const { data: flights, error, loading } = useFlights();
  const { data: destinations } = useDestinations();
  const visited = [];
  flights?.map((f) => {
    visited.push({
      ...destinations?.filter((e) => e.id === f.destination_id)[0],
      ...f,
    });
  });
  let last_flight_year = "";
  return (
    <div className="col-[2] flex flex-col items-center gap-7 bg-background1 px-4">
      <Calender />
      <Title title="Recent Bookings" link="/Home/Bookings" />
      <div className="flex w-full flex-1 flex-col gap-3">
        {visited
          ?.sort((a, b) => {
            return new Date(b.start_date) - new Date(a.start_date);
          })
          .map((e, i) => {
            if (i < 3) {
              const year = new Date(e.start_date).getFullYear();
              const new_year = last_flight_year !== year;
              if (new_year) {
                last_flight_year = year;
              }
              return (
                <div
                  key={"datesslide" + i}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                  }}
                >
                  {new_year && <h2 className="subtitle">{year}</h2>}
                  <DatesSlide {...e} />
                </div>
              );
            }
          })}
      </div>
    </div>
  );
}
