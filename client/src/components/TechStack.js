import React from "react";
import ProgrammingIcons from "./ProgrammingIcons";
import { ToastContainer, toast } from "react-toastify";

export default function TechStack(props) {
  return (
    <div>
      {ProgrammingIcons.map((icon) => (
        <img
          key={icon.name}
          alt={icon.name}
          src={icon.link}
          onClick={(e) => {
            toast.dismiss();
            toast(e.target.alt, { toastId: e.target.alt });
          }}
        />
      ))}
    </div>
  );
}
