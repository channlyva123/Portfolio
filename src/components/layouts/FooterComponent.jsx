import { Footer, FooterDivider, FooterCopyright } from "flowbite-react";
import { Link } from "react-router-dom";
const FooterComponent = () => {
  return (
    <Footer className=' container text-text bg-bg'>
      <div className='w-full text-center sm:text-left'>
        <div className='w-full flex flex-row sm:flex-col justify-between items-center py-6 px-4'>
          <FooterDivider className=' hidden sm:block' />
          {/* Links */}
          <div className=' flex flex-wrap justify-center sm:justify-start gap-4'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
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
