import React from "react";

export default function DocumentInfoSection({
  documentsData,
  headingTextFirst,
  headingTextSecond,
  disclaimerText,
  noteText,
}) {
  return (
    <section className="documents-needed-section">
      <div className="container">
        <div className="section-title main_heading_text">
          {headingTextFirst && <div className="blue">{headingTextFirst} </div>}
          {headingTextSecond && (
            <div className="yellow"> {headingTextSecond}</div>
          )}
        </div>
        <div className="documents-content-wrapper">
          <div className="documents-header">
            <p>{documentsData.column1Title}</p>
          </div>
          <div className="documents-columns-container">
            <div className="documents-column">
              {documentsData?.columnfirstTitle && (
                <div className="document-column-header-text">
                  {documentsData?.columnfirstTitle}
                </div>
              )}
              <ul>
                {documentsData.column1Items.map((item, index) => (
                  <li
                    key={`col1-${index}`}
                    className={`${index === 0 ? "documnet-first-item" : ""}`}
                  >
                    <span
                      className={`list-icon-wrapper icon-${item.iconColor}`}
                    >
                      <img
                        src="./assets/images/tick_icon.svg"
                        alt="tick icon"
                      />
                    </span>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
            <div className="documents-column">
              {documentsData?.columnsecondTitle && (
                <div className="document-column-header-text">
                  {documentsData?.columnsecondTitle}
                </div>
              )}
              <ul>
                {documentsData.column2Items.map((item, index) => (
                  <li key={`col2-${index}`}>
                    <span
                      className={`list-icon-wrapper icon-${item.iconColor}`}
                    >
                      <img
                        src="./assets/images/tick_icon.svg"
                        alt="tick icon"
                      />
                    </span>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {disclaimerText && (
          <p className="disclaimer-note">Disclaimer : {disclaimerText}</p>
        )}
        {noteText && <p className="disclaimer-note">{noteText}</p>}
      </div>
    </section>
  );
}
