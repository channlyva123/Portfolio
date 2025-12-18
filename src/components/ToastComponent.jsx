import React from "react";
import { Toast } from "flowbite-react";
import { HiCheck, HiX } from "react-icons/hi";
const ToastComponent = ({ type, message }) => {
  return (
    <div className='fixed top-5 left-5 z-50 rounded-lg border border-primary border-opacity-70'>
      <Toast>
        <div
          className={`inline-flex h-8 w-8 items-center justify-center  ${
            type === "success"
              ? "bg-green-100 text-green-500"
              : "bg-red-100 text-red-500"
          }`}
        >
          {type === "success" ? (
            <HiCheck className='h-5 w-5' />
          ) : (
            <HiX className='h-5 w-5' />
          )}
        </div>

        <div className='ml-3 text-sm font-normal'>{message}</div>
      </Toast>
    </div>
  );
};

export default ToastComponent;
