"use client";
import React, { useEffect, useState } from "react";

export default function MarrineAvienceForm({ type }) {
  const [selectedType, setSelectedType] = useState(type);
  const [isClient, setIsClient] = useState(false);
  const [insurencetype, setInsurenceType] = useState("buy");
  const insuranceTypes = [
    {
      id: "Marine Insurance",
      label: (
        <>
          Marine 
          <br /> Insurance
        </>
      ),
      icon: "./assets/images/marine_icon.svg",
    },
    {
      id: "Aviation Insurance",
      label: (
        <>
          Aviation <br /> Insurance
        </>
      ),
      icon: "./assets/images/aviation_icon.svg",
    },
  ];

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;
  return (
    <div className="insurance_type_section">
      <div className="main_heading_text">
        <div className="blue text-center">Buy Or Renew</div>
        <div className="yellow text-center">Marine and Aviation Insurance</div>
      </div>
      <div className="line_wrapper"></div>
      <div className="insurance-types">
        {insuranceTypes.map((type) => (
          <div
            key={type.id}
            className={`type-option ${
              selectedType === type.id ? "active" : ""
            }`}
            onClick={() => setSelectedType(type.id)}
          >
            <div className="icon-wrapper">
              <img src={type.icon} alt={"services icon"} />
            </div>
            <div className="label">{type.label}</div>
          </div>
        ))}
      </div>
      <form className="insurance-form">
        <div>
          <div className="button-group">
            <button
              className={`btn primary ${
                insurencetype === "buy" ? "active" : "not-active"
              }`}
              onClick={() => setInsurenceType("buy")}
              type="button"
            >
              Buy
            </button>
            <button
              className={`btn primary ${
                insurencetype === "renew" ? "active" : "not-active"
              }`}
              onClick={() => setInsurenceType("renew")}
              type="button"
            >
              Renew
            </button>
          </div>
        </div>
        <div className="form_input_wrapper">
          {insurencetype == "renew" ? (
            <input
              type="text"
              className="hero_section_input"
              placeholder="Enter Policy No.*"
            />
          ) : (
            <input
              type="text"
              className="hero_section_input"
              placeholder="Enter Name*"
            />
          )}
          <input
            type="text"
            className="hero_section_input"
            placeholder="Enter Mobile No.*"
          />
          <input
            type="email"
            className="hero_section_input"
            placeholder="Enter Email Address*"
          />
        </div>

        <div className="terms">
          <div>
            <input type="checkbox" className="checkbox_input" id="terms" />
            <label htmlFor="terms">
              I accept <a href="#">Terms and Conditions</a>
            </label>
          </div>
          <div>
            <button type="submit" className="submit_button">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
