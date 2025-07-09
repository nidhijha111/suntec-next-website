import React from "react";
import MarrineAvienceForm from "../commonProductCompoennts/marrineAvienceForm";
import InsuranceInfoSection from "../otherInsurance/InsuranceInfoSection";
import DocumentInfoSection from "../otherInsurance/documentInfoSection";
import TypeofInsuranceInMarine from "../commonProductCompoennts/typeofInsuranceInMarine";
import WhenShouldBuyInsurence from "../termInsuranceComponents/whenShouldBuyInsurence";
import HowtoBuyTermPolicy from "../termInsuranceComponents/howtoBuyTermPolicy";
const DocumentsData = {
  column1Title: "The following are those who need marine insurance: ",
  column1Items: [
    {
      text: "Ship owners",
      iconColor: "blue",
    },
    { text: "Freight forwarders ", iconColor: "yellow" },
    { text: "Businesses or individuals ", iconColor: "blue" },
    { text: "Shipbuilders and repairers", iconColor: "yellow" },
  ],
  column2Title: "",
  column2Items: [
    { text: "Marine contractors ", iconColor: "blue" },
    { text: "Port authorities and terminal operators ", iconColor: "yellow" },
    { text: "Charterers ", iconColor: "blue" },
  ],
};

const typesofMArineInsurance = [
  {
    id: "third-party",
    title: "Freight \n Insurance",
    variant: "blue",
    paragraphs: [
      "Freight Insurance is a type of marine Insurance that covers the potential loss of cargo or freight caused by marine hazards or other transit-related incidents. It may be purchased by the party responsible for the cargo, be it the shipowner, the sender (consignor), or the recipient (consignee). The policy may be tailored for a single shipment, providing specific protection, or it can be broader, giving coverage for numerous shipments over a period of time.",
    ],
  },
  {
    id: "own-damage",
    title: "Hull Insurance",
    variant: "yellow",
    paragraphs: [
      "Hull Insurance covers the vessel's physical structure - including the hull, deck, and machinery - against loss or damage caused by sea perils, collisions, or other insured events. It's ideal for shipowners, mortgagees, or anyone with an insurable interest in the vessel. ",
    ],
  },
  {
    id: "safegard-against",
    title: "Liability Insurance ",
    variant: "blue",
    paragraphs: [
      "Liability Insurance in marine coverage protects the insured from legal liabilities arising from bodily injury or property damage caused to third parties during maritime operations. It safeguards shipowners, charterers, and others involved in maritime activities from financial losses due to accidental or negligent actions.",
    ],
  },
  {
    id: "coverage-accident-related",
    title: "Cargo Insurance",
    variant: "yellow",
    paragraphs: [
      "Marine Cargo Insurance provides coverage for goods in transit, protecting them from risks like damage, loss, or theft during transportation by sea or other modes. It is ideal for importers, exporters, sellers, buyers, or anyone with an insurable interest in the cargo. The coverage can be customised as either a single-use or an extensive open policy encompassing multiple shipments.",
    ],
  },
  {
    id: "stay-covered",
    title: "Protection and Indemnity (P&I) Insurance",
    variant: "blue",
    paragraphs: [
      "Protects shipowners from legal responsibilities related to maritime activities, including damage to third-party property, personal injury, pollution, or collision. Additionally, it offers legal defence and compensation for events like oil spills, environmental harm, or injuries to crew members and passengers.",
      "",
    ],
  },
];
const optionalMarineInsurenceType = [
  {
    id: "third-party",
    title: "Floating \n  policy ",
    variant: "blue",
    paragraphs: [
      "A floating marine Insurance policy covers multiple shipments under one contract without needing to specify individual shipment details upfront. Ideal for frequent shippers, it offers continuous protection and saves time by eliminating the necessity for separate policies for each shipment.",
    ],
  },
  {
    id: "own-damage",
    title: "Voyage policy",
    variant: "yellow",
    paragraphs: [
      "A voyage policy covers goods or vessels for a single, specified trip from one location to another. The coverage ends once the voyage is complete. Ideal for one-time shipments, it requires a new policy for each journey, unlike an open policy that offers ongoing protection. ",
    ],
  },
  {
    id: "safegard-against",
    title: "Fleet policy ",
    variant: "blue",
    paragraphs: [
      "A fleet policy provides marine Insurance coverage for multiple vessels owned by the same entity under a single plan.",
    ],
  },
  {
    id: "coverage-accident-related",
    title: "Wager policy",
    variant: "yellow",
    paragraphs: [
      "These policies are rare, lack legal enforceability, and generally only address substantial damages without a predetermined insured amount.",
    ],
  },
  {
    id: "stay-covered",
    title: "Port risk policy",
    variant: "blue",
    paragraphs: [
      "This policy offers coverage for a vessel while it is stationed at a port. ",
      "",
    ],
  },
];

