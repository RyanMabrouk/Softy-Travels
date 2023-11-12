import React, { useState } from "react";
import usePlanes from "../../../../hooks/usePlanes";
import Table from "../../../UI/Table";
import { Discount } from "../../../UI/Discount";
import { Center } from "../../../UI/Center";
import { DeleteColBtn } from "../../../UI/DeleteColBtn";
import postPlane from "../../../../querys/postPlane";
import useDeletePlanes from "../../../../querys/deletePlane";

export default function Planes() {
  const [planes, setPlanes] = useState();
  return (
    <div className="destinations_conatiner">
      <Table
        content={[
          {
            name: "",
            componants: planes?.map((e) => (
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
            name: "capacity",
            componants: planes?.map((e) => e.capacity),
          },
          {
            name: "type",
            componants: planes?.map((e) => e.type),
          },
          {
            name: "seat discount",
            componants: planes?.map((e) => <Discount value={e.discount} />),
          },
          {
            name: "",
            componants: planes?.map((e) => (
              <DeleteColBtn deleteHook={useDeletePlanes} id={e.id} />
            )),
          },
        ]}
        sortOptions={[
          { name: "Type", value: "type" },
          { name: "Capacity", value: "capacity" },
          { name: "Discount", value: "discount" },
        ]}
        includeAsc={true}
        fetchHook={usePlanes}
        postHook={postPlane}
        bucketName="plane_img"
        from={[
          { value: "type", type: "text", name: "plane type" },
          { value: "capacity", type: "number", name: "capacity" },
          { value: "img_url", type: "file", name: "image" },
          { value: "discount", type: "number", name: "airline discount" },
        ]}
        setData={setPlanes}
        title={"Our Fleet"}
      />
    </div>
  );
}
