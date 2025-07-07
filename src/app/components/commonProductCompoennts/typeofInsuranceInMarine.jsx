import React from "react";

const TypeofInsuranceInMarine = ({
  carddata,
  headingLineOne,
  headingLineTwo,
  descsecondPara,
  descmainText,
  headingParaText,
  optionalMarineInsurenceType,
}) => {
  return (
    <section className="coverage-types-section">
      <div className="section-title">
        <div className="main_heading_text">
          <div className="blue">{headingLineOne} </div>
          <div className="yellow">{headingLineTwo}</div>
        </div>
      </div>
      {headingParaText && (
        <p className="text-center" style={{ marginBottom: "40px" }}>
          {headingParaText}
        </p>
      )}
      <div className="coverage-cards-container">
        {carddata?.map((coverage) => (
          <div
            key={coverage.id}
            className={`coverage-card card-variant-${coverage.variant}`}
          >
            <div className="card-top">
              <div className="card-top-heading">
                {coverage.title.split("\n").map((line, index, arr) => (
                  <React.Fragment key={index}>
                    {line}
                    {index < arr.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </div>
            </div>
            <div className="card-content">
              {coverage.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="large-margin"></div>
      <p className="text-center">
        Besides the main marine Insurance policies noted, there are various
        other specialised kinds created to address particular needs and
        situations:
      </p>
      <div className="large-margin"></div>
      <div className="coverage-cards-container">
        {optionalMarineInsurenceType?.map((coverage) => (
          <div
            key={coverage.id}
            className={`coverage-card card-variant-${coverage.variant}`}
          >
            <div className="card-top">
              <div className="card-top-heading">
                {coverage.title.split("\n").map((line, index, arr) => (
                  <React.Fragment key={index}>
                    {line}
                    {index < arr.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </div>
            </div>
            <div className="card-content">
              {coverage.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
      {descsecondPara && (
        <p className="disclaimer-note">
          {descmainText} : {descsecondPara}
        </p>
      )}
      <div className="large-margin"></div>
    </section>
  );
};

export default TypeofInsuranceInMarine;
