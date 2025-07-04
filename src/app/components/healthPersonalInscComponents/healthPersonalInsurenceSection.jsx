import React from "react";
import HealthPersonalInsurenceForm from "./healthPersonalInsurenceForm";
import InsuranceInfoSection from "../otherInsurance/InsuranceInfoSection";
import DocumentInfoSection from "../otherInsurance/documentInfoSection";
import HowtoBuyTermPolicy from "../termInsuranceComponents/howtoBuyTermPolicy";
const DocumentsData = {
  column1Title: "There are the following types of health Insurance plans. ",
  column1Items: [
    {
      text: "Family health Insurance",
      iconColor: "blue",
    },
    { text: "Individual health Insurance", iconColor: "yellow" },
    { text: "Super top-up health Insurance", iconColor: "blue" },
  ],
  column2Title: "",
  column2Items: [
    { text: "Personal health Insurance", iconColor: "blue" },
    { text: "Essential health protector", iconColor: "yellow" },
    { text: "Accidental hospitalisation ", iconColor: "blue" },
  ],
};


const stepsData = [
  {
    id: "step1",
    stepNumber: "Step 1",
    variant: "blue",
    description:
      "Visit suntec’s website www.suntecinsurance.com. Click on the ‘Other Categories’ icon on the Home Page or from the Products tab ‘Health Insurance’ or Personal Accident Insurance.",
  },
  {
    id: "step2",
    stepNumber: "Step 2",
    variant: "yellow",
    description: "Enter your name, mobile number and email.",
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
      "Your Insurance policy will be mailed to you after paying the premium.",
  },
];
export default function HealthPersonalInsurenceSection({ type }) {
  return (
    <div className="container">
      <div className="other-insurence-section two-type-categories">
        <HealthPersonalInsurenceForm type={type} />
        <div className="large-margin"></div>
        <InsuranceInfoSection
          imageSrc="./assets/images/Health-Insurance.jpg"
          alt={"Health Insurance  image"}
          title={"Health Insurance"}
          subtitle={"What is health Insurance?"}
          paragraphs={[
            "Health Insurance is a type of general Insurance that protects you financially during medical emergencies caused by illness, disease, or accidents.It includes coverage for expenses like hospitalisation, surgeries, pre- and post-treatment care, maternity services, critical illnesses, mental health, and annual health assessments, based on your policy.",
            "By paying a regular premium, you secure coverage for a wide range of treatments and procedures. Health Insurance not only safeguards your health but also your savings, making it a smart investment for long-term financial security.",
          ]}
        />
        <div className="large-margin"></div>
        <DocumentInfoSection
          documentsData={DocumentsData}
          headingTextFirst={"Health Insurance plans"}
        />
        <div className="large-margin"></div>
        <section className="how_we_work_section">
          <div className="main_heading_text blue"> Group Health Insurance</div>
          <div className="heading_underline_border"></div>
          <div className="heading_para">
            Group health Insurance refers to a medical Insurance plan that
            provides coverage for a specific group, typically the employees of a
            business or members of an organization. These plans deliver
            healthcare benefits at reduced premiums since the collective risk is
            shared among several policyholders. Group health Insurance
            guarantees cost-effective medical coverage for employees and
            encourages well-being and financial stability in the workplace.
          </div>
        </section>
        <p className="disclaimer-note">
          Disclaimer : For the detailed information about the products, please
          read the product information on the respective Insurer's website and
          to understand the policy coverage, please read the policy documents
          carefully.
        </p>
        <div className="large-margin"></div>
        <InsuranceInfoSection
        reverse={true}
          imageSrc="./assets/images/Personal-Accident-Insurance.jpg"
          alt={"Personal Accident Insurance image"}
          title={"Personal Accident Insurance"}
          subtitle={"What is personal accident Insurance?"}
          paragraphs={[
            "Personal accident Insurance provides essential financial coverage in the case of accidental injuries, disabilities, or death. It is a fixed-benefit health Insurance policy that delivers a lump sum payout to either the insured individual or their designated nominee following accidental death or disability, in accordance with the terms of the policy. ",
            "There are two categories of personal accident plans: Individual Personal Accident Insurance: <br/> This plan offers financial aid to individuals and their families during unexpected accidents or injuries.",
            "Group Personal Accident Insurance:<br/> This option is tailored for employers looking to safeguard their employees and offers economical and comprehensive accident coverage for the workforce. With rapid policy issuance and reasonable premiums, personal accident Insurance ensures peace of mind and vital protection against the unpredictabilities of life.",
          ]}
          desclaimer="For the detailed information about the products, please read the product information on the respective Insurer's website and to understand the policy coverage, please read the policy documents carefully."
        />
        <HowtoBuyTermPolicy
          stepsData={stepsData}
          headingTextFirst="How to buy health or"
          headingTextSecond="personal accident Insurance?"
          stepimagesrc={"./assets/images/personal-accident-health-step-image.svg"}
        />
      </div>
    </div>
  );
}
