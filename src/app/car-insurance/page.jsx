import CommonheroSection from "../components/commonProductCompoennts/commonheroSection";
import InsuranceInfoSection from "../components/otherInsurance/InsuranceInfoSection";
import DocumentInfoSection from "../components/otherInsurance/documentInfoSection";
import HowtoBuyTermPolicy from "../components/termInsuranceComponents/howtoBuyTermPolicy";
import WhybuypassengerCarrying from "../components/commonProductCompoennts/whybuypassengerCarrying";
import FeatureTermInsurance from "../components/termInsuranceComponents/FeatureTermInsurance";
import ComparisonInsurenceTable from "../components/commonProductCompoennts/comparisonInsurenceTable";
import WhenShouldBuyInsurence from "../components/termInsuranceComponents/whenShouldBuyInsurence";
import {
  comparisonData,
  DocumentsData,
  factorsaffectingInsuranceData,
  featureAndBenifitData,
  howToChooseRightInsuranceData,
  stepsData,
  typesofCardInsurencePlicyData,
  whyCarInsurencePolityData,
} from "./car-insurance-data";

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
      <div className="large-margin"></div>
      <DocumentInfoSection
        documentsData={featureAndBenifitData}
        headingTextFirst={"Features and benefits"}
        headingTextSecond={"of car Insurance"}
        noteText={
          "*TP insurance price for less than 1000cc engines. ** All savings are provided by the insurer-as per the IRDAI insurance plan. Standard terms and conditions apply.s"
        }
      />
      <div className="large-margin"></div>
      <FeatureTermInsurance
        carddata={whyCarInsurencePolityData}
        headingLineOne={"Why do you need to buy"}
        headingLineTwo={"  car Insurance?"}
        headingParaText="A dependable car insurance policy shields you from monetary losses caused by accidents, theft, or liabilities to third parties, providing you with comfort on each journey. Here are some compelling reasons to buy car insurance in India:"
      />

      <WhybuypassengerCarrying
        datalist={typesofCardInsurencePlicyData}
        headerTextFirst="Types of car Insurance "
        headerTextSecond="policies in India?"
        paraheadText="Please note"
        paratext="For the detailed information on the coverages, please read the policy document available on the respective insurers website."
      />
      <div className="large-margin"></div>
      <ComparisonInsurenceTable
        headingTextFirst={"Third-party Car Insurance vs"}
        headingTextSecond={"Comprehensive Car Insurance"}
        comparisonData={comparisonData}
        paraheadText="Please note"
        paratext="For the detailed information on these three types of coverages, please read the policy document available on the respective insurers website."
      />
      <div className="large-margin"></div>
      <WhybuypassengerCarrying
        datalist={howToChooseRightInsuranceData}
        headerTextFirst="How to choose the right"
        headerTextSecond="car Insurance policy?"
      />
      <div className="large-margin"></div>
      <WhenShouldBuyInsurence
        benefitsData={factorsaffectingInsuranceData}
        headingLineOne={"Factors affecting"}
        headingTextSecond={"car Insurance premium"}
        headingParaText="The following are the factors that influence car Insurance premium calculation:"
      />

      <div className="large-margin"></div>
      <section className="how_we_work_section">
        <div className="main_heading_text blue">
          {" "}
          What is electric car Insurance?{" "}
        </div>
        <div className="heading_underline_border"></div>
        <div className="heading_para">
          Electric car Insurance is a type of Insurance policy that protects
          electric cars. It provides monetary security in the event of
          accidental damage, burglary, or damage to the covered electric vehicle
          due to natural or man-made calamities.
        </div>
        <div className="heading_para">
          The Insurance policy considers the unique characteristics of EVs, such
          as their design, battery packs, and charging framework. Due to the
          higher initial expenses incurred while buying electric vehicles,
          costly battery technology, and electric car insurance, EV insurance is
          critical for EV owners. In the case of accidental damage to your car,
          EV Insurance ensures that the expense of repairing or replacing it is
          covered under the Insurance coverage.
        </div>
      </section>
      <div className="large-margin"></div>
      <section className="how_we_work_section">
        <div className="main_heading_text blue">
          Why do electric cars require
        </div>
        <div className="main_heading_text yellow">specialised Insurance?</div>
        <div className="heading_underline_border"></div>
        <div className="heading_para">
          Electric vehicles (EVs) have distinct features that set them apart
          from conventional vehicles. In contrast to traditional vehicles,
          electric cars utilise cutting-edge battery technology, which can be
          costly to fix or replace if damaged. Standard Insurance policies may
          not fully cover the significant expenses associated with the
          components of electric vehicles. For this reason, electric cars need
          specialised Insurance plans that offer coverage tailored to their
          specific design and technical requirements. Owners can secure
          sufficient financial protection by purchasing Insurance tailored
          explicitly for electric cars.
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
