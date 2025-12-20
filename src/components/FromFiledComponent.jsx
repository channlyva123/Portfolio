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

  const baseClasses =
    "w-full rounded-md p-2 border transition-colors focus:outline-none focus:ring-0";

  const inputClasses = `${baseClasses} border-[rgb(var(--text))]/30 text-[rgb(var(--text))] bg-[rgb(var(--bg))] focus:border-[rgb(var(--primary))]`;

  return (
    <div className='mb-4'>
      {label && (
        <label
          htmlFor={id}
          className='block mb-1 font-medium text-[rgb(var(--text))]'
        >
          {label}
        </label>
      )}

      {isTextarea ? (
        <textarea
          id={id}
          name={name}
          rows={rows || 4}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`${inputClasses} resize-none text-justify`}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={inputClasses}
        />
      )}

      {error && (
        <span className='text-red-500 text-sm mt-1 block'>{error}</span>
      )}
    </div>
  );
};

export default FormFieldComponent;
