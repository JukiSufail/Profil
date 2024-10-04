import React from "react";
export function Skilldivider(props) {
  const {title} = props
  return (
    <div className=" font-medium bg-gray-700 opacity-85 p-4 shadow-xl rounded-xl col-span-full text-white" >
      {title}
    </div>
  );
}
