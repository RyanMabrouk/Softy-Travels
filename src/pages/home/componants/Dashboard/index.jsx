import React from "react";
import Header from "./Header";
import Main from "./Main/Main.jsx";
import Highlights from "./Highlights/Highlights.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
export default function Dashboard() {
  return (
    <div className="dashboard_container grid h-screen grid-cols-[auto_30%] grid-rows-[8%_auto] gap-4 bg-background1 p-4 [&_*]:transition-all [&_*]:duration-[0.3s] [&_*]:ease-in">
      <Header />
      <Main />
      <Highlights />
    </div>
  );
}
