import React from "react";

export default function ComparisonInsurenceTable({
  headingTextFirst,
  headingTextSecond,
  comparisonData,
  paratext,
  paraheadText
}) {
  const getIcon = (status) =>
    status ? "./assets/images/tick-icon.svg" : "./assets/images/cross-icon.svg";
  return (
    <div className="comparison-table-section">
      <div className="main_heading_text">
        {headingTextFirst && <div className="blue">{headingTextFirst} </div>}
        {headingTextSecond && (
          <div className="yellow"> {headingTextSecond}</div>
        )}
      </div>
      <div className="line"></div>
      <div className="table-wrapper">
        <table className="comprasion-table">
          <thead>
            <tr>
              <th></th>
              <th>Third-Party</th>
              <th>Comprehensive</th>
            </tr>
          </thead>
          <tbody>
            {comparisonData.map((item, index) => (
              <tr key={index}>
                <td>{item.label}</td>
                <td>
                  <img
                    src={getIcon(item.thirdParty)}
                    alt={item.thirdParty ? "tick" : "cross"}
                  />
                </td>
                <td>
                  <img
                    src={getIcon(item.comprehensive)}
                    alt={item.comprehensive ? "tick" : "cross"}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {paratext && (
        <p className="disclaimer-note">
          {paraheadText ?? "Disclaimer"} : {paratext}
        </p>
      )}
    </div>
  );
}
