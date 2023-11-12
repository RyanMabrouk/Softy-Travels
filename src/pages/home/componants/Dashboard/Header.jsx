import React, { useContext } from "react";
import search from "./assets/search.svg";
import notifications from "./assets/notifications.svg";
import avatar from "./assets/avatar.svg";
import userContext from "../../../../context/UserContext";

export default function Header() {
  const { userName, userPicture } = useContext(userContext);
  return (
    <header className="col-[1_/span_2] flex flex-row items-center justify-evenly bg-background1">
      <div className="flex flex-row items-center gap-20">
        <div className="flex h-14 w-fit flex-row items-center gap-4 rounded-2xl bg-background2 pl-4">
          <img className="h-7" src={search} alt="" />
          <input
            className="h-10 w-[27.5rem] border-none bg-transparent text-2xl text-grey1 shadow-md placeholder:text-grey1 focus:outline-none"
            type="text"
            placeholder="Search..."
          />
          <label
            className="flex h-full w-40 cursor-pointer flex-row items-center justify-center rounded-2xl bg-primary text-2xl font-medium text-background1"
            htmlFor="search"
          >
            Search
          </label>
          <input type="button" id="search" />
        </div>
        <img
          className="cursor-pointer rounded-full bg-background2 p-4"
          src={notifications}
          alt=""
        />
      </div>
      <div className="grid grid-cols-2 grid-rows-2 items-end justify-end gap-x-4">
        <img
          className="row-[1_/span_2] h-16 w-16 self-center justify-self-end rounded-full"
          src={userPicture}
          alt=""
        />
        <h2 className="text-3xl text-grey2 -mb-2">{userName}</h2>
        <p className="-mt-2 text-center text-grey1">Pro Traveler</p>
      </div>
    </header>
  );
}
