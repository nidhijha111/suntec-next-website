import React from "react";
import TermInsuranceHero from "../components/termInsuranceComponents/termInsuranceHero";
import InsuranceInfoSection from "../components/otherInsurance/InsuranceInfoSection";
import FeatureTermInsurance from "../components/termInsuranceComponents/FeatureTermInsurance";
import TermInsurancePlan from "../components/termInsuranceComponents/TermInsurancePlan";
import WhenShouldBuyInsurence from "../components/termInsuranceComponents/whenShouldBuyInsurence";
import HowtoBuyTermPolicy from "../components/termInsuranceComponents/howtoBuyTermPolicy";

const featureBenifitData = [
  {
    id: "third-party",
    title: "Safeguarding your family's financial well-being",
    variant: "blue",
    paragraphs: [
      "In case of an unexpected loss, term Insurance delivers a one-time payout that assists your family in sustaining financial security. This sum can be utilized to cover daily costs, settle existing debts, or aid future aspirations—providing a reliable safety net during difficult periods.",
    ],
  },
  {
    id: "own-damage",
    title: "Tailored premium payment options",
    variant: "yellow",
    paragraphs: [
      "You can select a payment plan that fits your needs, whether yearly, half-yearly, quarterly, or monthly. This flexibility helps you align your Insurance payments with your financial situation, making it easier to stay organised and peace of mind simpler.",
    ],
  },
  {
    id: "comprehensive",
    title: "High coverage at low cost/maximum protection, minimum cost",
    variant: "blue",
    paragraphs: [
      "Term Insurance provides extensive life coverage at a relatively low premium.It is an easy and economical method to obtain a substantial coverage amount, providing solid financial security for your family without putting a strain on your finances.",
    ],
  },
  {
    id: "Long-term-financial-protection",
    title: "Long-term financial protection",
    variant: "blue",
    paragraphs: [
      "Term Insurance offers coverage for an extended period—often 30 years or more—ensuring your family remains financially secure even in your absence. This long-lasting protection gives you peace of mind, knowing their future is safeguarded.",
    ],
  },
  {
    id: "Enhanced-protection",
    title: "Enhanced protection with add-on riders",
    variant: "yellow",
    paragraphs: [
      "You can strengthen your term Insurance plan by including riders such as critical illness cover, accidental death benefit, or disability cover. These optional enhancements provide extra financial assistance during challenging times—supporting everyday costs, mortgage payments, or debt repayment—ensuring a more complete and thorough coverage.",
    ],
  },
];
const termInsurencePlicyData = [
  {
    id: "third-party",
    title: "Young \n professionals",
    variant: "blue",
    paragraphs: [
      "Many young earners overlook term Insurance, believing it's not needed if they don't have dependents. However, getting coverage early can lead to lower, fixed premiums for life. Since there are fewer financial obligations at this stage, it’s a wise and cost-effective method to safeguard your future.",
    ],
  },
  {
    id: "own-damage",
    title: "Newly \n weds",
    variant: "yellow",
    paragraphs: [
      "Marriage marks the start of a shared journey—emotionally and financially. Term Insurance is a practical step to protect your partner’s future. It offers long-term security and peace of mind—far beyond temporary gifts. Compare plans to find the right fit for your needs.",
    ],
  },
  {
    id: "comprehensive",
    title: "Tax payers",
    variant: "blue",
    paragraphs: [
      "Term Insurance provides significant tax advantages. Your premiums are deductible under Section 80C of the Income Tax Act, which can lower your taxable income. Furthermore, the death benefit is exempt from tax under Section 10(10D), provided specific conditions are met.",
    ],
  },
  {
    id: "Long-term-financial-protection",
    title: "Parents",
    variant: "blue",
    paragraphs: [
      "Parents play a crucial role in ensuring their children's financial well-being by covering education expenses, everyday necessities, and aspirations for the future. A term Insurance policy can protect these obligations, guaranteeing that, even in unforeseen circumstances, your children's ambitions remain intact.",
    ],
  },
  {
    id: "Enhanced-protection",
    title: "Term Insurance\n for women",
    variant: "yellow",
    paragraphs: [
      "Term Insurance for women play an essential role as financial contributors today, and term Insurance provides crucial protection for their families. It ensures the future of your loved ones, helps manage debts, and, with the option of critical illness riders, offers assistance in the event of serious health issues such as breast or cervical cancer.",
    ],
  },
  {
    id: "Retirees",
    title: "Retirees",
    variant: "blue",
    paragraphs: [
      "For retirees, term Insurance is key to ensuring their partner’s financial comfort and healthcare needs in the later stages of life, maintaining their living standards without worry.",
    ],
  },
  {
    id: "Housewives",
    title: "Housewives",
    variant: "yellow",
    paragraphs: [
      "Housewives also significantly contribute to their family's financial stability; term Insurance guarantees that, in their absence, the household and childcare costs are manageable, preserving their family's way of life.",
    ],
  },
  {
    id: "Self-employed",
    title: "Self-employed",
    variant: "blue",
    paragraphs: [
      "Self-employed individuals can protect their family's future and business obligations with term Insurance, ensuring financial continuity and household stability after they're gone.",
    ],
  },
  {
    id: "Non-resident",
    title: "Non-resident Indian",
    variant: "yellow",
    paragraphs: [
      "NRIs can support their family back home through a term Insurance plan. This plan offers a safety net against the economic challenges of medical care and travel, ensuring peace of mind across miles.",
    ],
  },
];

