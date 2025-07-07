import React from "react";

export default function WhybuypassengerCarrying({
  datalist,
  headerTextFirst,
  headerTextSecond,
  paratext,
  paraheadText
}) {
  return (
    <section className="term-insurance-plan-section">
      <div className="section-title main_heading_text">
        <div className="yellow">{headerTextFirst} </div>
        <div className="blue">{headerTextSecond}</div>
      </div>
      <div className="heading-line"></div>
      <div className="factors-grid">
        {datalist.map((factor) => (
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
      {paratext && (
        <p className="disclaimer-note">
          {paraheadText ?? "Disclaimer"} : {paratext}
        </p>
      )}
    </section>
  );
}
