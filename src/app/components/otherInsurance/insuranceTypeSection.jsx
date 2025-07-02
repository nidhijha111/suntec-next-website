import React from "react";
import InsurenceForm from "./InsurenceForm";
import DocumentInfoSection from "./documentInfoSection";
const homeDocumentsData = {
  column1Title: "There are the following types of home Insurance policies. ",
  column1Items: [
    {
      text: "Standard fire and special perils policy",
      iconColor: "blue",
    },
    { text: "Burglary and theft", iconColor: "yellow" },
    { text: "Landlord Insurance", iconColor: "blue" },
    { text: "Tenants Insurance", iconColor: "yellow" },
  ],
  column2Title: "",
  column2Items: [
    { text: "Public liability coverage", iconColor: "blue" },
    { text: "Personal accident", iconColor: "yellow" },
    { text: "Contents Insurance", iconColor: "blue" },
    { text: "Bharat griha raksha", iconColor: "yellow" },
  ],
};
const bussinessdocumentsData = {
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
const travelDocumentsData = {
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
export default function InsuranceTypeSection({ type }) {
  return (
    <div>
      <InsurenceForm type={type} />
      <div className="insurance-info-text-image-wrapper">
        <div className="info-image">
          <img
            className="responsive-img"
            src={"./assets/images/Home Insurance.jpg"}
            alt="bussiness-insurence-image"
          />
        </div>
        <div className="info-text">
          <div className="main_heading_text">
            <div className="white">Home Insurance</div>
          </div>
          <div className="sub-heading-text">What is home Insurance?</div>
          <p>
            Home Insurance is a financial safety net that protects your home and
            possessions from unexpected damages caused by natural disasters like
            floods, storms, or earthquakes, as well incidents such as fire,
            theft.
          </p>
          <p>
            This policy provides compensation for losses in accordance with the
            policy terms through a contract between the homeowner and the
            insurer, assuming premiums are paid on time. Although home Insurance
            is not obligatory in India, it is highly advisable to safeguard your
            property and financial investment.
          </p>
          <p>
            A typical home Insurance policy generally includes coverage for
            structural damage to your residence, damage to the interior, and
            valuable possessions. It may also provide liability protection for
            injuries on your property. It offers peace of mind and financial
            security during unexpected occurrences.
          </p>
        </div>
      </div>
      <DocumentInfoSection
        documentsData={homeDocumentsData}
        headingTextFirst={"Types of home"}
        headingTextSecond={"Insurance policies"}
        disclaimerText="For the detailed information about the products, please
          read the product information on the respective Insurer's website and
          to understand the policy coverage, please read the policy documents
          carefully."
      />
      <div className="insurance-info-text-image-wrapper">
        <div className="info-image">
          <img
            className="responsive-img"
            src={"./assets/images/Business Insurance.jpg"}
            alt="bussiness-insurence-image"
          />
        </div>
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
      </div>
      <DocumentInfoSection
        documentsData={bussinessdocumentsData}
        headingTextFirst={"Different types of Insurance"}
        headingTextSecond={" your business needs"}
        disclaimerText={
          "For the detailed information about the products, please read the product information on the respective Insurer's website and to understand the policy coverage, please read the policy documents carefully."
        }
      />
      <div className="insurance-info-text-image-wrapper">
        <div className="info-image">
          <img
            className="responsive-img"
            src={"./assets/images/Travel Insurance.jpg"}
            alt="bussiness-insurence-image"
          />
        </div>
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
      </div>
      <DocumentInfoSection
        documentsData={travelDocumentsData}
        headingTextFirst={"Types of travel "}
        headingTextSecond={"Insurance plans"}
        disclaimerText={
          "For the detailed information about the products, please read the product information on the respective Insurer's website and to understand the policy coverage, please read the policy documents carefully."
        }
      />
    </div>
  );
}
