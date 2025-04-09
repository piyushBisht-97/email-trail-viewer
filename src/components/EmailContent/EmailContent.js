import React from 'react';
import './EmailContent.css';
import EmailDetails from '../EmailDetails/EmailDetails';
import dealerLogo from '../../assets/images/honda-dealer-logo.svg';
import disclaimerBanner from '../../assets/images/disclaimer-banner.png';

const EmailContent = ({ email }) => (
  <div className="email-full-content">
    <div className="email-header">
      <img src={dealerLogo} alt="Honda Logo" />
      <span>201 Valley View Blvd Altoona, PA 16602</span>
    </div>

    <div className="special-offer">{email.specialOffer}</div>
    
    <h1 className="email-title">
      {email.subject} at <a href="https://www.altoonahonda.com">Altoona Honda</a>
    </h1>

    <div className="content">
      <p>Hello {email.recipient},</p>
      <p>{email.content.intro}</p>
      <p>{email.content.offer}</p>
    </div>

    <div className="car-image">
      <img src={email.carImage} alt={email.subject} />
    </div>

    <EmailDetails email={email} />

    <div className="peace-of-mind">
      <h3>Peace of Mind <span>and lower cost of ownership</span></h3>
      <p>Keep your new Honda running smoothly with the Honda Service Pass complimentary maintenance pass only. Honda Genuine Parts and service mean factory-scheduled maintenance over the first two years or 24,000 miles, including:</p>
      <ul>
        <li>Oil Changes</li>
        <li>Tire Rotation</li>
        <li>Multi-Point Inspection</li>
      </ul>
      <p>You'll receive a handy Maintenance Minder™ alert in your vehicle when it's time to schedule service, which you can do through the HondaLink® smartphone app.*</p>
      <p>Honda Service Pass is designed to simplify caring for your vehicle so you can continue taking care of you.</p>
      <p>Begin your Honda journey by viewing our inventory, valuing your trade-in, or applying for financing using the links below.</p>
    </div>

    <div className="cta-buttons">
      <button>See Inventory</button>
      <button>Value Trade</button>
      <button>Apply for Financing</button>
    </div>

    <div className="disclaimer-text">
      <img src={disclaimerBanner} alt="We will buy your vehicle" />
      <p>For a more personalized experience, visit our dealership. We look forward to seeing you soon.</p>
      <p>Altoona Honda</p>
      <p>*Disclaimer for the special offers and financing options for the example.</p>
      <p>To opt-out, or share info about who should be sent to call (814) 942-5427</p>
      <p>Altoona Honda<br />201 Valley View Blvd<br />Altoona, PA 16602</p>
      <p>Powered by E-Proctivity. All Rights Reserved</p>
    </div>
  </div>
);

export default EmailContent;
