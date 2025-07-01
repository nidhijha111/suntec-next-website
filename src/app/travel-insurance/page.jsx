import React from "react";
import InsurenceForm from "../components/otherInsurance/InsurenceForm";
import DocumentInfoSection from "../components/otherInsurance/documentInfoSection";
const documentsData = {
  column1Title: "There are the following types of travel Insurance Plans. ",
  column1Items: [
    {
      text: "International travel Insurance",
      iconColor: "blue",
    },
    { text: "Domestic travel Insurance", iconColor: "yellow" },
    { text: "Student travel Insurance", iconColor: "blue" },
    { text: "Family travel Insurance ", iconColor: "yellow" },
  ],
  column2Title: "",
  column2Items: [
    { text: "Multi-trip travel Insurance ", iconColor: "blue" },
    { text: "Single-trip travel Insurance", iconColor: "yellow" },
    { text: "Senior citizen travel Insurance", iconColor: "blue" },
    { text: "Visa compliant schengen travel Insurance ", iconColor: "yellow" },
  ],
};
export default function page() {
  return (
    <div className="container">
      <InsurenceForm type="Travel Insurance" />
      <div className="insurance-info-text-image-wrapper">
        <div className="info-text">
          <div className="main_heading_text">
            <div className="white">Travel Insurance</div>
          </div>
          <div className="sub-heading-text">What is travel Insurance?</div>
          <p>
            Travel Insurance is a protective plan that covers unexpected
            expenses during your domestic or international trip. It safeguards
            you against medical emergencies, trip cancellations, lost baggage,
            passport loss, and other travel-related risks. Whether you travel
            for leisure, business, or education, travel Insurance provides peace
            of mind by covering hospitalisation, flight delays, theft, and more.
            Numerous countries even mandate valid travel insurance to obtain a
            visa.
          </p>
          <p>
            By selecting the appropriate plan, you can tailor your coverage to
            meet your destination and travel requirements, allowing you to enjoy
            your journey without financial concerns.
          </p>
        </div>
        <div className="info-image">
          <img
            className="responsive-img"
            src={"./assets/images/Travel Insurance.jpg"}
            alt="bussiness-insurence-image"
          />
        </div>
      </div>
      <DocumentInfoSection
        documentsData={documentsData}
        headingTextFirst={"Types of travel "}
        headingTextSecond={" Insurance plans"}
        disclaimerText={
          "For the detailed information about the products, please read the product information on the respective Insurer's website and to understand the policy coverage, please read the policy documents carefully."
        }
      />
    </div>
  );
}
