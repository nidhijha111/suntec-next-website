"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Footer() {
  const router = useRouter();

  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer_link_wrapper">
          <div className="footer_head_link">About Us</div>

          <div className="footer_link" onClick={() => router.push("/about")}>
            Our Story
          </div>
          <div className="footer_link" onClick={() => router.push("/about")}>
            Careers
          </div>
        </div>
        <div className="footer_link_wrapper">
          <div className="footer_head_link">Motor Insurance</div>

          <div className="footer_link" onClick={() => router.push("/goods-carrying-vehicle-insurance")}>
            Goods Carrying Vehicle Insurance
          </div>
          <div className="footer_link" onClick={() => router.push("/passenger-carrying-vehicle-insurance")}>
            Passenger Carrying Vehicle Insurance
          </div>
          <div className="footer_link" onClick={() => router.push("/product")}>
            Car Insurance
          </div>
          <div className="footer_link" onClick={() => router.push("/product")}>
            Bike Insurance
          </div>
          <div
            className="footer_head_link"
            onClick={() => router.push("/product")}
          >
            Marine & Aviation Insurance
          </div>
          <div
            className="footer_head_link"
            onClick={() => router.push("/product")}
          >
            Term Insurance
          </div>
        </div>
        <div className="footer_link_wrapper">
          <div className="footer_head_link"> Other Categories</div>

          <div className="footer_link" onClick={() => router.push("/product")}>
            Home Insurance
          </div>
          <div className="footer_link" onClick={() => router.push("/product")}>
            Business Insurance
          </div>
          <div className="footer_link" onClick={() => router.push("/product")}>
            Health & Group Medical Insurance
          </div>
          <div className="footer_link" onClick={() => router.push("/product")}>
            Personal Accident Insurance
          </div>
          <div className="footer_link" onClick={() => router.push("/product")}>
            Public Liability Insurance
          </div>
          <div className="footer_link" onClick={() => router.push("/product")}>
            Fidelity Guarantee Insurance
          </div>
          <div className="footer_link" onClick={() => router.push("/product")}>
            Cyber Insurance
          </div>
        </div>
        <div className="footer_link_wrapper">
          <div className="footer_head_link">Office Address</div>
          <div>
            B 206, 2nd Floor, Eastern Business District, Lal Bahadur Shastri
            Marg, Bhandup West, Mumbai, Maharashtra 400078
          </div>
          <div>
            <span className="bold-text">Toll Free : </span> 00000000000 98100
          </div>
          <div>
            <span className="bold-text">Landline : </span> 022 45197023
          </div>
          <div className="footer_head_link">Email</div>
          <div>Support : care@suntecinsurance.com</div>
          <div>Sales : sales@suntecinsurance.com</div>
          <div className="footer_icon_wrapper">
            <Image
              src="/assets/images/instagram_icon.png"
              alt="instagram icon"
              width={24}
              height={24}
            />
            <Image
              src="/assets/images/facebook_icon.png"
              alt="facebook icon"
              width={24}
              height={24}
            />
            <Image
              src="/assets/images/linkdin_icon.png"
              alt="linkedin icon"
              width={24}
              height={24}
            />
            <Image
              src="/assets/images/youtube_icon.png"
              alt="youtube icon"
              width={24}
              height={24}
            />
          </div>
        </div>
      </div>
      <div>
        <div className="footer_info_text_wrapper">
          <div>
            <span className="small-dot">&bull;</span> Suntec Insurance Broking
            Private Limited{" "}
            <span className="red">CIN : U74999HR2014PTC053454</span>, Registered
            Office : B 206, 2nd Floor, Eastern Business District, Lal Bahadur
            Shastri Marg, Bhandup West, Mumbai, Maharashtra 400078, Tel No. :
            022 45197023 I Email ID : care@suntecinsurance.com
          </div>
        </div>
        <div className="spacing-top"></div>
        <div className="footer_info_text_wrapper">
          <div>
            <span className="small-dot">&bull;</span> Suntec Insurance is registered
            as a Direct Insurance Broker (Life and General) I Registration
            No.1044, Valid till 03/03/2028, Registration Code IRDAI/DB1159/2024,
            License category : Direct Insurance Broker (Life and General)
          </div>
        </div>
        <div className="spacing-top"></div>
        <div className="footer_info_text_wrapper">
          <div>
            <span className="small-dot">&bull;</span> Disclaimer : Suntec Insurance
            Broking Private Limited acts solely as a facilitator. The final
            decision on claim settlement rests entirely with the respective
            insurer. For complete details on risk factors, terms and conditions,
            please refer to the insurer’s sales brochure before making a
            purchase. Standard terms and conditions apply.
          </div>
        </div>
        <div className="footer_info_text_wrapper">
          <div>
            <span className="small-dot">&bull;</span> Disclaimer : Suntec Insurance
            Broking Private Limited does not endorse, rate or recommend any
            particular insurer or any Insurance product offered by any insurer.
          </div>
        </div>
        <div className="footer_info_text_wrapper">
          <div>
            <span className="small-dot">&bull;</span> Disclaimer : The information
            provided on our website is intended to offer an overview of
            Insurance products and services. For complete and detailed
            information, please refer to the respective insurer’s official
            website and product documents.
          </div>
        </div>
        <div className="spacing-top"></div>
        <div className="footer_info_text_wrapper">
          <div>
            <span className="small-dot">&bull;</span> Visitors are hereby informed
            that their information submitted on the website may be shared with
            insurers.
          </div>
        </div>
        <div className="footer_info_text_wrapper">
          BEWARE OF SPURIOUS PHONE CALLS AND FICTITIOUS/FRAUDULENT OFFERS
        </div>
      </div>
      <p className="copyright footer_info_text_wrapper">
        © Copyright 2025 - 2026 suntecinsurance.com. All Rights Reserved I
        Sitemap I <a href="/faq" className="footer-link footer-bottom-link">FAQ’S</a>
      </p>
    </footer>
  );
}
