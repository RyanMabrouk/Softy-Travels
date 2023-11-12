import React from "react";

export function Select(props) {
  return (
    <select
      className="w-40 rounded-lg border border-solid border-background3 bg-background1 font-medium text-grey2  "
      name="options"
      id="options"
      onChange={props.handleChenge}
    >
      {props.sortOptions.map((e, i) => {
        return (
          <>
            <option key={"option" + i} value={e.value}>
              {e.name}
            </option>
            {props.includeAsc && (
              <option key={"optionAsc" + i} value={e.value + "Asc"}>
                {e.name + " (Asc)"}
              </option>
            )}
          </>
        );
      })}
    </select>
  );
}
