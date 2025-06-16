"use client";
import { API_urL } from "@/environment/environment";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
export default function CommonHeaderForm({ headerText }) {
  const [isClient, setIsClient] = useState(false);
  const [selectedType, setSelectedType] = useState("commercial");
  const [registrationNo, setRegistrationNo] = useState();
  const [vehicleType, setVehicleType] = useState();
  const [mobileNo, setMobileNo] = useState();
  const [email, setEmail] = useState();
  const [productType, setProductType] = useState();

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

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
        registration_no: registrationNo,
        vehicle_type: vehicleType,
        mobile_no: mobileNo,
        email_address: email,
        source: "homepage_form",
      },
    };

    try {
      const res = await fetch(API_urL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (!res.ok) throw new Error(result.message || "Something went wrong");
      toast.success("Form submitted successfully!");
      console.log(result);
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
    <div>
      <div className="hero-common-section">
        {headerText && (
          <>
            <div className="main_heading_text">
              <div className="blue">Buy or Renew</div>
              <div className="yellow">Insurance</div>
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
                <img src={type.icon} alt={"services icon"} />
              </div>
              <div className="label">{type.label}</div>
            </div>
          ))}
        </div>

        <form className="insurance-form">
          <div className="form_input_wrapper">
            <input
              type="text"
              className="hero_section_input"
              placeholder="Enter Registration No.*"
              value={registrationNo}
              onChange={(e) => setRegistrationNo(e.target.value)}
            />
            {(selectedType === "car" || selectedType === "bike") && (
              <select
                className="hero_section_input"
                defaultValue=""
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
              >
                <option>Select vehicle Type*</option>
                <option>Normal</option>
                <option>EV</option>
              </select>
            )}
            {selectedType === "commercial" && (
              <select
                className="hero_section_input"
                defaultValue=""
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
              >
                <option>Select vehicle Type*</option>
                <option>GCCV</option>
                <option>PCCV</option>
              </select>
            )}

            {selectedType === "other" && (
              <select
                className="hero_section_input"
                defaultValue=""
                value={productType}
                onChange={(e) => {
                  setProductType(e.target.value);
                }}
              >
                <option>Select Product Type*</option>
                <option>Marine Insurance</option>
                <option>Aviation Insurance</option>
                <option>Home Insurance</option>
                <option> Business Insurance</option>
                <option>Travel Insurance</option>
                <option>Health Insurance</option>
                <option>Personal Accident Insurance</option>
                <option>Public Liability Insurance</option>
                <option> Fidelity Guarantee Insurance</option>
                <option>Cyber Crime Insurance</option>
                <option> Life Insurance</option>
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
            <input type="checkbox" className="checkbox_input" id="terms" />
            <label htmlFor="terms">
              I accept <a href="#">Terms and Conditions</a>
            </label>
          </div>

          <button
            type="submit"
            className="submit_button"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
