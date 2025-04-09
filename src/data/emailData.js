import crvLogo from '../assets/images/2022-crv.png';
import pilotLogo from '../assets/images/2021-pilot.png';
import accordLogo from '../assets/images/2024-accord.png';

export const leadData = {
  customerName: "Jill Jones",
  customerEmail: "jill.jones@email.com",
  statuses: [
    { 
      type: "Original", 
      info: {
        source: "Network",
        leadIn: "March 1, 2024",
        interestedVehicle: "2024 Honda CR-V",
        status: "Lost"
      }
    },
    { 
      type: "Revival", 
      info: {
        source: "Web in",
        leadIn: "March 15, 2024",
        interestedVehicle: "2024 Honda Accord",
        status: "Sold"
      }
    }
  ],
  emails: [
    {
      date: "March 15, 2024",
      subject: "2024 Honda Accord EX $459/Mo Lease OR 1.9% APR Financing*",
      specialOffer: "Special Offer",
      recipient: "Jill",
      carImage: accordLogo,
      content: {
        intro: 'The 2024 Honda Accord is praised for its refined handling, spacious interior, and advanced tech, making it a standout choice in the midsize sedan category. Our and Driver calls it "an all-around excellent family sedan, highlighting its impressive fuel efficiency and premium design" as key benefits.',
        offer: "Take advantage of the Altoona Honda Special Lease Offer to upgrade to the New 2024 Honda Accord EX: OR Finance As Low As 1.9% APR For 36 Months*."
      },
      details: {
        leaseFor: "$239/Mo*",
        term: "36 Months*",
        dueAtSigning: "$3,799*"
      }
    },
    {
      date: "March 1, 2024",
      subject: "Like-New saving: 2022 Honda CR-V",
      specialOffer: "Like-New Special",
      recipient: "Jill",
      carImage: crvLogo,
      content: {
        intro: "The 2022 Honda CR-V is praised for its excellent fuel efficiency, spacious cabin, and strong safety features, making it one of the top compact SUVs. U.S. News highlights it as a well-rounded vehicle with a smooth ride and impressive cargo capacity, offering a great balance of comfort and practicality in everyday driving.",
        offer: "Check out this Certified used 2022 Honda CR-V EX SUV pick at Altoona Honda to upgrade your ride. Drive away in a meticulously inspected and refurbished vehicle at a fraction of the cost and rest easy with the added security of a TrueCar Q-Certified Warranty."
      },
      details: {
        odometer: "36,045 miles",
        price: "$24,794"
      }
    },
    {
      date: "June 23, 2024",
      subject: "Certified 2021 Honda Pilot Touring",
      specialOffer: "Like-New Special",
      recipient: "Jill",
      carImage: pilotLogo,
      content: {
        intro: "The Honda Pilot offers a spacious cabin, smooth handling, and excellent safety features, making it a standout family SUV. Car and Driver named it as a 'practical choice with great cargo space and comfortable seating,' highlighting its versatility and passenger comfort.",
        offer: "Experience the versatility and comfort of this certified Pilot Touring at an exceptional value. With our comprehensive inspection and warranty, you can drive with confidence."
      },
      details: {
        odometer: "36,754 miles",
        price: "$32,599"
      }
    }
  ]
};