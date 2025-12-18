import React from "react";
import HeaderComponent from "./HeaderComponent";
import { Outlet } from "react-router-dom";
import FooterComponent from "./FooterComponent";

const MainLayoutComponent = () => {
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <main className=' container min-h-screen'>
        <Outlet></Outlet>
      </main>
      <FooterComponent></FooterComponent>
    </>
  );
};

export default MainLayoutComponent;
