import React, { useState } from "react";
import { Navbar, NavbarToggle, NavbarCollapse } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import FadeTop from "@/animations/FadeTop";
import logo from "/images/logo.webp";

const NavbarComponent = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const menuList = [
    { path: "/home", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <FadeTop delay={200}>
      <Navbar
        fluid
        rounded
        className='w-full bg-white text-black dark:text-white shadow-md py-4 px-6'
      >
        {/* Logo */}
        <div className=' flex justify-start items-end w-[150px] cursor-pointer'>
          <Link to={"/home"}>
            <img src={logo} className='md:w-[40px] w-[25px]' alt='logo' />
          </Link>
          <Link to={"/home"}>
            <span className='text-3xl font-bold text-primary'>ortfolio</span>
          </Link>
        </div>

        {/* Toggle Button */}
        <NavbarToggle onClick={() => setOpen(!open)} />

        {/* Mobile Menu */}
        <NavbarCollapse className={open ? "block" : "hidden"}>
          {menuList.map((menu) => {
            const isActive =
              menu.path === "/home"
                ? location.pathname === "/" || location.pathname === "/home"
                : location.pathname === menu.path;

            return (
              <Link
                key={menu.path}
                to={menu.path}
                onClick={() => setOpen(false)}
                className={`px-3 py-2 rounded-md transition-all duration-200 ${
                  isActive
                    ? "text-primary font-semibold"
                    : "text-gray-700 hover:text-primary"
                }`}
              >
                {menu.label}
              </Link>
            );
          })}
        </NavbarCollapse>
      </Navbar>
    </FadeTop>
  );
};

export default NavbarComponent;
