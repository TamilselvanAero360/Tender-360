import React, { useState } from "react";
import "./Filter.css";
import { IoIosArrowDown } from "react-icons/io";
import { FiFilter } from "react-icons/fi";

const FilterComponent = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("All filter");

  const options = [
    "State",
    "Date",
    "Tender Id",
    "Published Date",
    "Tendering Authority",
    "Edited by",
    "Doability",
    "Status",
    "Remarks",
    "Qty",
  ];

  return (
    <div className="filter-wrapper">
      {/* FILTER BOX */}
      <div className="filter-box" onClick={() => setOpen(!open)}>
        <span>{selected}</span>
        <FiFilter className="filter-icon" />
      </div>

      {/* DROPDOWN */}
      {open && (
        <div className="filter-dropdown">
          {options.map((option, i) => (
            <div
              key={i}
              className="filter-option"
              onClick={() => {
                setSelected(option);
                setOpen(false);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterComponent;
