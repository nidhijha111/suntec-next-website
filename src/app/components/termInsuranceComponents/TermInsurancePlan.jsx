import React from "react";

export default function TermInsurancePlan() {
  const factorsData = [
    {
      id: "idv",
      title: (
        <>
          Basic term <br /> Insurance plan
        </>
      ),
      variant: "blue", 
      description:
        "A basic term insurance policy is the simplest form of life cover. With regular, affordable premiums, it ensures your family receives financial support if something happens to you during the policy term—offering a protective shield for their future.",
    },
    {
      id: "support",
      title: (
        <>
          Return of <br /> premium term <br /> Insurance plan
        </>
      ),
      variant: "yellow",
      description:
        "This plan offers life coverage while ensuring your investment is safe. You pay regular premiums to protect your family, and if you outlive the policy term, all premiums paid are returned—providing both peace of mind and value.",
    },
    {
      id: "addons",
      title: (
        <>
          Limited payment term <br/> life Insurance plan 
        </>
      ),
      variant: "blue",
      description:
        "This option is ideal for those who prefer to avoid long-term payments—offering the benefit of paying premiums for a short period while enjoying life coverage for many years. It's like paying upfront for a subscription and enjoying its benefits long after.",
    },
    {
      id: "csr",
      title: (
        <>
          Increasing term <br />
          Insurance plan
        </>
      ),
      variant: "yellow",
      description:
        "A rising term insurance plan offers coverage that increases over time, keeping pace with your growing financial responsibilities. Starting with a fixed sum assured, the coverage grows annually—helping you stay ahead of inflation and future needs.",
    },
    {
      id: "level-term",
      title: (
        <>
          Level term
          <br />
          Insurance plan
        </>
      ),
      variant: "blue",
      description:
        "In a level term insurance plan, both the premium and sum assured stay constant throughout the policy term. It offers predictable, reliable coverage—typically for 10 to 30 years—ensuring consistent protection with fixed payments.",
    },
    {
      id: "decreasing-term",
      title: (
        <>
          Decreasing term
          <br /> Insurance plan
        </>
      ),
      variant: "yellow",
      description:
        "This insurance is ideal for those with decreasing financial responsibilities, as the coverage amount reduces monthly or annually—gradually declining until the term ends or a claim is made.",
    },
    {
      id: "join-life",
      title: (
        <>
          Joint life
          <br /> term Insurance
        </>
      ),
      variant: "blue",
      description:
        "Joint life term insurance protects you and your partner with a single policy, providing a combined or individual sum assured. In the event that one partner dies, the surviving partner receives the death benefit—guaranteeing financial stability for your family.",
    },
    {
      id: "convertible-term",
      title: (
        <>
          Convertible term
          <br /> Insurance plan
        </>
      ),
      variant: "yellow",
      description:
        "This policy starts as a standard term plan but lets you convert to permanent life insurance later without medical exams. It's a smart, cost-effective choice with flexibility for long-term protection, though premiums will rise after conversion.",
    },
    {
      id: "Group-term",
      title: (
        <>
          Group term
          <br /> Insurance
        </>
      ),
      variant: "blue",
      description:
        "Companies typically provide group term Insurance as an element of their employee benefits package. It covers a group of individuals under one policy, which helps reduce the overall premium cost.",
    },
    {
      id: "Yearly-term",
      title: (
        <>
          Yearly renewable
          <br /> term Insurance
        </>
      ),
      variant: "yellow",
      description:
        "This type of term Insurance must be renewed annually, with premiums increasing each year as you grow older.",
    },
  ];
  return (
    <section className="term-insurance-plan-section">
      <div className="section-title main_heading_text">
        <div className="yellow">Types of term Insurance plans in India </div>
      </div>
      <div className="heading-line"></div>
      <div className="factors-grid">
        {factorsData.map((factor) => (
          <div key={factor.id} className="factor-card">
            <div className={`factor-card-header card-header-${factor.variant}`}>
              <div className="fector_title">{factor.title}</div>
            </div>
            <div className={`factor-card-body card-body-${factor.variant}`}>
              <p>{factor.description}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="disclaimer-note">
        Disclaimer : For the detailed information about the products, please
        read the product information on the respective Insurer's website and to
        understand the policy coverage, please read the policy documents
        carefully.
      </p>
    </section>
  );
}