const howdoesaviationInsurance = [
  {
    number: "1",
    title: <>Hull Insurance </>,
    description:
      "This policy covers physical damage to the aircraft (hull) and legal liability arising from accidents causing injury or property damage to third parties.",
    variant: "yellow",
  },
  {
    number: "2",
    title: <>Passenger liability</>,
    description:
      "Passenger Liability Insurance protects airlines against legal claims arising from passenger injury, death, or baggage loss during air travel. It ensures compensation for affected passengers and helps the airline meet its legal obligations.",
    variant: "blue",
  },
  {
    number: "3",
    title: (
      <>
        Liability
        <br />
        Insurance
      </>
    ),
    description:
      "Offers protection for personal injury and property damage caused to third parties.",
    variant: "yellow",
  },
  {
    number: "4",
    title: <>Loss of license Insurance</>,
    description:
      "Loss of License Insurance offers financial coverage for pilots and crew members whose licenses may be suspended or revoked due to health issues or disabilities. It addresses the loss of income from a temporary or permanent inability to fly caused by sickness or injury.",
    variant: "blue",
  },
  {
    number: "5",
    title: (
      <>
        Ground <br /> risk coverage
      </>
    ),
    description:
      "Offers safeguards against damage or loss to an aircraft when it is stationary and not in use. This includes risks such as fire, theft, vandalism, or natural disasters while the aircraft is parked or undergoing maintenance. ",
    variant: "yellow",
  },
  {
    number: "6",
    title: (
      <>
        Crew <br />
        coverage
      </>
    ),
    description: "Coverage for pilots and crew in case of injury or death.",
    variant: "blue",
  },
  {
    number: "7",
    title: (
      <>
        Aircraft war and <br />
        peril Insurance
      </>
    ),
    description:
      "This policy provides protection against losses resulting from war, terrorism, hijacking, or other listed risks.specified perils.",
    variant: "yellow",
  },
];

const stepsData = [
  {
    id: "step1",
    stepNumber: "Step 1",
    variant: "blue",
    description:
      "Visit suntec’s website www.suntecinsurance.com. Click on the ‘Other Categories’ icon on the Home Page or from the Products tab ‘Marine Insurance’ or Aviation Insurance.",
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
export default function MarineAviationSection({ type }) {
  return (
    <div className="container other-insurence-section two-type-categories">
      <MarrineAvienceForm type={type} />
      <div className="large-margin"></div>
      <InsuranceInfoSection
        imageSrc="./assets/images/Marine-Insurance-image.jpg"
        alt={"Health Insurance  image"}
        title={"Marine and Aviation Insurance"}
        subtitle={"What is marine Insurance?"}
        paragraphs={[
          "Marine Insurance is a general Insurance policy that provides financial protection against damage or loss to ships, cargo, and vessels during sea, air, road, or rail transit. It offers financial protection to businesses involved in domestic and international trade by addressing risks such as accidents, theft, natural disasters, and other unexpected incidents.",
          "In India, marine Insurance is governed by the Marine Insurance Act of 1963 and regulated by the Insurance Regulatory and Development Authority of India (IRDAI). Marine Insurance policy is essential for managing risks and facilitating seamless logistics for enterprises of all sizes.",
          "This Insurance typically includes cargo Insurance (for goods in transit) and hull insurance (for damage to vessels and equipment). It ensures your shipments are safeguarded during every journey stage—from loading and transportation to delivery.",
        ]}
      />
      <div className="large-margin"></div>{" "}
      <DocumentInfoSection
        documentsData={DocumentsData}
        headingTextFirst={"Who needs marine Insurance?"}
      />
      <TypeofInsuranceInMarine
        carddata={typesofMArineInsurance}
        headingLineOne={"What are the types of"}
        headingLineTwo={" marine Insurance?"}
        descmainText="Please note"
        optionalMarineInsurenceType={optionalMarineInsurenceType}
        descsecondPara="For the detailed information on the policies, please read the policy document available on the respective insurers website."
      />
      <InsuranceInfoSection
        imageSrc="./assets/images/Aviation-Insurance-image.jpg"
        alt={"Health Insurance  image"}
        title={"Aviation Insurance"}
        subtitle={"Aviation Insurance in India"}
        paragraphs={[
          "The aviation sector in India is experiencing rapid growth, with an increasing number of private aircraft, commercial airlines, and chartered helicopters taking to the skies.",
          "However, operating an aircraft entails considerable risks, including accidents, damage to the plane, and liability to third parties.",
          "Insurance for Airlines is crucial for mitigating these risks and ensuring financial stability. Aviation Insurance is specialised coverage that addresses the distinct dangers of owning and operating an aircraft. It protects against financial setbacks from accidents, mechanical failures, or legal responsibilities.",
        ]}
        reverse={true}
      />
      <div className="large-margin"></div>
      <WhenShouldBuyInsurence
        benefitsData={howdoesaviationInsurance}
        headingLineOne={"What does aviation"}
        headingTextSecond={"Insurance cover?"}
        headingParaText="A typical aviation insurance policy in India can include the following coverage options:"
        description="Please note : For the detailed information on these types of coverages, please read the policy document available on the respective insurers website."
      />
      <HowtoBuyTermPolicy
        stepsData={stepsData}
        headingTextFirst="How to buy marine or aviation Insurance?"
        stepimagesrc={
          "./assets/images/how-to-buy-marine-insurence-step-image.svg"
        }
      />
      <div className="remove-margin"></div>
    </div>
  );
}
