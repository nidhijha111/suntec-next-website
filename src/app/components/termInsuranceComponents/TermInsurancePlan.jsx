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
        "A fundamental term Insurance policy is the simplest form of life coverage. By making regular premium payments at a reasonable rate, you guarantee that if anything were to happen to you within the duration of the policy, your family will obtain a significant financial benefit. It serves as a protective shield, ensuring the financial security of your loved ones in your absence.",
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
        "This plan provides life coverage for the entire policy while guaranteeing your investment is not lost. You make consistent premium payments to safeguard your family, and if you survive the policy term, you will receive all the premiums you have paid back. It’s beneficial for both—you gain reassurance from knowing your family is protected, and you recoup your money if there’s no claim.",
    },
    {
      id: "addons",
      title: (
        <>
          Limited payment <br /> term life Insurance
          <br /> plan
        </>
      ),
      variant: "blue",
      description:
        "This option is perfect for individuals who want to avoid long-term payment commitments; it allows you to pay premiums for a brief duration while maintaining your life coverage for an extended period. It resembles paying upfront for a subscription and reaping the benefits long after the payments have ceased.",
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
        "A rising term Insurance plan provides a level of protection that increases over the years, matching your expanding financial obligations. As your circumstances change and costs rise, this plan guarantees that your coverage keeps up. You start with a set coverage amount, which progressively grows each year—assisting you in staying ahead of inflation and future requirements.",
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
        "In a level term Insurance plan, the premium and the sum assured remain constant over the entire duration of the policy. This implies you will pay a consistent monthly or annual amount while the life coverage stays the same. Depending on your requirements, it provides reliable and predictable protection for a specified period, usually between 10 to 30 years.",
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
        "This Insurance is designed for individuals whose financial obligations lessen over time. This policy has a provision that allows the benefit amount to be reduced monthly or annually. Typically, the amount of coverage also diminishes over time until the coverage term concludes or until the policy is paid out.",
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
        "This policy begins as standard term Insurance but allows you to change it into a permanent life Insurance plan later—without requiring any medical examinations. It’s a wise option if you seek cost-effective coverage but might desire extended protection later. There is no charge for the conversion, although premiums will increase following the change.",
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
        <div className="yellow">Types of term Insurance </div>
        <div className="blue"> plans in India</div>
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
