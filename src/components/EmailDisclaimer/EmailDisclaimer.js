import React from 'react';
import disclaimerBanner from '../../assets/images/disclaimer-banner.svg';
import './EmailDisclaimer.css';

const CONTACT_PHONE = '(814) 524-3427';
const DEALER_ADDRESS = '201 Valley View Blvd Altoona, PA 16602';
const DEALER_WEBSITE = 'www.altoonahonda.com';

const EmailDisclaimer = () => (
  <div className="email-disclaimer">
    <img src={disclaimerBanner} alt="We will buy your vehicle" className="disclaimer-banner" />
    <div className="disclaimer-text">
      <p>* See dealer for details and limitations regarding the warranty.</p>
      <p>
        While great effort is made to ensure the accuracy of the information in this message, 
        errors do occur so please verify information with a customer service rep. This is easily 
        done by calling us at {CONTACT_PHONE} or by visiting us at the dealership.
      </p>
      <p>
        You are receiving this email because you inquired about or purchased a vehicle from 
        Altoona Honda recently or in the past. If you prefer not to receive further emails 
        from us, click the link below to unsubscribe. Alternatively, you can send a written 
        request to the address below. We'll remove you from our list as quickly as possible.
      </p>
      <p>To contact us, please visit {DEALER_WEBSITE} or call {CONTACT_PHONE}.</p>
      <p>
        This email was delivered to you by:<br />
        Altoona Honda<br />
        {DEALER_ADDRESS}
      </p>
      <p className="powered-by">Powered by © myautoIQ | All Rights Reserved</p>
    </div>
  </div>
);

export default EmailDisclaimer;
