import React, { useState } from "react";
import "./AllBid.css";
import { FaEye, FaEdit } from "react-icons/fa";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";

const AllBid = () => {
  const initialData = [
    {
      sno: 1,
      tenderId: "GEM/2025/B/6687212",
      published: "20/08/2025",
      authority: "Indian Army",
      qty: 1,
      state: "Haryana",
      doability: "YES",
      remarks: "accepted in technical evaluation, bid contract not result found.",
      subDate: "08/11/2025 10:00AM",
      editedBy: "Mukesh",
      editedDate: "08/11/2025 10:00AM",
      status: "Active"
    },
    {
      sno: 2,
      tenderId: "GEM/2025/B/6687212",
      published: "20/08/2025",
      authority: "Indian Army",
      qty: 1,
      state: "Haryana",
      doability: "NO",
      remarks: "accepted in technical evaluation, bid contract not result found.",
      subDate: "08/11/2025 10:00AM",
      editedBy: "Mukesh",
      editedDate: "08/11/2025 10:00AM",
      status: "Archive"
    },
    {
      sno: 3,
      tenderId: "GEM/2025/B/6687212",
      published: "20/08/2025",
      authority: "Indian Army",
      qty: 1,
      state: "Haryana",
      doability: "NO",
      remarks: "accepted in technical evaluation, bid contract not result found.",
      subDate: "08/11/2025 10:00AM",
      editedBy: "Mukesh",
      editedDate: "08/11/2025 10:00AM",
      status: "Archive"
    }
  ];

  const [tableData, setTableData] = useState(initialData);
  const [sortConfig, setSortConfig] = useState({ key: "", direction: "" });

  // --- SORT ---
  const handleSort = (key) => {
    let direction = "asc";

    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }

    const sorted = [...tableData].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });

    setTableData(sorted);
    setSortConfig({ key, direction });
  };

  // --- DOABILITY CHANGE ---
  const handleDoability = (index, value) => {
    const updated = [...tableData];
    updated[index].doability = value;
    setTableData(updated);
  };

  return (
    <div className="allbid-layout">

      {/* SIDEBAR */}
      <Sidebar />

      {/* RIGHT SIDE */}
      <div className="allbid-right">

        {/* TOPBAR */}
        <Topbar />

        {/* PAGE CONTENT */}
        <div className="allbid-container">

          <div className="allbid-header">
            <h2>All bid</h2>

            <div className="allbid-actions">
              <SearchBar placeholder="Search anything" />
              <Filter />
              <button className="create-btn">Create Bid</button>
            </div>
          </div>

          {/* TABLE */}
          <div className="table-wrapper">
            <table className="custom-table">

              <thead>
                <tr>
                  <th onClick={() => handleSort("sno")}>S.no ↕</th>
                  <th onClick={() => handleSort("tenderId")}>Tender Id ↕</th>
                  <th onClick={() => handleSort("published")}>Published Date ↕</th>
                  <th onClick={() => handleSort("authority")}>Tendering Authority ↕</th>
                  <th onClick={() => handleSort("qty")}>Qty ↕</th>
                  <th onClick={() => handleSort("state")}>State ↕</th>
                  <th>Doability</th>
                  <th>Remarks</th>
                  <th onClick={() => handleSort("subDate")}>Submission Date & Time</th>
                  <th onClick={() => handleSort("editedBy")}>Edited by</th>
                  <th onClick={() => handleSort("editedDate")}>Edited Date & Time</th>
                  <th onClick={() => handleSort("status")}>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {tableData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.sno}</td>
                    <td>{item.tenderId}</td>
                    <td>{item.published}</td>
                    <td>{item.authority}</td>
                    <td>{item.qty}</td>
                    <td>{item.state}</td>

                    {/* DOABILITY */}
                    <td className="doability-cell">
                      <select
                        value={item.doability}
                        onChange={(e) => handleDoability(index, e.target.value)}
                        className="doability-select"
                      >
                        <option value="YES">YES</option>
                        <option value="NO">NO</option>
                      </select>

                      <span className={`doability-badge ${item.doability === "YES" ? "green" : "red"}`}>
                        {item.doability}
                      </span>
                    </td>

                    <td className="remarks-col">{item.remarks}</td>
                    <td>{item.subDate}</td>
                    <td>{item.editedBy}</td>
                    <td>{item.editedDate}</td>
                    <td>{item.status}</td>

                    <td className="action-col">
                      <FaEdit className="action-icon" />
                      <FaEye className="action-icon" />
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AllBid;
