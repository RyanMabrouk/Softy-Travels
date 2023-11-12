import React, { Suspense } from "react";
import SideBar from "./componants/SideBar";
import { Outlet } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <main className="fixed box-border grid min-h-screen w-screen grid-cols-[16%_auto] grid-rows-[20%_auto]">
        <SideBar />
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}
