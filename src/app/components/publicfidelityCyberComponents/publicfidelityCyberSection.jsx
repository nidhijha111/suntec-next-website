import React from "react";
import PublicfidelityCyberForm from "./PublicfidelityCyberForm";
import InsuranceInfoSection from "../otherInsurance/InsuranceInfoSection";
import HowtoBuyTermPolicy from "../termInsuranceComponents/howtoBuyTermPolicy";

const stepsData = [
  {
    id: "step1",
    stepNumber: "Step 1",
    variant: "blue",
    description:
      "Visit suntec’s website www.suntecinsurance.com. Click on the ‘Other Categories’ icon on the Home Page or from the Products tab Public Liability or Fidelity Guarantee Insurance’ or Cyber Insurance.",
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

export default function PublicfidelityCyberSection({ type }) {
  return (
    <div className="other-insurence-section">
      <PublicfidelityCyberForm type={type} />
      <div className="large-margin"></div>
      <InsuranceInfoSection
        imageSrc="./assets/images/Public-Liability-Insurance.jpg"
        alt={"public liabilities insurance image"}
        title={"Public Liability Insurance"}
        subtitle={"What is public liability Insurance?"}
        paragraphs={[
          "Public liability Insurance is a crucial safeguard for businesses, professionals, and organisations against claims made by third parties for bodily injuries, property damage, or accidental fatalities on their premises or as a result of their activities.",
          "This Insurance policy protects the insured by covering legal fees and compensation they are legally obliged to pay if they are deemed responsible for injuries or damages a third party suffers. Whether you run a business, hospital, or clinic, public liability insurance helps protect you financially from unexpected liabilities.",
          "It covers claims formally made in writing against the insured during the policy period, including legal expenses incurred with the insurer’s prior consent—subject to the policy’s indemnity limits, terms, conditions, and exclusions.",
        ]}
        desclaimer=" For the detailed information about the products, please read the product information on the respective Insurer's website and to understand the policy coverage, please read the policy documents carefully."
      />
      <div className="large-margin"></div>
      <InsuranceInfoSection
        imageSrc="./assets/images/Fidelity-Insurance.jpg"
        alt={"Fidelity Guarantee Insurance image"}
        title={"Fidelity Guarantee Insurance"}
        subtitle={"What is fidelity guarantee Insurance?"}
        paragraphs={[
          "Fidelity Insurance, sometimes referred to as a fidelity bond or fidelity guarantee Insurance, is intended to safeguard businesses from financial losses resulting from dishonest behaviour like fraud, theft, or embezzlement by employees during their tenure while performing their job duties. It provides essential risk management and reassurance for business owners. Although infrequent, they can cause substantial financial and reputational harm.",
          "This type of Insurance is especially crucial for positions that involve managing cash, inventory, or sensitive financial information, such as accountants, cashiers, and warehouse personnel. It helps uphold trust, protect the organization’s assets, and reinforce the company’s dedication to ethical practices.",
        ]}
        desclaimer="For the detailed information about the products, please read the product information on the respective Insurer's website and to understand the policy coverage, please read the policy documents carefully."
      />
      <div className="large-margin"></div>
      <InsuranceInfoSection
        imageSrc="./assets/images/Cyber-Insurance.jpg"
        alt={"Cyber Insurance image"}
        title={"Cyber Insurance"}
        subtitle={"What is cyber Insurance?"}
        paragraphs={[
          "In today’s hyper-connected world, cyber threats are a growing concern for businesses of all sizes. The risks are real- and costly, from data breaches and ransomware to phishing scams and cyber extortion. Cyber Insurance is designed to protect against these evolving digital dangers.",
          "Cyber Insurance, often called cybersecurity Insurance, offers financial coverage for a broad array of cyber risks, such as unauthorized access to data, cyber extortion, identity theft, and network damage. Its purpose is to protect individuals and businesses from the financial repercussions of cyber incidents frequently not covered by conventional Insurance policies. ",
          "For companies, the loss or theft of sensitive customer or third-party data can result in severe consequences like reputation harm, regulatory fines, and legal responsibilities. A thorough cyber Insurance policy assists in reducing these risks by covering expenses related to the investigation, legal defence, data recovery, business interruption, and notifying customers. ",
          "Whether you operate a small business or work within a large corporation, cyber Insurance ensures you are more prepared to respond to and recover from cyberattacks. It also facilitates proactive risk management and incident response strategies, reassuring in a digitally connected environment. By investing in cyber liability Insurance, companies safeguard their operations and information and showcase their dedication to data security, regulatory compliance, and customer trust—all essential components in today’s digital-first economy.",
        ]}
        desclaimer="For the detailed information about the products, please read the product information on the respective Insurer's website and to understand the policy coverage, please read the policy documents carefully.
"
      />
      <HowtoBuyTermPolicy
        stepsData={stepsData}
        headingTextFirst="How to buy public liability/fidelity "
        headingTextSecond="guarantee/cyber Insurance?"
        stepimagesrc={"./assets/images/liability-fidelity-step-image.svg"}
      />
      {/* <div className="large-margin"></div> */}
    </div>
  );
}
