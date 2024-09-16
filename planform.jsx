// src/pages/PlanForm.jsx
import React, { useState } from 'react';
import '../styles/PlanForm.css'; // Correct path to PlanForm.css

const PlanForm = () => {
  const [formData, setFormData] = useState({
    planType: '',
    planID: '',
    planName: '',
    planPrice: '',
    planDuration: '',
    planDescription: ''
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleCancel = () => {
    setFormData({
      planType: '',
      planID: '',
      planName: '',
      planPrice: '',
      planDuration: '',
      planDescription: ''
    });
    setSubmittedData(null);  // Clear submitted data when canceled
  };

  const handleAdd = () => {
    setSubmittedData(formData);
    // Optionally, you could also submit the data to a server here
  };

  return (
    <div className="form-container">
      <h2>Fill the Details:</h2>
      <form>
        <div className="form-group">
          <label>Plan type :</label>
          <select
            name="planType"
            value={formData.planType}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="Prepaid">Prepaid</option>
            <option value="Postpaid">Postpaid</option>
          </select>
        </div>
        <div className="form-group">
          <label>Plan ID :</label>
          <input
            type="text"
            name="planID"
            value={formData.planID}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Plan name :</label>
          <input
            type="text"
            name="planName"
            value={formData.planName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Plan price :</label>
          <input
            type="number"
            name="planPrice"
            value={formData.planPrice}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Plan duration :</label>
          <input
            type="text"
            name="planDuration"
            value={formData.planDuration}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Plan description :</label>
          <textarea
            name="planDescription"
            value={formData.planDescription}
            onChange={handleChange}
            required
          />
        </div>
        <div className="button-group">
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
          <button type="button" onClick={handleAdd}>
            Add
          </button>
        </div>
      </form>

      {submittedData && (
        <div className="submitted-info">
          <h3>Submitted Information:</h3>
          <div className="info-row">
            <div className="info-label">Plan type :</div>
            <div className="info-value">{submittedData.planType}</div>
          </div>
          <div className="info-row">
            <div className="info-label">Plan ID :</div>
            <div className="info-value">{submittedData.planID}</div>
          </div>
          <div className="info-row">
            <div className="info-label">Plan name :</div>
            <div className="info-value">{submittedData.planName}</div>
          </div>
          <div className="info-row">
            <div className="info-label">Plan price :</div>
            <div className="info-value">{submittedData.planPrice}</div>
          </div>
          <div className="info-row">
            <div className="info-label">Plan duration :</div>
            <div className="info-value">{submittedData.planDuration}</div>
          </div>
          <div className="info-row">
            <div className="info-label">Plan description :</div>
            <div className="info-value">{submittedData.planDescription}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlanForm;
