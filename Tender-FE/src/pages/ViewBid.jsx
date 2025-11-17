import React from "react";
import "./ViewBid.css";
import { Navigate, useNavigate } from "react-router-dom";

const TenderDetails = () => {
  const navigate=useNavigate();
  return (
    <div className="tender-container">
      {/* Header */}
      <div className="tender-header">
        <button className="back-btn" onClick={() => navigate("/allbid")} >&lt; Back</button>
        <br />
       
      </div>
 <h2 className="tender-id">Tender ID: 12345</h2>
      {/* Item Description */}
      <div className="item-description">
        <h3>Item Description</h3>
        <p>lorem ipohgmbmnbfstsx htf truyfm</p>
      </div>

      {/* Tender Info Table */}
      <div className="table-section">
        <h3>Tender Details</h3>
        <table>
          <thead>
            <tr>
              <th>Publish Date</th>
              <th>Category</th>
              <th>Tender Authority</th>
              <th>Doability</th>
              <th>Quantity</th>
              <th>State</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>10-11-2025</td>
              <td>Construction</td>
              <td>Govt Dept</td>
              <td>High</td>
              <td>500</td>
              <td>Delhi</td>
              <td>India</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Financial Table */}
      <div className="table-section">
        <h3>Financial</h3>
        <table>
          <thead>
            <tr>
              <th>Estimate Value</th>
              <th>Turnover Criteria</th>
              <th>EMD Fee</th>
              <th>EMD Fee Exemption</th>
              <th>Tender Fee</th>
              <th>Tender Fee Exemption</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>₹50,00,000</td>
              <td>₹2,00,00,000</td>
              <td>₹50,000</td>
              <td>No</td>
              <td>₹5,000</td>
              <td>Yes</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* PreBid Table */}
      <div className="table-section">
        <h3>PreBid</h3>
        <table>
          <thead>
            <tr>
              <th>Prebid Mandatory</th>
              <th>Submission Date & Time</th>
              <th>Prebid Meeting Date & Time</th>
              <th>RA Eable</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Yes</td>
              <td>15-11-2025 10:00 AM</td>
              <td>16-11-2025 11:00 AM</td>
              <td>Enabled</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Corrigendum Table */}
      <div className="table-section">
        <h3>Corrigendum</h3>
        <table>
          <thead>
            <tr>
              <th>Corrigendum</th>
              <th>Corrigendum Date & Time</th>
              <th>Remarks</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>12-11-2025 09:00 AM</td>
              <td>Updated specs</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Documents Section */}
      <div className="documents-section">
        <h3>Documents</h3>
        <button className="view-docs-btn">View Documents</button>
      </div>
    </div>
  );
};

export default TenderDetails;
