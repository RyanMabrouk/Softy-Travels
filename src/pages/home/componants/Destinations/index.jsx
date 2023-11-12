import React, { useState } from "react";
import Table from "../../../UI/Table";
import useDestinations from "../../../../hooks/useDestinations";
import { Discount } from "../../../UI/Discount";
import { TimePeriode } from "../../../UI/TimePeriode";
import { Center } from "./../../../UI/Center";
import useDeleteDestination from "../../../../querys/deleteDestination";
import { DeleteColBtn } from "../../../UI/DeleteColBtn";
import postDestination from "../../../../querys/postDestination";

export default function Destinations() {
  const [destinations, setDestinations] = useState();
  return (
    <div className="destinations_conatiner">
      <Table
        content={[
          {
            name: "",
            componants: destinations?.map((e) => (
              <Center>
                <img
                  className="onHoverScale200 cursor-pointer rounded-md"
                  src={e.img_url}
                  alt=""
                />
              </Center>
            )),
          },
          {
            name: "destination",
            componants: destinations?.map((e) => e.destination),
          },
          {
            name: "country",
            componants: destinations?.map((e) => e.country),
          },
          {
            name: "price",
            componants: destinations?.map((e) =>
              e.price_per_night ? e.price_per_night + " $" : "",
            ),
          },
          {
            name: "discount",
            componants: destinations?.map((e) => (
              <Discount value={e.discount} />
            )),
          },
          {
            name: "period",
            componants: destinations?.map((e) => (
              <TimePeriode start={e.discount_start} end={e.discount_end} />
            )),
          },
          {
            name: "",
            componants: destinations?.map((e) => (
              <DeleteColBtn deleteHook={useDeleteDestination} id={e.id} />
            )),
          },
        ]}
        sortOptions={[
          { name: "Price", value: "price_per_night" },
          { name: "Discount", value: "discount" },
        ]}
        includeAsc={true}
        fetchHook={useDestinations}
        postHook={postDestination}
        bucketName="destination_imgs"
        from={[
          { value: "destination", type: "text", name: "destination" },
          { value: "country", type: "text", name: "country" },
          { value: "price_per_night", type: "number", name: "price" },
          { value: "img_url", type: "file", name: "image" },
          { value: "discount", type: "number", name: "discount" },
          {
            value: "discount_start",
            type: "date",
            name: "discount start",
            notRequired: true,
          },
          {
            value: "discount_end",
            type: "date",
            name: "discount end",
            notRequired: true,
          },
        ]}
        setData={setDestinations}
        title={"Destinations"}
      />
    </div>
  );
}
