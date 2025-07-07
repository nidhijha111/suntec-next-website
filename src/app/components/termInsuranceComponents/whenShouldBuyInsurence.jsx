import React from "react";

export default function WhenShouldBuyInsurence({
  benefitsData,
  headingLineOne,
  headingTextSecond,
  headingParaText,
  description
}) {
  return (
    <section className="major-benefits-section">
      <div className="section-title main_heading_text">
        {headingLineOne && <div className="blue">{headingLineOne}</div>}
        {headingTextSecond && (
          <div className="yellow"> {headingTextSecond}</div>
        )}
      </div>
      {headingParaText && <p className="text-center">{headingParaText}</p>}
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
      {description && <p className="disclaimer-note">{description}</p>}
    </section>
  );
}
