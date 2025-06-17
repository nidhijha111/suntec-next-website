import React from "react";
import SupportForm from "../components/supportComponents/SupportForm";
import HelplineInfoSection from "../components/supportComponents/HelplineInfoSection";
import BottomTopScrollSection from "../components/bottomTopScrollSection";

export default function Page() {
  return (
    <div className="container">
      <section className="header-story-section">
        <div className="image-container">
          <img
            src="./assets/images/support-image.png"
            alt="Logistics and insurance concept with model vehicles and laptop"
          />
        </div>
        <div className="text-container">
          <div className="main_heading_text blue"> Support</div>
          <div className="divider"></div>
          <div className="text-headig-wrapper">
            <div className="yellow"> We understand your journey.</div>
            <div className="blue"> We are here when you need us.</div>
          </div>
        </div>
      </section>
      <section className="support-service-section">
        <SupportForm />
        <HelplineInfoSection />
      </section>
      <section className="color-line-wrapper">
        <div className="yellow-wrapper"></div>
        <div className="blue-wrapper"></div>
      </section>
      <BottomTopScrollSection />
    </div>
  );
}
