import React from 'react';
import dealerLogo from '../../assets/images/honda-dealer-logo.svg';
import './EmailHeader.css';

const EmailHeader = () => (
  <div className="email-header">
    <div className="dealer-info">
      <img src={dealerLogo} alt="Honda Logo" className="dealer-logo" />
      <span>201 Valley View Blvd Altoona, PA 16602</span>
    </div>
  </div>
);

export default EmailHeader;
