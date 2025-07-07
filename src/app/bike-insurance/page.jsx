import React from "react";
import CommonheroSection from "../components/commonProductCompoennts/commonheroSection";
import InsuranceInfoSection from "../components/otherInsurance/InsuranceInfoSection";
import FeatureTermInsurance from "../components/termInsuranceComponents/FeatureTermInsurance";
import {
  BikeDocumentsData,
  BikefeatureAndBenifitData,
  bikeStepsData,
  comparisonBikeInsuranceData,
  factorsaffectingInsuranceBikeData,
  howToChooseRightBikeInsuranceData,
  typesofBikeInsurencePlicyData,
  typesOfTwoWheelersData,
  whyBykeInsurencePolityData,
  whyTwoWheelerMandetryData,
} from "./bike-insurence-data";
import DocumentInfoSection from "../components/otherInsurance/documentInfoSection";
import WhybuypassengerCarrying from "../components/commonProductCompoennts/whybuypassengerCarrying";
import ComparisonInsurenceTable from "../components/commonProductCompoennts/comparisonInsurenceTable";
import WhenShouldBuyInsurence from "../components/termInsuranceComponents/whenShouldBuyInsurence";
import HowtoBuyTermPolicy from "../components/termInsuranceComponents/howtoBuyTermPolicy";

export default function page() {
  return (
    <div className="container other-insurence-section">
      <CommonheroSection
        headerTextfirst={"Buy or Renew"}
        headerTextSecond={" Bike Insurance"}
        imagesrc={"/assets/images/Bike-Insurance-hero-image.jpg"}
      />
      <InsuranceInfoSection
        imageSrc="./assets/images/Bike-Insurance-Law-image.jpg"
        alt={"Term Insurance"}
        title={"Bike and Electric Bike Insurance?"}
        subtitle={"What is bike Insurance?"}
        paragraphs={[
          "Bike Insurance, also known as two-wheeler Insurance, is a type of motor Insurance that serves as a formal contract between the bike owner and the Insurance company, offering financial protection against potential losses. Having bike Insurance protects you and your vehicle, whether a scooter, moped, or sports bike, from unexpected occurrences such as accidents, theft, fire, and natural disasters.",
        ]}
        reverse={true}
      />
      <FeatureTermInsurance
        carddata={typesOfTwoWheelersData}
        headingLineOne={"Types of two-wheelers covered"}
        headingLineTwo={"under Insurance in India"}
        headingParaText="Two-wheeler Insurance in India covers a wide range of vehicles, including:"
      />
      <section className="how_we_work_section">
        <div className="main_heading_text blue">
          Is it mandatory to have bike Insurance in India?
        </div>
        <div className="main_heading_text yellow">policy in India?</div>
        <div className="heading_underline_border"></div>
        <div className="heading_para">
          According to Section 146 of the Motor Vehicles Act, 1988, every
          two-wheeler must possess a minimum of third-party Insurance to remain
          compliant with the law. It is advisable to have additional coverage to
          ensure broader protection against risks such as theft, accidents, and
          natural disasters.
        </div>
      </section>
      <div className="large-margin"></div>
      <FeatureTermInsurance
        carddata={whyTwoWheelerMandetryData}
        headingLineOne={"Why is two-wheeler Insurance"}
        headingLineTwo={"mandatory in India?"}
        headingParaText="Two-wheeler Insurance in India covers a wide range of vehicles, including:"
      />
      <DocumentInfoSection
        documentsData={BikefeatureAndBenifitData}
        headingTextFirst={"Key features and benefits of "}
        headingTextSecond={"bike Insurance policy"}
      />
      <FeatureTermInsurance
        carddata={whyBykeInsurencePolityData}
        headingLineOne={"Why do you need to buy"}
        headingLineTwo={" bike Insurance?"}
        headingParaText="Bike Insurance or two-wheeler Insurance in India provides financial protection against physical damage, theft, and third-party liabilities related to your two-wheeler. Here are the key reasons why having a bike Insurance policy is essential."
        paratext="The information provided on our website is intended to offer an overview of Insurance products and services. For complete and detailed information, please refer to the respective insurer’s official website and product documents."
        paraheadingText="Disclaimer"
        descsecondPara="Suntec Insurance Broking Private Limited acts solely as a facilitator. The final decision on claim settlement rests entirely with the respective insurer. For complete details on risk factors, terms and conditions, please refer to the insurer’s sales brochure before making a purchase. Standard terms and conditions apply."
        descmainText="Disclaimer"
      />
      <FeatureTermInsurance
        carddata={typesofBikeInsurencePlicyData}
        headingLineOne="Types of bike Insurance"
        headingLineTwo="policies in India?"
        descmainText="Please note"
        descsecondPara=" For the detailed information on these three types of coverages, please read the policy document available on the respective insurers website."
      />
      <ComparisonInsurenceTable
        headingTextFirst={"Third-Party Bike Insurance vs"}
        headingTextSecond={"Comprehensive Bike Insurance"}
        comparisonData={comparisonBikeInsuranceData}
        paraheadText="Please note"
        paratext=" For the detailed information on these three types of coverages, please read the policy document available on the respective insurers website."
      />
      <div className="large-margin"></div>
      <WhybuypassengerCarrying
        datalist={howToChooseRightBikeInsuranceData}
        headerTextFirst="How to choose the right"
        headerTextSecond="two-wheeler Insurance?"
      />
      <div className="large-margin"></div>
      <WhenShouldBuyInsurence
        benefitsData={factorsaffectingInsuranceBikeData}
        headingLineOne={"What are the factors affecting"}
        headingTextSecond={"two-wheeler Insurance premium?"}
        headingParaText="Here are several factors that affect your bike Insurance premium calculation differently, including:"
      />
      <div className="large-margin"></div>
      <section className="how_we_work_section">
        <div className="main_heading_text blue">
          {" "}
          What is electric bike Insurance?{" "}
        </div>
        <div className="heading_underline_border"></div>
        <div className="heading_para">
          Electric bicycles, called e-bikes, are becoming popular as
          environmentally friendly and quieter substitutes for traditional
          fuel-powered two-wheelers. Instead of using petrol, they operate
          through electric charging, similar to how one charges a smartphone.
        </div>
        <div className="heading_para">
          Although still developing in India, obtaining Insurance for an e-bike
          is similar to insuring a regular two-wheeler. Electric bike Insurance
          offers financial protection against unexpected situations such as
          accidents, theft, fire, or natural disasters. As e-bikes increasingly
          become a favoured option for sustainable transportation, having the
          appropriate Insurance helps protect your vehicle from unexpected
          costs.
        </div>
      </section>
      <HowtoBuyTermPolicy
        stepsData={bikeStepsData}
        headingTextFirst="How to buy a bike Insurance policy?"
        stepimagesrc={"./assets/images/electric-bike-insurence-bye-steps.svg"}
      />
      <DocumentInfoSection
        documentsData={BikeDocumentsData}
        headingTextFirst={"Documents needed to file a "}
        headingTextSecond={"claim for bike Insurance"}
        noteText="Please note : The required documents may vary between insurers. Hence, please check with the respective Insurance company to ensure a successful claim settlement.."
      />
    </div>
  );
}
