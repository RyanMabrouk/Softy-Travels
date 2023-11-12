import React, { useState } from "react";
import { TimePeriode } from "../../../UI/TimePeriode";
import Table from "../../../UI/Table";
import useFlights from "../../../../hooks/useFlights";
import useDestinations from "../../../../hooks/useDestinations";
import usePlanes from "../../../../hooks/usePlanes";
import { Status } from "./Status";
import { DeleteColBtn } from "../../../UI/DeleteColBtn";
import postFlight from "../../../../querys/postFlight";
import useDeleteFlight from "../../../../querys/deleteFlight";

export default function Bookings() {
  const [bookings, setBookings] = useState();
  const { data: planes } = usePlanes();
  const { data: destinations } = useDestinations();
  return (
    <div className="bg-background1">
      <Table
        content={[
          {
            name: "status",
            componants: bookings?.map((e) => <Status value={e.status} />),
          },
          {
            name: "price",
            componants: bookings?.map((e) => e.price + " $"),
          },
          {
            name: "period",
            componants: bookings?.map((e) => (
              <TimePeriode start={e.start_date} end={e.end_date} />
            )),
          },
          {
            name: "",
            componants: bookings?.map((e) => (
              <DeleteColBtn deleteHook={useDeleteFlight} id={e.id} />
            )),
          },
        ]}
        sortOptions={[
          { name: "Status", value: "status" },
          { name: "Price", value: "price" },
        ]}
        includeAsc={true}
        fetchHook={useFlights}
        postHook={postFlight}
        from={[
          { value: "price", type: "text", name: "total cost" },
          {
            value: "status",
            type: "select",
            options: ["ongoing", "done"],
            name: "status",
          },
          { value: "start_date", type: "date", name: "start date" },
          { value: "end_date", type: "date", name: "end date" },
          {
            value: "destination_id",
            type: "select",
            options: destinations?.map((e) => e.id),
            name: "destination name",
          },
          {
            value: "plane_id",
            type: "select",
            options: planes?.map((e) => e.id),
            name: "plane name",
          },
          { value: "user_id", type: "text", name: "user id" },
        ]}
        setData={setBookings}
        title={"Bookings"}
      />
    </div>
  );
}
