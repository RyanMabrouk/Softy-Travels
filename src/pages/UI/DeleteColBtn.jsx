import React from "react";
import deleteIcon from "./assets/Header.png";
import Loader from "./Loader";

export function DeleteColBtn({ deleteHook, id }) {
  const deleteMutation = deleteHook();
  return (
    <>
      <label
        htmlFor={"delete" + id}
        className="relative flex !h-full !w-full items-center justify-center"
      >
        {deleteMutation.isLoading ? (
          <div className="absolute inset-0">
            <Loader />
          </div>
        ) : (
          <img
            className="onHoverScale105 !h-8 cursor-pointer"
            src={deleteIcon}
            alt=""
          />
        )}
      </label>
      <input
        type="button"
        id={"delete" + id}
        onClick={() => deleteMutation.mutate(id)}
      />
    </>
  );
}
