import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  Compass,
  GraduationCap,
  Leaf,
  Sparkles,
  Workflow,
} from "lucide-react";
import { Link } from "wouter";
import { programmes, programmeComparison } from "@/lib/site-content";

const trainingSections = [
  { number: "01", label: "Explore", href: "#programmes" },
  { number: "02", label: "Apply", href: "#pathway" },
  { number: "03", label: "Compare", href: "#compare" },
  { number: "04", label: "Connect", href: "/contact?interest=Training" },
];

const programmeIcons = [Compass, Workflow, Leaf];

const pathwaySteps = [
  {
    number: "01",
    title: "Orient",
    text: "Clarify the problem, ambition, and capability you need next.",
  },
  {
    number: "02",
    title: "Build",
    text: "Learn by working with tools, frameworks, and real project conditions.",
  },
  {
    number: "03",
    title: "Apply",
    text: "Leave with a practical outcome you can take into your role, team, or venture.",
  },
];

export default function Trainings() {
  return (
    <div className="training-page">
      <section className="training-hero" aria-labelledby="training-title">
        <div className="training-route-map" aria-hidden="true">
          <span className="training-route-orbit training-route-orbit--outer" />
          <span className="training-route-orbit training-route-orbit--middle" />
          <span className="training-route-orbit training-route-orbit--inner" />
          <span className="training-route-line" />
          <span className="training-route-node training-route-node--gold" />
          <span className="training-route-node training-route-node--blue" />
        </div>
        <div className="training-hero-shell">
          <nav
            className="training-route-index"
            aria-label="Training page sections"
          >
            {trainingSections.map(section =>
              section.href.startsWith("/") ? (
                <Link href={section.href} key={section.number}>
                  <span>{section.number}</span> / {section.label}
                </Link>
              ) : (
                <a href={section.href} key={section.number}>
                  <span>{section.number}</span> / {section.label}
                </a>
              )
            )}
          </nav>
          <div className="training-hero-content">
            <p className="training-route-label">
              <span aria-hidden="true" /> ROUTE 01 / LEARNING SYSTEMS
            </p>
            <p className="training-hero-kicker">
              AI-POWERED EDUCATION &amp; TRAINING
            </p>
            <h1 id="training-title">
              Choose the AI route
              <br />
              that <em>moves you forward.</em>
            </h1>
            <p className="training-hero-description">
              Focused programmes for people and teams who want to build
              meaningful AI capability—at a pace that fits the work ahead.
            </p>
            <div className="training-hero-actions">
              <a
                className="training-button training-button--gold"
                href="#programmes"
              >
                Explore learning routes <ArrowRight size={17} />
              </a>
              <Link
                className="training-button training-button--outline"
                href="/contact?interest=Training"
              >
                <GraduationCap size={17} /> Register for Training
              </Link>
            </div>
          </div>
          <div
            className="training-hero-meta"
            aria-label="AI-ROS location and year"
          >
            <span>CAIRO / 30.0444° N</span>
            <span>AI-ROS / 2026</span>
          </div>
          <a className="training-scroll-link" href="#programmes">
            Scroll to explore <ArrowDown size={16} />
          </a>
        </div>
      </section>

      <section
        className="training-statement"
        aria-label="AI-ROS learning statement"
      >
        <div className="training-statement-shell">
          <p>
            From curiosity to capability. From ideas to implementable systems.
            <br className="training-statement-break" /> From learning to impact.
          </p>
          <span>30.0444° N / 31.2357° E</span>
        </div>
      </section>

      <section className="training-programmes" id="programmes">
        <div className="training-shell">
          <div className="training-section-heading">
            <div className="training-section-index">
              <span className="training-index-orbit">
                <Compass size={17} />
              </span>
              <span>01</span>
            </div>
            <div>
              <p className="training-eyebrow">THE PROGRAMME PORTFOLIO</p>
              <h2>Three routes, built for different kinds of momentum.</h2>
              <p className="training-section-intro">
                Start with the learning route that matches your ambition,
                timeline, and practical context.
              </p>
            </div>
            <span className="training-vertical-label">01 / EXPLORE</span>
          </div>

          <div className="training-programme-grid">
            {programmes.map((programme, index) => {
              const ProgrammeIcon = programmeIcons[index];
              return (
                <article
                  className="programme-card training-programme-card"
                  key={programme.id}
                >
                  <div className="training-programme-image">
                    <img src={programme.image} alt={programme.imageAlt} />
                    <div className="training-programme-image-wash" />
                    <span className="training-programme-image-route">
                      ROUTE {programme.number}
                    </span>
                    <span
                      className="training-programme-icon"
                      aria-hidden="true"
                    >
                      <ProgrammeIcon size={20} strokeWidth={1.65} />
                    </span>
                    <span className="training-duration-pill">
                      {programme.duration}
                    </span>
                  </div>
                  <div className="training-programme-body">
                    <div className="training-programme-overline">
                      <span>{programme.route}</span>
                      <span className="training-card-number">
                        {programme.number}
                      </span>
                    </div>
                    <h3>{programme.title}</h3>
                    <p className="training-programme-promise">
                      {programme.promise}
                    </p>
                    <p className="training-programme-description">
                      {programme.description}
                    </p>
                    <div className="training-audience">
                      <span>FOR:</span> {programme.audience}
                    </div>
                    <div className="training-programme-actions">
                      <a href={`#${programme.id}`}>
                        See what you’ll build <ArrowRight size={15} />
                      </a>
                      <Link
                        href={`/contact?interest=${encodeURIComponent(programme.title)}`}
                      >
                        Enroll now <Sparkles size={15} />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="training-pathway" id="pathway">
        <div className="training-pathway-shell">
          <div className="training-pathway-copy">
            <p className="training-eyebrow">DESIGNED AROUND YOUR CONTEXT</p>
            <h2>Not another course catalogue.</h2>
            <p>
              Every programme connects foundational knowledge to hands-on
              implementation, so the outcome has a life beyond the classroom.
            </p>
            <a className="training-pathway-link" href="#compare">
              Plan your learning route <ArrowUpRight size={17} />
            </a>
          </div>
          <ol className="training-pathway-list">
            {pathwaySteps.map(step => (
              <li key={step.number}>
                <span className="training-pathway-number">{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
                <ArrowRight size={17} aria-hidden="true" />
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        className="training-details"
        aria-label="Training programme details"
      >
        <div className="training-detail-grid">
          {programmes.map((programme, index) => (
            <article
              className={`training-detail-card ${index === 1 ? "training-detail-card--cream" : "training-detail-card--navy"}`}
              id={programme.id}
              key={programme.id}
            >
              <div className="training-detail-head">
                <span className="training-detail-number">
                  {programme.number}
                </span>
                <span>{programme.route}</span>
              </div>
              <p className="training-detail-meta">
                {programme.duration} / {programme.audience}
              </p>
              <h2>{programme.title}</h2>
              <p className="training-detail-description">
                {programme.description}
              </p>
              <ul>
                {programme.outcomes.map(outcome => (
                  <li key={outcome}>
                    <Check size={16} aria-hidden="true" /> {outcome}
                  </li>
                ))}
              </ul>
              <Link
                className="training-detail-register"
                href={`/contact?interest=${encodeURIComponent(programme.title)}`}
              >
                Register for this Programme <ArrowUpRight size={16} />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="training-comparison" id="compare">
        <div className="training-shell">
          <div className="training-comparison-heading">
            <div className="training-section-index">
              <span className="training-index-orbit">
                <Compass size={17} />
              </span>
              <span>02</span>
            </div>
            <div>
              <p className="training-eyebrow">AT A GLANCE</p>
              <h2>Compare your learning routes.</h2>
            </div>
            <p className="training-atlas-label">
              N 30.0444° / E 31.2357° / AI LEARNING ATLAS
            </p>
          </div>
          <div
            className="training-table-scroll"
            role="region"
            aria-label="Compare AI-ROS learning routes"
            tabIndex={0}
          >
            <table className="training-comparison-table">
              <caption>AI-ROS learning-route comparison</caption>
              <thead>
                <tr>
                  <th scope="col">Route</th>
                  <th scope="col">Career Accelerator</th>
                  <th scope="col">AI Automation</th>
                  <th scope="col">Social Entrepreneurship</th>
                </tr>
              </thead>
              <tbody>
                {programmeComparison.map(row => (
                  <tr key={row.label}>
                    <th scope="row">{row.label}</th>
                    {row.values.map((value, index) => (
                      <td key={`${row.label}-${index}`}>{value}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
