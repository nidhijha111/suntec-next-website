import React from "react";
import CommonheroSection from "../components/commonProductCompoennts/commonheroSection";
import InsuranceInfoSection from "../components/otherInsurance/InsuranceInfoSection";
import PassengerCarryingComp from "../components/commonProductCompoennts/passengerCarryingComp";
import WhybuypassengerCarrying from "../components/commonProductCompoennts/whybuypassengerCarrying";
import FeatureTermInsurance from "../components/termInsuranceComponents/FeatureTermInsurance";
import HowtoBuyTermPolicy from "../components/termInsuranceComponents/howtoBuyTermPolicy";
import DocumentInfoSection from "../components/otherInsurance/documentInfoSection";

const typesofPassengerData = [
  {
    number: "1",
    title: <>Buses/Mini Buses</>,
    description:
      "A commercial passenger-carrying vehicle Insurance policy covers buses, including school buses, private tour buses, minibuses, and other vehicles used for transporting passengers.",
    variant: "yellow",
  },
  {
    number: "2",
    title: <>Auto rickshaws</>,
    description:
      "A commercial passenger-carrying vehicle Insurance plan covers all auto rickshaws used for transporting commuters between destinations. ",
    variant: "blue",
  },
  {
    number: "3",
    title: <>Taxis, cabs and commercial cars</>,
    description:
      "Taxis, commercial cars, and other private cars used for commercial public transport can be insured under a passenger-carrying vehicle Insurance policy.",
    variant: "yellow",
  },
  {
    number: "4",
    title: <>Vans</>,
    description:
      "This Insurance plan can cover vehicles like school vans and those used for private tours as a commercial service.",
    variant: "blue",
  },
];

const WhybuypassengerCarryingData = [
  {
    id: "idv",
    title: (
      <>
        Coverage against <br /> unexpected losses
      </>
    ),
    variant: "blue",
    description:
      "Passenger-carrying vehicle Insurance compensates for unpredictable losses in the event of an accident, natural disaster, or fire, safeguarding your business from potential liability.",
  },
  {
    id: "support",
    title: (
      <>
        Comply with <br /> the law
      </>
    ),
    variant: "yellow",
    description:
      "As per the Motor Vehicles Act, all vehicles, including those used for commercial purposes, must have third-party Insurance to safeguard against financial losses and damages inflicted upon any third party, including individuals, property, or other vehicles.",
  },
  {
    id: "addons",
    title: (
      <>
        Passenger <br /> protectiont
      </>
    ),
    variant: "blue",
    description:
      "When purchasing passenger vehicle Insurance, one can opt to cover for their passengers, demonstrating responsibility and care for everyone connected to their business.",
  },
  {
    id: "csr",
    title: (
      <>
        Covers for <br />
        owner-driver
      </>
    ),
    variant: "yellow",
    description:
      "Insurance for passenger-carrying vehicles not only safeguards your commercial vehicle but also protects the owner-driver.",
  },
];

const typesofcommercialpassengerCarryingData = [
  {
    id: "third-party",
    title: "Third-party \n Insurance coverage",
    variant: "blue",
    paragraphs: [
      "Third-party Insurance is mandatory under Section 146 of the Motor Vehicles Act, 1988. This type of passenger-carrying vehicle Insurance protects against potential losses from liabilities incurred by third parties.",
    ],
  },
  {
    id: "own-damage",
    title: "Own damage \n coverage",
    variant: "yellow",
    paragraphs: [
      "Own Damage (OD) covers damages resulting from accidents, theft, fire, natural calamities and man-made disasters.",
    ],
  },
  {
    id: "comprehensive",
    title: "Comprehensive\n coverage",
    variant: "blue",
    paragraphs: [
      "A complete Insurance policy for passenger-carrying vehicles protects your commercial vehicle from damages resulting from accidents, natural disasters, theft, or other unexpected incidents. This type of policy includes third-party liability and own-damage cover that protects against costs arising from damage to your vehicle.",
    ],
  },
];

const benifitDataList = [
  {
    id: "third-party",
    title: "Coverage for own  damage and third-party  liabilities",
    variant: "blue",
    paragraphs: [
      "A comprehensive passenger vehicle Insurance policy covers damage to one's vehicle and liabilities arising if a third party is involved.",
    ],
  },
  {
    id: "own-damage",
    title: "Insurance for losses incurred in an accident",
    variant: "yellow",
    paragraphs: [
      "In the event of an accident, the Insurance will cover the cost of expensive repairs, protecting you from paying out of pocket.",
    ],
  },
  {
    id: "comprehensive",
    title: "Go cashless ",
    variant: "blue",
    paragraphs: [
      "You can benefit from a cashless claim settlement by taking your vehicle to a network garage affiliated with your Insurance provider.",
    ],
  },
  {
    id: "competitive-pricing",
    title: "Competitive\n pricing  ",
    variant: "yellow",
    paragraphs: [
      "With numerous Insurance companies offering coverage for passenger vehicles, it's essential to compare different plans and select the one that best suits your needs.",
    ],
  },
  {
    id: "add-on-covers",
    title: "Add-on \n covers  ",
    variant: "blue",
    paragraphs: [
      "Select from various add-on covers to enhance your policy and ensure greater protection for your vehicle.",
    ],
  },
];

