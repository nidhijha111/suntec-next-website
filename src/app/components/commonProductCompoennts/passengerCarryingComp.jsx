import React from "react";

export default function PassengerCarryingComp({
  typesofPassengerData,
  headerTextFirst,
  headerTextSecond,
  paratext,
}) {
  return (
    <section className="major-benefits-section">
      <div className="section-title main_heading_text">
        <div className="blue">{headerTextFirst}</div>
        <div className="yellow"> {headerTextSecond}</div>
      </div>
      <p className="text-center">{paratext}</p>
      <div className="benefits-grid">
        {typesofPassengerData?.map((benefit) => (
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
