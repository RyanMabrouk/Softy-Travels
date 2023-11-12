import React from "react";
import logo_full from "../../assets/logo_full.svg";
import { NavLink, useNavigate } from "react-router-dom";
import bookings from "./assets/bookings.svg";
import flights from "./assets/users.svg";
import settings from "./assets/settings.svg";
import destinations from "./assets/destinations.svg";
import dashboard from "./assets/dashboard.svg";
import discount from "./assets/discount.svg";
import logout from "./assets/logout.svg";
import orange_shadow from "./assets/orange_shadow.svg";
import yellow_shadow from "./assets/yellow_shadow.svg";

export default function SideBar() {
  const navigate = useNavigate();
  return (
    <section className="home_sidebar_container relative row-span-full flex flex-1 flex-col items-center justify-start gap-10 bg-background1 px-8 py-5 [&_*]:transition-all [&_*]:duration-[0.3s] [&_*]:ease-in ">
      <div className="top_container">
        <img className="h-16" src={logo_full} alt="" />
      </div>
      <nav className="hover: flex flex-col gap-4 text-xl font-bold text-grey1">
        <NavLink className="nav_link group" to="/Home">
          <img src={dashboard} alt="" />
          Dashboard
        </NavLink>
        <NavLink className="nav_link group" to="/Home/Destinations">
          <img src={destinations} alt="" />
          Destinations
        </NavLink>
        <NavLink className="nav_link group" to="/Home/Planes">
          <img src={bookings} alt="" />
          The Fleet
        </NavLink>
        <NavLink className="nav_link group" to="/Home/Bookings">
          <img src={flights} alt="" />
          My Bookings
        </NavLink>
        <NavLink className="nav_link group" to="/Home/Settings">
          <img src={settings} alt="" />
          Settings
        </NavLink>
        <img
          className="mx-0 my-8 cursor-pointer"
          src={discount}
          alt=""
          onClick={() => navigate("/Home/Destinations")}
        />
        <NavLink className="nav_link group" to="/">
          <img src={logout} alt="" />
          logout
        </NavLink>
      </nav>
      <img
        className="absolute -top-4 right-0 h-[25rem]"
        src={yellow_shadow}
        alt=""
      />
      <img
        className="absolute right-0 top-20 h-[25rem]"
        src={orange_shadow}
        alt=""
      />
    </section>
  );
}
