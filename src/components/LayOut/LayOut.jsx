import React from "react";
import NavBar from "../NavBar/NavBar";

import { Outlet } from "react-router-dom";

export default function LayOut() {
  return (
    <>
      <div className="flex flex-col">
        <NavBar></NavBar>
        <Outlet></Outlet>
      </div>
    </>
  );
}
