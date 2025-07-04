import React from "react";

const faqData = [
  {
    id: 1,
    question: "1. What is Insurance, and why do I need it?",
    answer:
      "Insurance serves as a financial safeguard that shields you from unexpected events such as accidents, health issues, or damage to property. It helps reduce the financial burden during emergencies.",
  },
  {
    id: 2,
    question: "2. What types of Insurance do you offer?",
    answer:
      "We offer a wide range of Insurance products including motor & logistics, term life, health, travel, cyber and others.",
  },
  {
    id: 3,
    question:
      "3. How is an Insurance broker different from an Insurance company?",
    answer:
      "An Insurance broker acts as your advisor, representing your interests rather than those of any single insurer. We help you compare, choose, and purchase the best policy from multiple insurers based on your needs.",
  },
  {
    id: 4,
    question: "4. How do I know which Insurance policy is right for me?",
    answer:
      "Our expert advisors assess your profile, goals, and risks to recommend the most suitable plans tailored to your needs.",
  },
  {
    id: 5,
    question: "5. Can I buy multiple Insurance policies through your platform?",
    answer: "Yes, you can connect with our team and buy multiple policies through us.",
  },
  {
    id: 6,
    question: "6. Is Insurance mandatory in India?",
    answer:
      "Certain types of Insurance like third-party motor Insurance and employee health coverage (in some sectors) are legally required. Others, like life or health Insurance, are optional but highly recommended.",
  },
  {
    id: 7,
    question: "7. Can I switch Insurance providers mid-policy?",
    answer:
      "Yes, depending on the product type, you may be able to switch providers at renewal or port your policy, especially in health Insurance.",
  },
  {
    id: 8,
    question: "8. Do Insurance policies have a waiting period?",
    answer:
      "Yes, especially health Insurance policies, which may have initial and disease-specific waiting periods.",
  },
  {
    id: 9,
    question: "9. Can NRIs buy Insurance through your platform?",
    answer:
      "Yes, NRIs can purchase select Insurance plans, subject to underwriting guidelines and documentation.",
  },
];

const claimSupportFAq = [
  {
    id: 1,
    question: "1. How do I file a claim through your platform?",
    answer:
      "You can file a claim online by contacting our team, submitting required documents and claim forms. Our team assists you through the entire process.",
  },
  {
    id: 2,
    question: "2. What documents are required to file a claim?",
    answer:
      "Documents vary by policy type but generally include the policy document, ID proof, FIR (for accidents), hospital bills, etc.",
  },
  {
    id: 3,
    question: "3.  How long does it take to settle a claim?",
    answer:
      "Claim settlement time varies, but we work closely with insurers to ensure timely and hassle-free processing.",
  },
  {
    id: 4,
    question: "4.Do you offer claim assistance?",
    answer:
      "Yes, our team provides end-to-end claim support to help you get the benefit without stress.",
  },
];

const PolicyPaymentFaq = [
  {
    id: 1,
    question: "1. How do I buy an Insurance policy through your website?",
    answer:
      "Call us at 9810000000 or email us at care@suntecInsurance.com.  Our Insurance advisors will assist you in selecting the best plan that fits your requirement.",
  },
  {
    id: 2,
    question: "2. Can I modify or cancel my Insurance policy?",
    answer:
      "Policy modification or cancellation depends on the insurer’s terms. Most offer a free-look period for cancellations.",
  },
  {
    id: 3,
    question: "3.What are the available premium payment options?",
    answer:
      "You can pay through credit/debit cards, net banking, UPI, and EMI (where applicable).",
  },
  {
    id: 4,
    question: "4. Will I get a soft/hard copy of my policy?",
    answer:
      "You’ll receive a soft copy via email. A hard copy may be sent by the insurer if requested.",
  },
];

const BookerServiceFaq = [
  {
    id: 1,
    question: "1. How does your Insurance broking service work?",
    answer:
      "We help you compare policies across multiple insurers and assist you in selecting, buying, and managing your Insurance plans.",
  },
  {
    id: 2,
    question: "2. Do you charge a fee for your services?",
    answer:
      "No, our services are free. We receive a commission from the Insurance companies, not from customers.",
  },
  {
    id: 3,
    question: "3. How do you ensure I get the best policy for my needs?",
    answer:
      "We conduct a thorough needs analysis and compare offerings across insurers to recommend the most suitable options.",
  },
  {
    id: 4,
    question: "4. Do you assist with policy renewals and servicing?",
    answer:
      "Yes, we provide complete support for policy renewals, updates, and servicing throughout the policy term.",
  },
];

export default function page() {
  return (
    <div className="container">
      <div className="faq-page-container">
        <div className="main_heading_text text-center">
          <div className="blue">FAQs</div>
          <div className="line-wrapper"></div>
        </div>
        {faqData.map((item, index) => (
          <div className="question-wrapper" key={item.id}>
            <div className="question-heading-text">{item.question}</div>
            <p>{item.answer}</p>
          </div>
        ))}
        <div className="margin-top"></div>
        <div className="main_heading_text text-center">
          <div className="blue">Claims & Support FAQs</div>
          <div className="line-wrapper"></div>
        </div>
        {claimSupportFAq.map((item, index) => (
          <div className="question-wrapper" key={item.id}>
            <div className="question-heading-text">{item.question}</div>
            <p>{item.answer}</p>
          </div>
        ))}
        <div className="margin-top"></div>
        <div className="main_heading_text text-center">
          <div className="blue">Policy & Payment FAQs</div>
          <div className="line-wrapper"></div>
        </div>
        {PolicyPaymentFaq.map((item, index) => (
          <div className="question-wrapper" key={item.id}>
            <div className="question-heading-text">{item.question}</div>
            <p>{item.answer}</p>
          </div>
        ))}
        <div className="margin-top"></div>
        <div className="main_heading_text text-center">
          <div className="blue">Broker Services FAQs</div>
          <div className="line-wrapper"></div>
        </div>
        {BookerServiceFaq.map((item, index) => (
          <div className="question-wrapper" key={item.id}>
            <div className="question-heading-text">{item.question}</div>
            <p>{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
