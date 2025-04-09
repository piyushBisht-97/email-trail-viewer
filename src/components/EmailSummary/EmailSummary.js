import React from 'react';
import './EmailSummary.css';

const EmailSummary = ({ email, isActive, onClick }) => (
  <div 
    className={`email-summary ${isActive ? 'active' : ''}`}
    onClick={onClick}
  >
    <div className="email-date">{email.date}</div>
    <div className="email-subject">{email.subject}</div>
  </div>
);

export default EmailSummary;
