"use client";
import React from "react";

export default function InsuranceInfoSection({
  imageSrc,
  title,
  subtitle,
  paragraphs,
  alt,
  desclaimer,
  reverse = false,
}) {
  return (
    <div>
      <div className={`insurance-info-text-image-wrapper`}>
        {reverse ? (
          <>
            <div className="info-text">
              <div className="main_heading_text">
                <div className="white">{title}</div>
              </div>
              {subtitle && <div className="sub-heading-text">{subtitle}</div>}
              {paragraphs?.length > 0 &&
                paragraphs.map((para, i) => (
                  <p key={`para-${i}`}>
                    {typeof para === "string" ? (
                      <span dangerouslySetInnerHTML={{ __html: para }} />
                    ) : (
                      para
                    )}
                  </p>
                ))}
            </div>
            <div className="info-image">
              <img
                className="responsive-img"
                src={imageSrc ?? ""}
                alt={alt || title}
              />
            </div>
          </>
        ) : (
          <>
            <div className="info-image">
              <img
                className="responsive-img"
                src={imageSrc ?? ""}
                alt={alt || title}
              />
            </div>
            <div className="info-text">
              <div className="main_heading_text">
                <div className="white">{title}</div>
              </div>
              <div className="sub-heading-text">{subtitle}</div>
              {paragraphs?.length > 0 &&
                paragraphs.map((para, i) => (
                  <p key={`para-${i}`}>
                    {typeof para === "string" ? (
                      <span dangerouslySetInnerHTML={{ __html: para }} />
                    ) : (
                      para
                    )}
                  </p>
                ))}
            </div>
          </>
        )}
      </div>
      {desclaimer && (
        <p className="disclaimer-note">Disclaimer : {desclaimer}</p>
      )}
    </div>
  );
}