const stepsData = [
  {
    id: "step1",
    stepNumber: "Step 1",
    variant: "blue",
    description:
      "Visit suntec’s website www.suntecinsurance.com. Click on the ‘Commercial Vehicle’ icon on the Home Page or from the ‘Products’ tab.",
  },
  {
    id: "step2",
    stepNumber: "Step 2",
    variant: "yellow",
    description: "Enter your registration number, mobile number and email.",
  },
  {
    id: "step3",
    stepNumber: "Step 3",
    variant: "blue",
    description:
      "Our Insurance advisor will provide all the necessary information to help you choose the policy that best suits your needs.",
  },
  {
    id: "step4",
    stepNumber: "Step 4",
    variant: "yellow",
    description: "After choosing the policy, make the premium payment.",
  },
  {
    id: "step5",
    stepNumber: "Step 5",
    variant: "blue",
    description:
      "Your passenger-carrying vehicle Insurance policy will be mailed to you after paying the premium.",
  },
];

const DocumentsData = {
  column1Title:
    "The following documents will be required to file a claim for passenger-carrying vehicle Insurance. ",
  column1Items: [
    {
      text: "Registration Certificate (RC) of the vehicle",
      iconColor: "blue",
    },
    { text: "Driving license of driver", iconColor: "yellow" },
    { text: "Aadhaar card", iconColor: "blue" },
    { text: "Fitness certificate of the vehicle", iconColor: "yellow" },
    { text: "Copy of FIR", iconColor: "blue" },
  ],
  column2Title: "",
  column2Items: [
    { text: "Duly filled claim form ", iconColor: "blue" },
    { text: "Tax paid receipt", iconColor: "yellow" },
    {
      text: "Commercial Vehicle Insurance Policy Certificate",
      iconColor: "blue",
    },
    {
      text: "No - trace certificate issued by the police if the vehicle is stolen",
      iconColor: "yellow",
    },
  ],
};
export default function page() {
  return (
    <div className="container other-insurence-section">
      <CommonheroSection
        headerTextfirst={"Buy or Renew"}
        headerTextSecond={"Passenger-carrying "}
        imagesrc={"/assets/images/Passenger carrying vehicle Insurance.jpg"}
        headerTextThird={"vehicle Insurance"}
      />
      <InsuranceInfoSection
        imageSrc="./assets/images/Passenger carrying vehicle Insurance-Law.jpg"
        alt={"Term Insurance"}
        title={"Passenger-carrying vehicle Insurance"}
        paragraphs={[
          "Passenger-carrying vehicle Insurance is a commercial vehicle Insurance policy that protects vehicles commercially used to transport passengers from one place to another. It covers passenger vehicles from potential losses resulting from accidents, natural calamities, and various other unforeseen events.",
        ]}
        reverse={true}
      />
      <div className="large-margin"></div>
      <section className="how_we_work_section">
        <div className="main_heading_text blue"> Is passenger-carrying </div>
        <div className="main_heading_text yellow">
          vehicle mandatory in India?
        </div>
        <div className="heading_underline_border"></div>
        <div className="heading_para">
          The Indian Motor Vehicles Act, 1988 mandates that all vehicles
          including passenger-carrying vehicles must be insured with third-party
          motor Insurance to prevent losses and damages to third-party
          vehicles/owners/property.
        </div>
      </section>
      <div className="large-margin"></div>
      <PassengerCarryingComp
        typesofPassengerData={typesofPassengerData}
        paratext="Passenger-carrying vehicle Insurance typically covers a wide range of commercial vehicles used to transport people, including:"
        headerTextFirst="Types of passenger-carrying"
        headerTextSecond="vehicles covered"
      />
      <div className="large-margin"></div>

      <FeatureTermInsurance
        carddata={typesofcommercialpassengerCarryingData}
        headingLineOne={"What are the types of commercial "}
        headingLineTwo={" passenger-carrying vehicle Insurance?"}
        paraheadingText="Please note"
        paratext="For the detailed information on these three types of coverages, please read the policy document available on the respective insurers website."
      />
      <WhybuypassengerCarrying
        datalist={WhybuypassengerCarryingData}
        headerTextFirst="Why buy passenger-carrying"
        headerTextSecond=" vehicle Insurance"
      />
      <FeatureTermInsurance
        carddata={benifitDataList}
        headingLineOne={"What are the benefits of buying commercial"}
        headingLineTwo={"passenger-carrying vehicle Insurance?"}
        paraheadingText="Disclaimer"
        paratext="The information provided on our website is intended to offer an overview of Insurance products and services. For complete and detailed information, please refer to the respective insurer’s official website and product documents."
        descsecondPara="Suntec Insurance Broking Private Limited acts solely as a facilitator. The final decision on claim settlement rests entirely with the respective insurer. For complete details on risk factors, terms and conditions, please refer to the insurer’s sales brochure before making a purchase. Standard terms and conditions apply."
        descmainText="Disclaimer"
      />
      <div className="remove-margin"></div>
      <HowtoBuyTermPolicy
        stepsData={stepsData}
        headingTextFirst="How to buy a passenger-carrying"
        headingTextSecond="vehicle Insurance policy?"
        stepimagesrc={"./assets/images/passenger-carrying-step-image.svg"}
      />
      <DocumentInfoSection
        documentsData={DocumentsData}
        headingTextFirst={"Documents needed to"}
        headingTextSecond={"file a claim"}
        disclaimerText="The required documents may vary between insurers. Hence, please check with the respective Insurance company to ensure a successful claim settlement."
      />
    </div>
  );
}
