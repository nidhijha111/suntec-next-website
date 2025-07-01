import React from "react";
import InsurenceForm from "../components/otherInsurance/InsurenceForm";
import DocumentInfoSection from "../components/otherInsurance/documentInfoSection";

const documentsData = {
  column1Title:
    "There are the following types of business Insurance policies. ",
  column1Items: [
    {
      text: "Liability Insurance policies ",
      iconColor: "blue",
    },
    { text: "Property Insurance policies", iconColor: "yellow" },
    { text: "Electronic equipment Insurance ", iconColor: "blue" },
    { text: "Fidelity guarantee Insurance ", iconColor: "yellow" },
  ],
  column2Title: "",
  column2Items: [
    { text: "Money Insurance", iconColor: "blue" },
    { text: "Commercial vehicle Insurance", iconColor: "yellow" },
    { text: "Worker’s compensation Insurance", iconColor: "blue" },
    { text: "Group health Insurance policies", iconColor: "yellow" },
  ],
};
export default function page() {
  return (
    <div className="container">
      <InsurenceForm type="Business Insurance" />
      <div className="insurance-info-text-image-wrapper">
        <div className="info-text">
          <div className="main_heading_text">
            <div className="white">Business Insurance</div>
          </div>
          <div className="sub-heading-text">What is business Insurance?</div>
          <p>
            Business Insurance offers financial safeguards for companies against
            various risks, including property damage, legal liabilities,
            employee incidents, theft, and unexpected interruptions. It plays a
            crucial role in maintaining business operations by mitigating losses
            that could adversely affect finances or operations. Additionally, it
            promotes employee safety by providing coverage for medical
            emergencies, accidents, or life-related risks, emphasising that
            employees are among a company's most valuable assets. For a new
            venture or a well-established business, business Insurance ensures
            stability, facilitates growth, and manages risks.
          </p>
        </div>
        <div className="info-image">
          <img
            className="responsive-img"
            src={"./assets/images/Business Insurance.jpg"}
            alt="bussiness-insurence-image"
          />
        </div>
      </div>
      <DocumentInfoSection
        documentsData={documentsData}
        headingTextFirst={"Different types of Insurance"}
        headingTextSecond={" your business needs"}
        disclaimerText={
          "For the detailed information about the products, please read the product information on the respective Insurer's website and to understand the policy coverage, please read the policy documents carefully."
        }
      />
    </div>
  );
}
