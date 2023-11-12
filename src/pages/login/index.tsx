import React from "react";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div className="flex min-h-screen  w-screen flex-col items-center justify-center bg-background1">
      <div className="flex flex-col gap-4">
        <h1 className=" text-2xl text-grey2">Login page not ready yet :) </h1>
        <Link className=" text-primary capitalize" to="/Home">
          Go back to dashboard
        </Link>
      </div>
    </div>
  );
}

export default LoginPage;
