import React, { useState } from 'react';
import './EmailTrail.css';
import { leadData } from '../data/emailData';
import StatusIndicator from './StatusIndicator/StatusIndicator';
import CustomerHeader from './CustomerHeader/CustomerHeader';
import EmailSummary from './EmailSummary/EmailSummary';
import EmailContent from './EmailContent/EmailContent';

const EmailTrail = () => {
  const [selectedEmail, setSelectedEmail] = useState(0);

  const handleEmailClick = (index) => {
    setSelectedEmail(selectedEmail === index ? null : index);
  };

  return (
    <div className="lead-details">
      <CustomerHeader 
        customerName={leadData.customerName}
        customerEmail={leadData.customerEmail}
      />
      
      <StatusIndicator statuses={leadData.statuses} />

      <div className="email-list">
        {leadData.emails.map((email, index) => (
          <div key={index} className="email-list-item">
            <EmailSummary 
              email={email}
              isActive={selectedEmail === index}
              onClick={() => handleEmailClick(index)}
            />
            {selectedEmail === index && <EmailContent email={email} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmailTrail;
