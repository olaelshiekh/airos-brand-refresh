import { Check, ArrowRight } from "lucide-react";
import {
  ContactBand,
  InquiryLink,
  LearningRoadmap,
  SectionTitle,
} from "@/components/BrandSections";
import { programmes } from "@/lib/site-content";
import { PageHero } from "./SitePages";

export default function Trainings() {
  return (
    <>
      <PageHero
        kicker="THE AI-ROS ACADEMY"
        title={
          <>
            From curiosity
            <br />
            to <span className="airos-gradient-text">capability.</span>
          </>
        }
        description="Focused programmes for people and teams. Learn the foundations, work with real tools, and put AI into practice."
      />
      <section className="section academy-programmes" id="programmes">
        <div className="shell">
          <SectionTitle
            kicker="CHOOSE YOUR PATHWAY"
            description="Start with the programme that fits your goals, context and available time."
          >
            Different starting points.
            <br />
            <span className="airos-gradient-text">Practical progress.</span>
          </SectionTitle>
          <div className="programme-grid">
            {programmes.map(programme => (
              <article
                className="programme-card airos-card"
                key={programme.id}
                id={programme.id}
              >
                <div className="programme-top">
                  <span className="airos-bignum">{programme.number}</span>
                  <span className="airos-pill">{programme.duration}</span>
                </div>
                <p className="programme-audience">{programme.audience}</p>
                <h3>{programme.title}</h3>
                <p>{programme.description}</p>
                <ul>
                  {programme.outcomes.map(outcome => (
                    <li key={outcome}>
                      <Check size={16} />
                      {outcome}
                    </li>
                  ))}
                </ul>
                <InquiryLink subject={programme.title}>
                  Request programme details
                </InquiryLink>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section academy-section">
        <div className="shell">
          <SectionTitle
            kicker="INSIDE THE AI CAREER ACCELERATOR"
            description="A progression from the essentials to applied project work. Select a stage to see how the pathway builds."
          >
            Learn it. Build it.
            <br />
            <span className="airos-gradient-text">Make it your own.</span>
          </SectionTitle>
          <LearningRoadmap />
          <div className="academy-actions">
            <InquiryLink subject="AI Career Accelerator">
              Discuss the Accelerator
            </InquiryLink>
            <span>Ask us about the next cohort and delivery options.</span>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="shell learning-approach">
          <div>
            <p className="airos-kicker">LEARNING THAT CONNECTS</p>
            <h2>
              Not just another
              <br />
              <span className="airos-gradient-text">course catalogue.</span>
            </h2>
            <p>
              Every programme connects foundational knowledge with hands-on
              implementation, so your learning has a life beyond the classroom.
            </p>
          </div>
          <ol>
            {[
              {
                title: "Orient",
                text: "Clarify the problem, ambition and capability you need next.",
              },
              {
                title: "Build",
                text: "Work with tools and frameworks in practical project contexts.",
              },
              {
                title: "Apply",
                text: "Take your developing capability into your role, team or venture.",
              },
            ].map((item, index) => (
              <li key={item.title}>
                <span>0{index + 1}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
                <ArrowRight size={19} />
              </li>
            ))}
          </ol>
        </div>
      </section>
      <ContactBand />
    </>
  );
}
