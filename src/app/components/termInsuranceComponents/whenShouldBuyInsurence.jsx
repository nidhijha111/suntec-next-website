import React from "react";

export default function WhenShouldBuyInsurence() {
  const benefitsData = [
    {
      number: "1",
      title: "In your 20s (Age 20–29)",
      description:
        "Starting early means locking in low premiums and long-term coverage while you're young and healthy. It’s a smart way to protect against debts and future financial risks.",
      variant: "yellow",
    },
    {
      number: "2",
      title: "In your 30s  (Age 30–39)",
      description:
        "With growing responsibilities like family and home loans, term Insurance ensures financial security for your loved ones - at still affordable premiums.",
      variant: "blue",
    },
    {
      number: "3",
      title: "In your 40s  (Age 40–49)",
      description:
        "With major expenses like education, healthcare, and loans, term Insurance ensures your family stays protected—even if premiums are higher.",
      variant: "yellow",
    },
    {
      number: "4",
      title: <>In your 50s (Age 50–59)</>,
      description:
        "With limited options and higher premiums, it’s wise to opt for short-term or whole life plans that align with your goals—especially while you're still in good health.",
      variant: "blue",
    },
  ];

  return (
    <section className="major-benefits-section">
      <div className="section-title main_heading_text"> 
        <div className="blue">When should I buy a</div>
        <div className="yellow"> term plan?</div>
      </div>
      <p className="text-center">
        Buying a term Insurance policy is an important financial choice, and the
        timing significantly affects both the premium amount and the coverage
        advantages. Here's a quick look at the ideal age to buy a term plan and
        how premiums typically change with different life stages:
      </p>
      <div className="benefits-grid">
        {benefitsData.map((benefit) => (
          <div key={benefit.number} className={`benefit-card`}>
            <div
              className={`benefit-card-number-wrapper card-variant-${benefit.variant}`}
            >
              <div className="benefit-card-number">{benefit.number}</div>
            </div>
            <div
              className={`benefit-card-content card-variant-${benefit.variant}`}
            >
              <h4>{benefit.title}</h4>
              <p>{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
