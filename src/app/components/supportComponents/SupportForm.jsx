"use client";

import React, { useEffect, useState } from "react";

export default function SupportForm() {
  const [selectQueryValue, setSelectQueryValue] = useState();
  const [prodctType, setProductType] = useState("");
  const [isClient, setIsClient] = useState(false);
  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState();
  const [email, setEmail] = useState("");

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const submitHandler = (e) =>{
    e.preventDefault();
  }
   return (
    <form className="form-wrapper-section">
      <div className="form-wrapper">
        <label>Name*</label>
        <input
          placeholder="Enter Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div className="form-wrapper">
        <label> Mobile No *</label>
        <input
          placeholder="Enter Mobile No."
          value={mobileNumber}
          onChange={(e) => {
            setMobileNumber(e.target.value);
          }}
        />
      </div>
      <div className="form-wrapper">
        <label> Email*</label>
        <input
          placeholder="Enter Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-wrapper">
        <label> Subject*</label>
        <select
          placeholder="Select query"
          onChange={(e) => {
            setSelectQueryValue(e.target.value);
            setProductType("");
          }}
        >
          <option value={""}>Select query</option>
          <option value={"Product query"}> Product query</option>
          <option value={"Renewals"}>Renewals</option>
          <option value={"Claims"}>Claims</option>
          <option value={"Grievance"}>Grievance</option>
          <option value={"Others"}>Others</option>
        </select>
      </div>
      {selectQueryValue == "Product query" && (
        <div className="form-wrapper">
          <label> Product</label>
          <select
            placeholder="Select Product type"
            value={prodctType}
            disabled={selectQueryValue !== "Product query"}
            onChange={(e) => setProductType(e.target.value)}
          >
            <option>Select Product type</option>
            <option>Road Insurance</option>
            <option> Marine Insurance</option>
            <option> Aviation Insurance</option>
            <option> Home Insurance</option>
            <option>Business Insurance</option>
            <option> Travel Insurance</option>
            <option> Health Insurance</option>
            <option>Personal Accident Insurance</option>
            <option> Public Liability Insurance</option>
            <option>Fidelity Guarantee Insurance</option>
            <option> Cyber Insurance</option>
            <option>Life Insurance </option>
          </select>
        </div>
      )}
      <div className="form-wrapper">
        <label> Comments</label>
        <textarea rows="18"></textarea>
      </div>
      <button className="submit_button" onClick={submitHandler}>Submit</button>
    </form>
  );
}
