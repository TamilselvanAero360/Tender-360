import React, { useState } from "react";
import "./ViewBid.css";
import { useNavigate } from "react-router-dom";

const ViewBid = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  // Dummy Data – from backend you will replace later  
  const bid = {
    tenderId: "GEM/2025/B/6687212",
    description:
      "Lorem ipsum dolor sit amet consectetur. Convallis turpis commodo cursus odio. In dictumst aenean eu egestas at. Nibh malesuada facilisis proin turpis donec justo. Nec non auctor sit mus pulvinar.",
    published: "01/11/2025",
    category: "-",
    authority: "Indian Army",
    qty: 30,
    state: "Hariyana",
    location: "Allahabad, UP",
    submission: "11/11/2025 & 08:00AM",
    prebidMeeting: "11/11/2025 & 08:00AM",
    raEnable: 30,
    corrigendumDate: "11/11/2025 & 08:00AM",
  };

  return (
    <div className="viewbid-container">

      {/* BACK */}
      <button className="back-btn" onClick={() => navigate("/allbid")}>
        &lt; Back
      </button>

      <h2 className="tender-id">{bid.tenderId}</h2>

      {/* ITEM DESCRIPTION */}
      <section className="vb-section">
        <h3>Item Description</h3>
        <p className="vb-desc">{bid.description}</p>

        <table className="vb-table">
          <thead>
            <tr>
              <th>Published Date</th>
              <th>Category</th>
              <th>Tendering Authority</th>
              <th>Quantity</th>
              <th>State</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{bid.published}</td>
              <td>{bid.category}</td>
              <td>{bid.authority}</td>
              <td>{bid.qty}</td>
              <td>{bid.state}</td>
              <td>{bid.location}</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* FINANCIALS */}
      <section className="vb-section">
        <h3>Financials</h3>

        <table className="vb-table">
          <thead>
            <tr>
              <th>Estimated Value</th>
              <th>Turnover Criteria</th>
              <th>EMD Fee</th>
              <th>EMD Fee Exemption</th>
              <th>Tender Fee</th>
              <th>Tender Fee Exemption</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>30</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* PREBID */}
      <section className="vb-section">
        <h3>Prebid</h3>

        <table className="vb-table">
          <thead>
            <tr>
              <th>Prebid Mandatory</th>
              <th>Submission Date & Time</th>
              <th>Prebid Meeting Date & Time</th>
              <th>RA Enable</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Yes</td>
              <td>{bid.submission}</td>
              <td>{bid.prebidMeeting}</td>
              <td>{bid.raEnable}</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* CORRIGENDUM */}
      <section className="vb-section">
        <h3>Corrigendum</h3>

        <table className="vb-table">
          <thead>
            <tr>
              <th>Corrigendum</th>
              <th>Date & Time</th>
              <th>Doability</th>
              <th>Remarks</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Yes</td>
              <td>{bid.corrigendumDate}</td>
              <td>Yes</td>
              <td>Lorem ipsum dolor sit amet consectetur. Convallis turpis commodo cursus.</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* DOCUMENTS */}
      <section className="vb-section">
        <h3>Documents & Link</h3>

        <button className="view-template-btn" onClick={() => setShowPopup(true)}>
          View Documents
        </button>
      </section>

      {/* POPUP */}
      {showPopup && (
        <div className="popup-overlay" onClick={() => setShowPopup(false)}>
          <div className="popup" onClick={(e) => e.stopPropagation()}>
            <h3>Attached Files</h3>
            <ul>
              <li>📄 DummyDocument1.pdf</li>
              <li>🔗 https://example.com/dummy-link</li>
            </ul>
            <button className="close-btn" onClick={() => setShowPopup(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewBid;
