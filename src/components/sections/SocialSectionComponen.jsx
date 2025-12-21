import React from "react";
import {
  FaFacebook,
  FaFacebookMessenger,
  FaGithub,
  FaTelegram,
} from "react-icons/fa";
import { Popover } from "flowbite-react";
const socials = () => {
  const socials = [
    {
      id: 1,
      name: "Facebook",
      icon: <FaFacebook />,
      link: "https://www.facebook.com/share/19gRwdBKUg/",
    },
    {
      id: 2,
      name: "Messenger",
      icon: <FaFacebookMessenger />,
      link: "https://m.me/va.channly",
    },
    {
      id: 3,
      name: "Telegram",
      icon: <FaTelegram />,
      link: "https://t.me/ChannlyVa",
    },
    {
      id: 3,
      name: "Github",
      icon: <FaGithub />,
      link: "https://github.com/channlyva123",
    },
  ];
  return (
    <div className='flex flex-wrap gap-6 my-5'>
      {socials.map((social, index) => (
        <div key={index} className='flex gap-2'>
          <Popover
            content={
              <span className=' p-2 text-text bg-bg'>{social.name}</span>
            }
            trigger='hover'
            overlayClassName='custom-popover'
          >
            <a href={social.link} target='_blank'>
              <span className='text-3xl text-primary text-opacity-90 cursor-pointer hover:text-primary transition-transform duration-300'>
                {social.icon}
              </span>
            </a>
          </Popover>
        </div>
      ))}
    </div>
  );
};

export default socials;
