import { Footer, FooterDivider, FooterCopyright } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
const FooterComponent = () => {
  const location = useLocation();
  const menuList = [
    { path: "/home", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];
  return (
    <Footer className=' container min-w-full text-text bg-bg'>
      <div className='w-full text-center sm:text-left'>
        <div className='w-full flex flex-row sm:flex-col justify-between items-center py-6 px-4'>
          <FooterDivider className=' hidden sm:block' />
          {/* Links */}
          <div className=' flex flex-wrap justify-center sm:justify-start gap-4'>
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
          </div>

          <FooterDivider className=' hidden sm:block w-1/2' />
          {/* Copyright */}
          <div>
            <FooterCopyright
              href='/'
              by='Va Channly'
              year={new Date().getFullYear()}
              className='text-center sm:text-left'
            />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterComponent;
