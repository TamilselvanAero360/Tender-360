// import React, { useState } from "react";
import "./Filter.css";
import { IoIosArrowDown } from "react-icons/io";
import { FiFilter } from "react-icons/fi";
import React, { useState, useRef, useEffect } from "react";


const FilterComponent = ({ onSelect }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("All filter");
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const options = [
    "All filter",
    "State",
    "EditedDate",
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
    <div className="filter-wrapper" ref={wrapperRef}>
      <div className="filter-box" onClick={() => setOpen(!open)}>
        <span>{selected}</span>
        <FiFilter className="filter-icon" />
      </div>

      {open && (
        <div className="filter-dropdown">
          {options.map((option, i) => (
            <div
              key={i}
              className="filter-option"
              onClick={() => {
                setSelected(option);
                onSelect(option);   // ⬅ send to AllBid
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
