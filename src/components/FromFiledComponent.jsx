import React from "react";

const FormFieldComponent = ({
  id,
  name,
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  rows,
}) => {
  const isTextarea = type === "textarea";

  return (
    <div>
      <div className='mb-2 block'>
        <label htmlFor={id}>{label}</label>
      </div>

      {isTextarea ? (
        <textarea
          id={id}
          name={name}
          rows={rows || 4}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className='w-full border border-gray-300 rounded-md p-2 focus:border-primary focus:outline-none focus:ring-0 transition-transform text-justify'
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className='w-full border border-gray-300 rounded-md p-2 focus:border-primary focus:outline-none focus:ring-0 transition-transform'
        />
      )}

      {error && <span className='text-red-500 text-sm'>{error}</span>}
    </div>
  );
};

export default FormFieldComponent;
