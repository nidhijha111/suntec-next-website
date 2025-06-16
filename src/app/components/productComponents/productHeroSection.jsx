"use client";
import { API_urL } from "@/environment/environment";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function ProductHeroSection() {
  const [isClient, setIsClient] = useState(false);
  const [insurencetype, setInsurenceType] = useState("buy");
  const [registrationNo, setRegistrationNo] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [policyNo, setPolicyNo] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const validateForm = () => {
    if (!registrationNo.trim()) return "Registration No is required.";
    if (insurencetype === "renew" && !policyNo.trim()) {
      return "Policy number is required for renewal.";
    }
    if (!email.trim()) return "Email address is required.";
    if (!mobileNo.trim()) return "Mobile number is required.";
    if (!/^\d{10}$/.test(mobileNo)) return "Mobile number must be 10 digits.";

    if (!/^\S+@\S+\.\S+$/.test(email)) return "Invalid email format.";
    if (!acceptedTerms) return "Please accept Terms and Conditions.";

    return null;
  };


  const resetForm = () => {
    setRegistrationNo("");
    setEmail("");
    setMobileNo("");
    setPolicyNo("");
    setInsurenceType("buy");
    setAcceptedTerms(false);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const error = validateForm();
    if (error) {
      toast.error(error);
      return;
    }

    const payload = {
      form_data: {
        category: insurencetype,
        registration_no: registrationNo,
        policy_number: insurencetype !== "buy" ? policyNo : undefined,
        mobile_no: mobileNo || undefined,
        email_address: email || undefined,
        source: "productpage_form",
      },
    };

    try {
      const res = await fetch(API_urL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (!res.ok) throw new Error(result.message || "Something went wrong");

      toast.success("Form submitted successfully!");
      resetForm();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to submit form. Please try again.");
    }
  };

  if (!isClient) return null;

  return (
    <div className="insurance-container">
      <div className="top-section">
        <div className="left-image">
          <img
            src="/assets/images/product_hero_image.png"
            alt="Blue Truck"
            className="responsive-img"
          />
        </div>
        <div className="form-section">
          <div className="heading">
            <div className="main_heading_text">
              <div className="blue">Buy or Renew</div>
              <div className="yellow">goods-carrying</div>
              <div className="blue">vehicle Insurance</div>
            </div>
          </div>

          <div className="button-group">
            <button
              className={`btn primary ${
                insurencetype === "buy" ? "active" : "not-active"
              }`}
              onClick={() => setInsurenceType("buy")}
            >
              Buy
            </button>
            <button
              className={`btn primary ${
                insurencetype === "renew" ? "active" : "not-active"
              }`}
              onClick={() => setInsurenceType("renew")}
            >
              Renew
            </button>
          </div>

          <div className="form-grid">
            <input
              className="hero_section_input"
              type="text"
              placeholder="Enter Registration No.*"
              value={registrationNo}
              onChange={(e) => {
                setRegistrationNo(e.target.value);
              }}
            />
            {insurencetype === "renew" && (
              <input
                className="hero_section_input"
                type="text"
                placeholder="Enter Policy No."
                value={policyNo}
                onChange={(e) => setPolicyNo(e.target.value)}
              />
            )}
            <input
              className="hero_section_input"
              type="email"
              placeholder="Enter Email Address*"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="hero_section_input"
              type="text"
              placeholder="Enter Mobile No.*"
              value={mobileNo}
              onChange={(e) => setMobileNo(e.target.value)}
            />
          </div>

          <div className="terms">
            <input
              type="checkbox"
              id="terms"
              checked={acceptedTerms}
              onChange={(e) => setAcceptedTerms(e.target.checked)}
            />
            <label htmlFor="terms">
              I accept <a href="#">Terms and Conditions</a>
            </label>
          </div>

          <button className="submit_button" onClick={submitHandler}>
            Submit
          </button>
        </div>
      </div>

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
            coverage because their large size and heavy loads make them
            vulnerable to various hazards during transportation.
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
    </div>
  );
}