const stepsData = [
  {
    id: "step1",
    stepNumber: "Step 1",
    variant: "blue",
    description:
      "Visit suntec’s website www.suntecinsurance.com. Click on the ‘Other Categories’ icon on the Home Page or from the Products tab ‘Term Insurance’",
  },
  {
    id: "step2",
    stepNumber: "Step 2",
    variant: "yellow",
    description: "Enter your name, mobile number and email.",
  },
  {
    id: "step3",
    stepNumber: "Step 3",
    variant: "blue",
    description:
      "Our Insurance advisor will provide all the necessary information to help you choose the policy that best suits your needs.",
  },
  {
    id: "step4",
    stepNumber: "Step 4",
    variant: "yellow",
    description: "After choosing the policy, make the premium payment.",
  },
  {
    id: "step5",
    stepNumber: "Step 5",
    variant: "blue",
    description:
      "Your Insurance policy will be mailed to you after paying the premium.",
  },
];
export default function page() {
  return (
    <div className="container">
      <div className="other-insurence-section">
        <TermInsuranceHero />
        <div className="large-margin"></div>
        <InsuranceInfoSection
          imageSrc="./assets/images/product_hero_image.png"
          alt={"Term Insurance"}
          title={"Term Insurance"}
          subtitle={"What is term Insurance?"}
          paragraphs={[
            "Term Insurance is a simple and economical life Insurance option that offers financial security for a specific duration, referred to as the policy term, guaranteeing that your beneficiaries will receive a lump-sum payment if you die during this period. ",
            "Unlike conventional life Insurance policies that merge coverage with savings or investment features, term Insurance does not accumulate cash value over time. Instead, it focuses solely on providing a death benefit to the beneficiaries.",
            "It is a budget-friendly option for those seeking substantial coverage at lower costs. It is especially advantageous for young professionals, parents, or homeowners aiming to secure their family’s future or address significant obligations like mortgages. Specific policies may also include a return of premium feature, which refunds all the premiums paid if you survive the term, although this option typically incurs a slightly higher cost. With its straightforwardness, affordability, and emphasis on pure protection, term Insurance guarantees your family’s financial well-being in your absence, making it a sensible and responsible choice for lasting security.",
          ]}
          reverse={true}
        />
        <FeatureTermInsurance
          carddata={featureBenifitData}
          headingLineOne={"Features and benefits of"}
          headingLineTwo={"term Insurance"}
        />
        <TermInsurancePlan />
        <FeatureTermInsurance
          carddata={termInsurencePlicyData}
          headingLineOne={"Who should buy a "}
          headingLineTwo={"term Insurance policy?"}
        />
        <WhenShouldBuyInsurence />
        <HowtoBuyTermPolicy
          stepsData={stepsData}
          headingTextFirst="How to buy "
          headingTextSecond="term Insurance?"
          stepimagesrc={"./assets/images/term-step-image.svg"}
        />
      </div>
    </div>
  );
}
