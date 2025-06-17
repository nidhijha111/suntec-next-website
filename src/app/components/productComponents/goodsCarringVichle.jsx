import React from "react";

export default function GoodsCarringVichle() {
  return (
    <div className="bottom-section">
      <div className="info-text">
        <div className="main_heading_text">
          <div className="white">Goods-carrying vehicle</div>
          <div className="white">Insurance</div>
        </div>
        <p>
          Commercial Vehicle Insurance is a motor insurance that protects
          vehicles from financial risk – an external damage such as natural
          disasters, accidents, thefts, fire and third-party liabilities.
        </p>
        <p>
          The Motor Vehicles Act of 1988, requires all vehicles including
          goods-carrying vehicles to have Third-Party (TP) damage insurance
          coverage because their large size and heavy loads make them vulnerable
          to various hazards during transportation.
        </p>
      </div>
      <div className="info-image">
        <img
          src="/assets/images/insurence_court_image.png"
          alt="Legal Illustration"
          className="responsive-img"
        />
      </div>
    </div>
  );
}
