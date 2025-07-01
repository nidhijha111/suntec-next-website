import React from 'react'
import InsurenceForm from '../components/otherInsurance/InsurenceForm'
import DocumentInfoSection from '../components/otherInsurance/documentInfoSection';
const documentsData = {
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
export default function page() {
  return (
      <div className="container">
        <InsurenceForm type="Home Insurance" />
        <div className="insurance-info-text-image-wrapper">
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
          <div className="info-image">
            <img
              className="responsive-img"
              src={"./assets/images/Home Insurance.jpg"}
              alt="bussiness-insurence-image"
            />
          </div>
        </div>
        <DocumentInfoSection
          documentsData={documentsData}
          headingTextFirst={"Types of home"}
          headingTextSecond={"Insurance policies"}
          disclaimerText="For the detailed information about the products, please
          read the product information on the respective Insurer's website and
          to understand the policy coverage, please read the policy documents
          carefully."
        />
      </div>
  )
}
