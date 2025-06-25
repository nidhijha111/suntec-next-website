"use client";
import { API_urL } from "@/environment/environment";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function CommonHeaderForm({ headerText }) {
  const [isClient, setIsClient] = useState(false);
  const [selectedType, setSelectedType] = useState("commercial");
  const [registrationNo, setRegistrationNo] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [email, setEmail] = useState("");
  const [productType, setProductType] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [name, setName] = useState("");

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const resetForm = () => {
    setRegistrationNo("");
    setVehicleType("");
    setMobileNo("");
    setEmail("");
    setProductType("");
    setAcceptedTerms(false);
    setSelectedType("commercial");
    setName("");
  };

  const validateForm = () => {
    if (selectedType === "other") {
      if (!name) return "Name is required Other category.";
      if (!productType) return "Product Type is required for Other category.";
    } else {
      if (!registrationNo) return "Registration No is required.";
      if (!vehicleType) return "Vehicle Type is required.";
    }
    if (!mobileNo) return "Mobile number is required.";
    if (!email) return "Email address is required.";
    if (!acceptedTerms) return "Please accept Terms and Conditions.";

    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const error = validateForm();
    if (error) {
      toast.error(error);
      return;
    }

    const payload = {
      form_data: {
        category:
          selectedType === "car"
            ? "car_insurance"
            : selectedType === "bike"
            ? "bike_insurance"
            : selectedType === "commercial"
            ? "commercial_vehicle"
            : "other",
        registration_no: registrationNo || undefined,
        vehicle_type: selectedType !== "other" ? vehicleType : undefined,
        name:name || undefined,
        mobile_no: mobileNo,
        email_address: email,
        source: "homepage_form",
        product_type: selectedType === "other" ? productType : undefined,
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

  const insuranceTypes = [
    {
      id: "commercial",
      label: (
        <>
          Commercial <br /> Vehicle
        </>
      ),
      icon: "/assets/images/commerical_vical_icon.svg",
    },
    {
      id: "car",
      label: (
        <>
          Car <br /> Insurance
        </>
      ),
      icon: "/assets/images/hero_car_image.svg",
    },
    {
      id: "bike",
      label: (
        <>
          Bike <br /> Insurance
        </>
      ),
      icon: "/assets/images/bike_insurence_icon.svg",
    },
    {
      id: "other",
      label: (
        <>
          Other
          <br /> Categories
        </>
      ),
      icon: "/assets/images/other_categories_icon.svg",
    },
  ];

  return (
    <div className="hero-common-section">
      {headerText && (
        <>
          <div className="main_heading_text">
            <div className="blue">Insurance , Simplified.</div>
            <div className="yellow">Buy or Renew.</div>
          </div>
          <div className="margin-bottom"></div>
        </>
      )}

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
              <img src={type.icon} alt="services icon" />
            </div>
            <div className="label">{type.label}</div>
          </div>
        ))}
      </div>

      <form className="insurance-form" onSubmit={handleSubmit}>
        <div className="form_input_wrapper">
          {selectedType !== "other" ? (
            <input
              type="text"
              className="hero_section_input"
              placeholder="Enter Registration No.*"
              value={registrationNo}
              onChange={(e) => setRegistrationNo(e.target.value)}
            />
          ) : (
            <input
              type="text"
              className="hero_section_input"
              placeholder="Enter Name*"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          )}

          {(selectedType === "car" || selectedType === "bike") && (
            <select
              className="hero_section_input"
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
            >
              <option value="">Select Vehicle Type*</option>
              <option value="Normal">Normal</option>
              <option value="EV">EV</option>
            </select>
          )}

          {selectedType === "commercial" && (
            <select
              className="hero_section_input"
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
            >
              <option value="">Select Vehicle Type*</option>
              <option value="GCCV">GCCV</option>
              <option value="PCCV">PCCV</option>
            </select>
          )}

          {selectedType === "other" && (
            <select
              className="hero_section_input"
              value={productType}
              onChange={(e) => setProductType(e.target.value)}
            >
              <option value="">Select Product Type*</option>
              <option>Marine Insurance</option>
              <option>Aviation Insurance</option>
              <option>Home Insurance</option>
              <option>Business Insurance</option>
              <option>Travel Insurance</option>
              <option>Health Insurance</option>
              <option>Personal Accident Insurance</option>
              <option>Public Liability Insurance</option>
              <option>Fidelity Guarantee Insurance</option>
              <option>Cyber Crime Insurance</option>
              <option>Life Insurance</option>
            </select>
          )}

          <input
            type="text"
            className="hero_section_input"
            placeholder="Enter Mobile No.*"
            value={mobileNo}
            onChange={(e) => setMobileNo(e.target.value)}
          />
          <input
            type="email"
            className="hero_section_input"
            placeholder="Enter Email Address*"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="terms">
          <input
            type="checkbox"
            className="checkbox_input"
            id="terms"
            checked={acceptedTerms}
            onChange={(e) => setAcceptedTerms(e.target.checked)}
          />
          <label htmlFor="terms">
            I accept <a href="#">Terms and Conditions</a>
          </label>
        </div>

        <button type="submit" className="submit_button">
          Submit
        </button>
      </form>
    </div>
  );
}
