// src/pages/PlanForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import '../styles/PlanForm.css';

const PlanForm = () => {
  const [formData, setFormData] = useState({
    planId: '',
    planName: '',
    planPrice: '',
    planDescription: '',
    planDuration: ''
  });

  const [submittedData, setSubmittedData] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleCancel = () => {
    setFormData({
      planId: '',
      planName: '',
      planPrice: '',
      planDescription: '',
      planDuration: ''
    });
    setSubmittedData(null);
    setError(null);
  };

  const handleAdd = async () => {
    try {
      const response = await axios.post('http://localhost:8082/api/plans?adminId=1', formData);
      // Log the response data to ensure it's what we expect
      console.log('Response data:', response.data);
      // Directly use the form data for submittedData
      setSubmittedData(formData);
    } catch (err) {
      setError('Error submitting form data.');
      console.error(err);
    }
  };

  return (
    <div className="plan-form-container">
      <h2>Fill the Details:</h2>
      <form>
        <div className="plan-form-group">
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
        <div className="plan-form-group">
          <label>Plan ID :</label>
          <input
            type="text"
            name="planId"
            value={formData.planId}
            onChange={handleChange}
            required
          />
        </div>
        <div className="plan-form-group">
          <label>Plan name :</label>
          <input
            type="text"
            name="planName"
            value={formData.planName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="plan-form-group">
          <label>Plan price :</label>
          <input
            type="number"
            name="planPrice"
            value={formData.planPrice}
            onChange={handleChange}
            required
          />
        </div>
        <div className="plan-form-group">
          <label>Plan duration :</label>
          <input
            type="text"
            name="planDuration"
            value={formData.planDuration}
            onChange={handleChange}
            required
          />
        </div>
        <div className="plan-form-group">
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

      {error && <div className="error-message">{error}</div>}

      {submittedData && (
        <div className="submitted-info">
          <h3>Submitted Information:</h3>
          <div className="submitted-info-row">
            <div className="submitted-info-label">Plan ID :</div>
            <div className="submitted-info-value">{submittedData.planId}</div>
          </div>
          <div className="submitted-info-row">
            <div className="submitted-info-label">Plan name :</div>
            <div className="submitted-info-value">{submittedData.planName}</div>
          </div>
          <div className="submitted-info-row">
            <div className="submitted-info-label">Plan price :</div>
            <div className="submitted-info-value">{submittedData.planPrice}</div>
          </div>
          <div className="submitted-info-row">
            <div className="submitted-info-label">Plan duration :</div>
            <div className="submitted-info-value">{submittedData.planDuration}</div>
          </div>
          <div className="submitted-info-row">
            <div className="submitted-info-label">Plan description :</div>
            <div className="submitted-info-value">{submittedData.planDescription}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlanForm;
