import React, { useState } from "react";
import {
  Navbar,
  NavbarToggle,
  NavbarCollapse,
  NavbarBrand,
} from "flowbite-react";

import { Link, useLocation } from "react-router-dom";
import FadeTop from "@/animations/FadeTop";
import logo from "/images/logo.webp";
import ThemeToggle from "../ThemeToggleComponent";

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
      <div className='w-full relative container flex justify-between items-center px-4 md:px-7 shadow-md shadow-gray-300'>
        <Navbar className=' w-full text-text bg-bg'>
          {/* Logo */}
          <NavbarBrand as={Link} href='/home' className='flex items-end'>
            <span className='text-5xl font-bold text-primary'>P</span>
            <span className='text-3xl font-bold text-primary'>ortfolio</span>
          </NavbarBrand>

          {/* <ThemeToggle /> */}

          <div className='flex md:order-2 gap-3'>
            <ThemeToggle />
            <NavbarToggle className=' sm:mr-5' onClick={() => setOpen(!open)} />
          </div>
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
                  className={` rounded-md transition-transform ${
                    isActive
                      ? "text-primary font-semibold"
                      : "text-text/80 hover:text-primary"
                  }`}
                >
                  {menu.label}
                </Link>
              );
            })}
          </NavbarCollapse>
        </Navbar>
      </div>
    </FadeTop>
  );
};

export default NavbarComponent;
