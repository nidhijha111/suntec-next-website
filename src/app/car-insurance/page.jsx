import React from "react";
import CommonheroSection from "../components/commonProductCompoennts/commonheroSection";
import InsuranceInfoSection from "../components/otherInsurance/InsuranceInfoSection";
import DocumentInfoSection from "../components/otherInsurance/documentInfoSection";
import HowtoBuyTermPolicy from "../components/termInsuranceComponents/howtoBuyTermPolicy";
const DocumentsData = {
  column1Title:
    "The following documents will be required to file a claim for car Insurance.",
  column1Items: [
    {
      text: "Registration Certificate (RC) with fitness certificate of the car",
      iconColor: "blue",
    },
    { text: "Driving license of driver", iconColor: "yellow" },
    { text: "Aadhaar card", iconColor: "blue" },
    { text: "Copy of FIR", iconColor: "yellow" },
  ],
  column2Title: "",
  column2Items: [
    { text: "Duly filled claim form ", iconColor: "blue" },
    { text: "Car Insurance policy ", iconColor: "yellow" },
    {
      text: "Customer's bank details with a cancelled cheque",
      iconColor: "blue",
    },
  ],
};

const stepsData = [
  {
    id: "step1",
    stepNumber: "Step 1",
    variant: "blue",
    description:
      "Visit suntec’s website www.suntecinsurance.com. Click on the ‘Car Insurance’ icon on the ‘Home Page’ or from the ‘Products tab’ click on Car  Insurance or Electric Bike Insurance",
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
      "Your Car Insurance policy will be mailed to you after paying the premium.",
  },
];
export default function page() {
  return (
    <div className="container other-insurence-section">
      <CommonheroSection
        headerTextfirst={"Buy or Renew"}
        headerTextSecond={"Car Insurance "}
        imagesrc={"/assets/images/Car-Insurance-hero-image.jpg"}
      />
      <InsuranceInfoSection
        imageSrc="./assets/images/Car-Insurance-law-image.jpg"
        alt={"Term Insurance"}
        title={"What is car Insurance?"}
        paragraphs={[
          "Car Insurance protects your vehicle against financial damages from road accidents, theft, fires, natural disasters, and liabilities towards third parties. In India, having third-party car Insurance is a legal requirement. For broader coverage, a comprehensive car Insurance policy encompasses coverage for personal damage, personal accident Insurance, and protection from unforeseen events, ensuring safety, compliance, and peace of mind.",
        ]}
        reverse={true}
      />
      <div className="large-margin"></div>
      <section className="how_we_work_section">
        <div className="main_heading_text blue">
          {" "}
          Is it mandatory to have a car Insurance{" "}
        </div>
        <div className="main_heading_text yellow">policy in India?</div>
        <div className="heading_underline_border"></div>
        <div className="heading_para">
          In India, the Motor Vehicles Act mandates that all vehicles operating
          in public spaces must be covered by motor insurance. At a minimum,
          policyholders are required to have third-party liability insurance,
          even under basic insurance plans.
        </div>
      </section>
      <HowtoBuyTermPolicy
        stepsData={stepsData}
        headingTextFirst="How to buy a car Insurance policy?"
        stepimagesrc={"./assets/images/car-insurance-step-image.svg"}
      />
      <DocumentInfoSection
        documentsData={DocumentsData}
        headingTextFirst={"Documents needed to file a "}
        headingTextSecond={"claim for car Insurance"}
        disclaimerText="The required documents may vary between insurers. Hence, please check with the respective Insurance company to ensure a successful claim settlement."
      />
    </div>
  );
}
