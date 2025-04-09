import React from 'react';
import './StatusIndicator.css';

const StatusIndicator = ({ statuses }) => (
  <div className="status-indicators">
    {statuses.map((status, index) => (
      <div key={index} className="status-item">
        <div className="status-dot"></div>
        <span className="status-label">{status.type}</span>
        <div className="status-info">
          <span>Source: {status.info.source}</span>
          <span>Lead-in: {status.info.leadIn}</span>
<span>Vehicle: {status.info.interestedVehicle}</span>
<span>Status: {status.info.status}</span>
        </div>
      </div>
    ))}
  </div>
);

export default StatusIndicator;
