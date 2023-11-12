import React, { useEffect, useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import useFlights from "../../../../../hooks/useFlights";
import Loader from "../../../../UI/Loader";

export function Calender() {
  const { data: flights } = useFlights();
  const [range, setRange] = useState([]);
  useEffect(() => {
    setRange(
      flights?.map((e) => {
        return {
          startDate: new Date(e.start_date),
          endDate: new Date(e.end_date),
          key: "selection",
        };
      }) ?? [],
    );
  }, [flights]);
  return (
    <DateRange
      className="h-80 rounded-3xl "
      editableDateInputs={true}
      onChange={() => null /*(item) => setRange([item.selection])*/}
      moveRangeOnFirstSelection={true}
      ranges={range}
      rangeColors={range.map(() => "#EC502C")}
      dragSelectionEnabled={false}
      showDateDisplay={false}
    />
  );
}
