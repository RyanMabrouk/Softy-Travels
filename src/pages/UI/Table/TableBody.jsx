import React from "react";

export function TableBody(props) {
  return (
    <tbody>
      {props.content &&
        props.content[0].componants?.map((x, i) => {
          return (
            <tr key={i + "tr" + props.page}>
              {props.content?.map((e, i2) => {
                return (
                  <td
                    className="h-14 border-b border-solid border-background1 p-1 text-lg [&_img]:aspect-square [&_img]:h-16 [&_img]:rounded-2xl"
                    key={
                      e.name
                        ? i2 + "td" + e.name
                        : "img" + i2 + "page" + props.page
                    }
                  >
                    {e.componants[i] && e.componants[i]}
                  </td>
                );
              })}
            </tr>
          );
        })}
    </tbody>
  );
}
