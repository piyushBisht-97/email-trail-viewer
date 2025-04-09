import React from 'react';
import './CustomerHeader.css';

const CustomerHeader = ({ customerName, customerEmail }) => (
  <div className="customer-header">
    <h2>{customerName}</h2>
    <p>{customerEmail}</p>
    <div className="nurturing-history">{customerName}'s Nurturing History</div>
  </div>
);

export default CustomerHeader;
