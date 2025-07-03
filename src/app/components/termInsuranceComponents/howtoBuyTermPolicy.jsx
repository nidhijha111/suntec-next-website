import React from 'react'

export default function HowtoBuyTermPolicy({stepsData,headingTextFirst,headingTextSecond,stepimagesrc}) {
 

  return (
    <section className="how-to-buy-section-corrected">
      <div className="main_heading_text text-center">
        <div className="blue"> {headingTextFirst} </div>
        <div className="yellow"> {headingTextSecond}</div>
      </div>
      <div className="heading-line"></div>
      <div className="large_devide_image">
        <img src={stepimagesrc} alt="pilicy buy steps" />
      </div>
      <div className="steps-flow-container small_device_section">
        {stepsData.map((step) => (
          <div
            key={step.id}
            className={`flow-step-card flow-step-card-${step.variant}`}
          >
            <div className="flow-step-card-header">
              <h4>{step.stepNumber}</h4>
            </div>
            <div className="flow-step-card-body">
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
