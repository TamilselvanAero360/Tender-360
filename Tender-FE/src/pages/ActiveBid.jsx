import React, { useState } from "react";
import "./ActiveBid.css"; // Reuse same styling
import { FaEye, FaEdit } from "react-icons/fa";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";
import { useNavigate } from "react-router-dom";

const ActiveBid = () => {
  const navigate = useNavigate();

  // -------------------------
  // INITIAL ACTIVE DATA ONLY
  // -------------------------
  const initialData = [
    {
      sno: 1,
      tenderId: "GEM/2025/B/6687212",
      published: "20/08/2025",
      authority: "Indian Army",
      qty: 10,
      state: "Haryana",
      doability: "YES",
      remarks: "accepted in technical evaluation, bid contract not result found.",
      subDate: "08/11/2025 10:00AM",
      editedBy: "Tharun",
      editedDate: "10/11/2025 10:00AM",
      status: "Active",
    }
  ];

  const [tableData, setTableData] = useState(initialData);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("All filter");

  // -------------------------
  // FILTER FUNCTION
  // -------------------------
  const filteredData = tableData.filter((item) => {
    const q = searchQuery.toLowerCase();
    if (!q) return true;

    if (filterType === "All filter") {
      return Object.values(item).some((v) =>
        String(v).toLowerCase().includes(q)
      );
    }

    const filterKeyMap = {
      State: "state",
      "Tender Id": "tenderId",
      "Published Date": "published",
      "Tendering Authority": "authority",
      "Edited by": "editedBy",
      EditedDate: "editedDate",
      Doability: "doability",
      Status: "status",
      Remarks: "remarks",
      Qty: "qty",
    };

    const key = filterKeyMap[filterType];
    if (!key) return true;

    return String(item[key]).toLowerCase().includes(q);
  });

  // -------------------------
  // SORT
  // -------------------------
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

  return (
    <div className="allbid-layout">
      <Topbar />

      <div className="allbid-right">
        <Sidebar />

        <div className="allbid-container">
          <div className="allbid-header">
            <h2>Active Bid</h2>

            <div className="allbid-actions">
              <SearchBar
                placeholder="Search anything"
                onChange={(e) => setSearchQuery(e.target.value)}
              />

              <Filter onSelect={(val) => setFilterType(val)} />
            </div>
          </div>

          {/* TABLE */}
          <div className="table-wrapper">
            <table className="custom-table">
             <thead>
                <tr>
                  <th onClick={() => handleSort("sno")}>
                    S.no
                    <svg
                      width="10"
                      height="14"
                      viewBox="0 0 10 14"
                      style={{ marginLeft: "4px" }}
                    >
                      <path d="M5 0 L10 5 H0 Z" fill="black" />
                      <path d="M5 14 L0 9 H10 Z" fill="black" />
                    </svg>
                  </th>

                  <th onClick={() => handleSort("tenderId")}>
                    Tender Id
                    <svg
                      width="10"
                      height="14"
                      viewBox="0 0 10 14"
                      style={{ marginLeft: "4px" }}
                    >
                      <path d="M5 0 L10 5 H0 Z" fill="black" />
                      <path d="M5 14 L0 9 H10 Z" fill="black" />
                    </svg>
                  </th>

                  <th onClick={() => handleSort("published")}>
                    Published Date
                    <svg
                      width="10"
                      height="14"
                      viewBox="0 0 10 14"
                      style={{ marginLeft: "4px" }}
                    >
                      <path d="M5 0 L10 5 H0 Z" fill="black" />
                      <path d="M5 14 L0 9 H10 Z" fill="black" />
                    </svg>
                  </th>

                  <th onClick={() => handleSort("authority")}>
                    Tendering Authority
                    <svg
                      width="10"
                      height="14"
                      viewBox="0 0 10 14"
                      style={{ marginLeft: "4px" }}
                    >
                      <path d="M5 0 L10 5 H0 Z" fill="black" />
                      <path d="M5 14 L0 9 H10 Z" fill="black" />
                    </svg>
                  </th>

                  <th onClick={() => handleSort("qty")}>
                    Qty
                    <svg
                      width="10"
                      height="14"
                      viewBox="0 0 10 14"
                      style={{ marginLeft: "4px" }}
                    >
                      <path d="M5 0 L10 5 H0 Z" fill="black" />
                      <path d="M5 14 L0 9 H10 Z" fill="black" />
                    </svg>
                  </th>

                  <th onClick={() => handleSort("state")}>
                    State
                    <svg
                      width="10"
                      height="14"
                      viewBox="0 0 10 14"
                      style={{ marginLeft: "4px" }}
                    >
                      <path d="M5 0 L10 5 H0 Z" fill="black" />
                      <path d="M5 14 L0 9 H10 Z" fill="black" />
                    </svg>
                  </th>

                  <th>Doability</th>
                  <th>Remarks</th>

                  <th onClick={() => handleSort("subDate")}>
                    Submission Deadline Date & Time
                    <svg
                      width="10"
                      height="14"
                      viewBox="0 0 10 14"
                      style={{ marginLeft: "4px" }}
                    >
                      <path d="M5 0 L10 5 H0 Z" fill="black" />
                      <path d="M5 14 L0 9 H10 Z" fill="black" />
                    </svg>
                  </th>

                  <th onClick={() => handleSort("editedBy")}>
                    Edited by
                    <svg
                      width="10"
                      height="14"
                      viewBox="0 0 10 14"
                      style={{ marginLeft: "4px" }}
                    >
                      <path d="M5 0 L10 5 H0 Z" fill="black" />
                      <path d="M5 14 L0 9 H10 Z" fill="black" />
                    </svg>
                  </th>

                  <th onClick={() => handleSort("editedDate")}>
                    Edited Date & Time
                    <svg
                      width="10"
                      height="14"
                      viewBox="0 0 10 14"
                      style={{ marginLeft: "4px" }}
                    >
                      <path d="M5 0 L10 5 H0 Z" fill="black" />
                      <path d="M5 14 L0 9 H10 Z" fill="black" />
                    </svg>
                  </th>

                  <th onClick={() => handleSort("status")}>
                    Status
                    <svg
                      width="10"
                      height="14"
                      viewBox="0 0 10 14"
                      style={{ marginLeft: "4px" }}
                    >
                      <path d="M5 0 L10 5 H0 Z" fill="black" />
                      <path d="M5 14 L0 9 H10 Z" fill="black" />
                    </svg>
                  </th>

                  <th>Action</th>
                </tr>
              </thead>


              <tbody>
                {filteredData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.sno}</td>
                    <td>{item.tenderId}</td>
                    <td>{item.published}</td>
                    <td>{item.authority}</td>
                    <td>{item.qty}</td>
                    <td>{item.state}</td>

                    {/* DOABILITY — NO FUNCTION */}
                    <td className={`doability-badge ${item.doability === "YES" ? "green" : "red"}`}>
                      {item.doability}
                    </td>

                    {/* REMARKS TOOLTIP */}
                    <td className="remarks-col" title={item.remarks}>
                      <span className="remarks-text">{item.remarks}</span>
                    </td>

                    <td>{item.subDate}</td>
                    <td>{item.editedBy}</td>
                    <td>{item.editedDate}</td>
                    <td>{item.status}</td>

                    <td className="action-col">
                      <FaEdit
                        onClick={() => navigate(`/edit-bid/${index}`)}
                        className="action-icon"
                      />

                      <FaEye
                        onClick={() => navigate("/view-bid")}
                        className="action-icon"
                      />
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

export default ActiveBid;
