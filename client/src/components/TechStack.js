import React from "react";
import ProgrammingIcons from "./ProgrammingIcons";

export default function TechStack(props) {
  return (
    <div>
      {ProgrammingIcons.map((icon, ind) => (
        <img key={ind} src={icon.link} alt={icon.name} />
      ))}
    </div>
  );
}
