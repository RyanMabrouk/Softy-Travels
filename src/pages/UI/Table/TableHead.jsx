import React from "react";

export function TableHead(props) {
  return (
    <thead>
      <tr>
        {props.content?.map((e, i) => {
          return (
            <th
              className="bg-background1 p-2 font-medium uppercase "
              key={i + "th" + props.page}
            >
              {e.name}
            </th>
          );
        })}
      </tr>
    </thead>
  );
}
