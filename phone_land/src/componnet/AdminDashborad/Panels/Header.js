import React from "react";
// import DropDown from "./DropDown";

export default function Header({title}) {
  return (
    <div >
      <div className="card-header pb-0">
        <div>
          <h6>{title}</h6>
        </div>
      </div>
    </div>
  );
}