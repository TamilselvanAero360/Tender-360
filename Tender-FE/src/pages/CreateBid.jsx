import React, { useState } from "react";
import "./CreateBid.css";
import { Navigate, useNavigate } from "react-router-dom";


const CreateBid = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    tenderId: "",
    category: "",
    itemDescription: "",
    publishedDate: "",
    authority: "",
    qty: "",
    state: "",
    location: "",
    estimatedValue: "",
    turnover: "",
    emdFee: "",
    emdExemption: "",
    tenderFee: "",
    tenderFeeExemption: "",
    prebidMandatory: "",
    prebidDate: "",
    submissionDate: "",
    raEnabled: "",
    corrigendum: "",
    corrigendumDate: "",
    doability: "",
    remarks: "",
    attachLink: "",
    attachName: "",
    uploadDoc: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let temp = {};
    Object.keys(formData).forEach((field) => {
      if (formData[field] === "") temp[field] = "Required";
    });
    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    alert("Form submitted successfully ✔️");
  };

  return (
    <div className="form-container">
      <div className="back-label" onClick={() => navigate("/allbid")}>
        {"<"}back
      </div>
      <h2 className="title">Create Bid</h2>

      <form className="form-wrapper" onSubmit={handleSubmit}>
        {/* SECTION 1 */}
        <div className="card">
          <h3 className="section-title">Tender Basics</h3>

          <div className="grid">
            <div className="input-group">
              <label>Tender id</label>
              <input
                name="tenderId"
                value={formData.tenderId}
                onChange={handleChange}
              />
              <span className="err">{errors.tenderId}</span>
            </div>

            <div className="input-group">
              <label>Category</label>
              <input
                name="category"
                value={formData.category}
                onChange={handleChange}
              />
              <span className="err">{errors.category}</span>
            </div>

            <div className="input-group">
              <label>Item Description</label>
              <textarea
                name="itemDescription"
                value={formData.itemDescription}
                onChange={handleChange}
              ></textarea>
              <span className="err">{errors.itemDescription}</span>
            </div>

            <div className="input-group">
              <label>Published Date</label>
              <input
                type="date"
                name="publishedDate"
                value={formData.publishedDate}
                onChange={handleChange}
              />
              <span className="err">{errors.publishedDate}</span>
            </div>

            <div className="input-group">
              <label>Tendering Authority</label>
              <input
                name="authority"
                value={formData.authority}
                onChange={handleChange}
              />
              <span className="err">{errors.authority}</span>
            </div>

            <div className="input-group">
              <label>Qty</label>
              <input name="qty" value={formData.qty} onChange={handleChange} />
              <span className="err">{errors.qty}</span>
            </div>

            <div className="input-group">
              <label>State</label>
              <select
                name="state"
                value={formData.state}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="TN">Tamil Nadu</option>
              </select>
              <span className="err">{errors.state}</span>
            </div>

            <div className="input-group">
              <label>Location</label>
              <select
                name="location"
                value={formData.location}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="Chennai">Chennai</option>
              </select>
              <span className="err">{errors.location}</span>
            </div>
          </div>
        </div>

        {/* SECTION 2 */}
        <div className="card">
          <h3 className="section-title">Financials</h3>

          <div className="grid">
            <div className="input-group">
              <label>Estimated Value</label>
              <input
                name="estimatedValue"
                value={formData.estimatedValue}
                onChange={handleChange}
              />
              <span className="err">{errors.estimatedValue}</span>
            </div>

            <div className="input-group">
              <label>Turnover criteria</label>
              <input
                name="turnover"
                value={formData.turnover}
                onChange={handleChange}
              />
              <span className="err">{errors.turnover}</span>
            </div>

            <div className="input-group">
              <label>EMD fee</label>
              <input
                name="emdFee"
                value={formData.emdFee}
                onChange={handleChange}
              />
              <span className="err">{errors.emdFee}</span>
            </div>

            <div className="input-group">
              <label>EMD Exemption</label>
              <input
                name="emdExemption"
                value={formData.emdExemption}
                onChange={handleChange}
              />
              <span className="err">{errors.emdExemption}</span>
            </div>

            <div className="input-group">
              <label>Tender fee</label>
              <input
                name="tenderFee"
                value={formData.tenderFee}
                onChange={handleChange}
              />
              <span className="err">{errors.tenderFee}</span>
            </div>

            <div className="input-group">
              <label>Tender Fee Exemption</label>
              <input
                name="tenderFeeExemption"
                value={formData.tenderFeeExemption}
                onChange={handleChange}
              />
              <span className="err">{errors.tenderFeeExemption}</span>
            </div>
          </div>
        </div>

        {/* SECTION 3 */}
        <div className="card">
          <h3 className="section-title">Prebid basics</h3>

          <div className="grid">
            <div className="input-group">
              <label>Prebid mandatory (Yes/No)</label>
              <select
                name="prebidMandatory"
                value={formData.prebidMandatory}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option>Yes</option>
                <option>No</option>
              </select>
              <span className="err">{errors.prebidMandatory}</span>
            </div>

            <div className="input-group">
              <label>Prebid Meeting date & time</label>
              <input
                type="datetime-local"
                name="prebidDate"
                value={formData.prebidDate}
                onChange={handleChange}
              />
              <span className="err">{errors.prebidDate}</span>
            </div>

            <div className="input-group">
              <label>Submission deadline date & time</label>
              <input
                type="datetime-local"
                name="submissionDate"
                value={formData.submissionDate}
                onChange={handleChange}
              />
              <span className="err">{errors.submissionDate}</span>
            </div>

            <div className="input-group">
              <label>RA enabled</label>
              <input
                name="raEnabled"
                value={formData.raEnabled}
                onChange={handleChange}
              />
              <span className="err">{errors.raEnabled}</span>
            </div>
          </div>
        </div>

        {/* SECTION 4 */}
        <div className="card">
          <h3 className="section-title">Corrigendum & Documents</h3>

          <div className="grid">
            <div className="input-group">
              <label>Corrigendum</label>
              <input
                name="corrigendum"
                value={formData.corrigendum}
                onChange={handleChange}
              />
              <span className="err">{errors.corrigendum}</span>
            </div>

            <div className="input-group">
              <label>Corrigendum Date</label>
              <input
                type="date"
                name="corrigendumDate"
                value={formData.corrigendumDate}
                onChange={handleChange}
              />
              <span className="err">{errors.corrigendumDate}</span>
            </div>

            <div className="input-group">
              <label>Doability</label>
              <select  name="doability"
                value={formData.doability}
                onChange={handleChange}>
                 <option value="selcect">--Select--</option>
                 <option value="Yes">Yes</option>
                 <option value="No">No</option>
              </select>
              <span className="err">{errors.doability}</span>
            </div>

            <div className="input-group">
              <label>Remarks</label>
              <textarea 
                name="remarks"
                value={formData.remarks}
                onChange={handleChange}>
              </textarea>
              <span className="err">{errors.remarks}</span>
            </div>

            <div className="input-group">
              <label>Attach Link</label>
              <input
                name="attachLink"
                value={formData.attachLink}
                onChange={handleChange}
              />
              <span className="err">{errors.attachLink}</span>
            </div>

            <div className="input-group">
              <label>Attach name</label>
              <input
                name="attachName"
                value={formData.attachName}
                onChange={handleChange}
              />
              <span className="err">{errors.attachName}</span>
            </div>

            <div className="input-group">
              <label>Upload Document</label>

              <input
                type="file"
                name="uploadDoc"
                onChange={(e) => {
                  const file = e.target.files[0];
                  setFormData({ ...formData, uploadDoc: file });
                }}
              />

              

              <span className="err">{errors.uploadDoc}</span>
            </div>
          </div>
        </div>

        <div className="button-row">
          <button
            onClick={() => navigate("/allbid")}
            type="button"
            className="cancel-btn"
          >
            Cancel
          </button>
          <button type="submit" className="save-btn">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateBid;
