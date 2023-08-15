import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function SelectBox(props) {
  const { options } = props;
  const { msg } = props;
  // console.log(options);
    // const optionList = options.length > 0 ? options : [] ;
  return (
    <>
      <div className="dropdown">
        <button className="dropbtn">
          {msg}
          <RiArrowDropDownLine />
        </button>
        <div className="dropdown-content">
          {options.map((option, index) => {
            return (
              <label key={index}>
                <input type="checkbox" key={option} value={option} /> {option}
              </label>
            );
          })}
        </div>
      </div>
    </>
  );
}
