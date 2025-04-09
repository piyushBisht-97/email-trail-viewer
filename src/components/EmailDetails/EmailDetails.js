import React from 'react';
import './EmailDetails.css';

const EmailDetails = ({ email }) => {
  const { details } = email;
  const isLease = 'leaseFor' in details;

  const renderLeaseDetails = () => (
    <>
      <div className="car-details-item">
        <div className="car-details-label">Lease For</div>
        <div className="car-details-value">{details.leaseFor}</div>
      </div>
      <div className="car-details-item">
        <div className="car-details-label">Term</div>
        <div className="car-details-value">{details.term}</div>
      </div>
      <div className="car-details-item">
        <div className="car-details-label">Due at Signing</div>
        <div className="car-details-value">{details.dueAtSigning}</div>
      </div>
    </>
  );

  const renderVehicleDetails = () => (
    <>
      <div className="car-details-item">
        <div className="car-details-label">Odometer</div>
        <div className="car-details-value">{details.odometer}</div>
      </div>
      <div className="car-details-item">
        <div className="car-details-label">Price</div>
        <div className="car-details-value">{details.price}</div>
      </div>
    </>
  );

  return (
    <div className="car-details">
      {isLease ? renderLeaseDetails() : renderVehicleDetails()}
      <button className="more-button">More</button>
    </div>
  );
};

export default EmailDetails;
