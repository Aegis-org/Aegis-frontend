import React from "react";
import { ErrorMessage, useField } from "formik";

export const TextFields = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="grid grid-cols-4 items-start mb-11 font-montserrart text-pry-clr">
      <label
        htmlFor={field.name}
        className="mr-4 col-span-1 text-base md:text-lg font-semibold md:font-bold"
      >
        {label}
      </label>
      <input
        className={` ml-4 p-2 col-span-3 rounded border-2 border-pry-clr ${
          meta.touched && meta.error && "border-red-500"
        } `}
        {...field}
        {...props}
      />

      <ErrorMessage
        component="div"
        name={field.name}
        className="ml-4 errormessage text-red-500 text-sm"
      />
    </div>
  );
};
