/**
 * Terra-Tech Atlas: A learning-atlas layout with asymmetrical programme waypoints, cream
 * editorial panels, and an embedded contour-field visual system. The official AI-ROS logo and
 * neural-core motif anchor the identity, while Deep Navy, Warm Taupe, and Atlas Gold set its tone.
 */
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  Compass,
  Mail,
  Menu,
  Phone,
  Sprout,
  Workflow,
  X,
} from "lucide-react";
import { useState } from "react";
import { BrandMark } from "@/components/BrandMark";
import { SectionHeading } from "@/components/SectionHeading";
import { SiteBackground } from "@/components/SiteBackground";

const navigation = ["Home", "Solutions", "Projects", "Blog", "Trainings", "About", "Contact"];

const programmes = [
  {
    id: "01",
    length: "3–6 months",
    title: "AI Career Accelerator",
    subtitle: "Build the skills your next role requires.",
    description:
      "An intensive learning route for professionals and students ready to translate AI curiosity into practical, portfolio-ready capability.",
    image: "/manus-storage/airos-career-accelerator_66c79150.jpg",
    icon: Compass,
    audience: "Professionals & students",
    outcomes: ["Machine learning and data foundations", "Applied AI strategy and implementation", "Portfolio-building, mentoring, and career guidance"],
    alignment: "Flagship route",
  },
  {
    id: "02",
    length: "3 weeks",
    title: "AI Automation",
    subtitle: "Make powerful workflows move.",
    description:
      "A concentrated, hands-on sprint for people who need to connect tools, prototype faster, and put useful AI automations to work.",
    image: "/manus-storage/airos-automation-workflows_baa3b966.jpg",
    icon: Workflow,
    audience: "Competition teams & professionals",
    outcomes: ["Workflow design with no-code and low-code tools", "AI API integration patterns", "Reusable automations for rapid prototyping"],
    alignment: "Fast track",
  },
  {
    id: "03",
    length: "Customizable",
    title: "AI & Social Entrepreneurship",
    subtitle: "Turn intelligence into lasting impact.",
    description:
      "A flexible programme for startups and organisations applying AI to real challenges shaped by the Sustainable Development Goals.",
    image: "/manus-storage/airos-social-impact_2bb5e0f8.jpg",
    icon: Sprout,
    audience: "Startups & organisations",
    outcomes: ["Curriculum shaped around your SDG focus", "AI solutions for social-impact challenges", "Mentoring for implementation and business models"],
    alignment: "Impact route",
  },
];

const comparisonRows = [
  ["Duration", "3–6 months", "3 weeks", "Shaped to your needs"],
  ["Designed for", "Professionals & students", "Teams & professionals", "Startups & organisations"],
  ["Learning mode", "Deep skill-building", "Rapid implementation", "AI + impact design"],
  ["Tools", "ML foundations", "N8n, Make, Zapier", "AI + business tools"],
];

export default function Trainings() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="atlas-page">
      <SiteBackground />
      <header className="site-header">
        <a className="header-brand" href="#top" aria-label="AI-ROS Trainings home">
          <BrandMark inverse />
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <a key={item} href={item === "Trainings" ? "#programmes" : `#${item.toLowerCase()}`} className={item === "Trainings" ? "is-active" : ""}>
              {item}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a className="header-contact" href="mailto:ola@ai-ros.ai">
            Talk to us <ArrowUpRight size={16} strokeWidth={2.2} />
          </a>
          <button className="menu-toggle" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-label="Toggle navigation">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {navigation.map((item) => (
              <a key={item} onClick={() => setMenuOpen(false)} href={item === "Trainings" ? "#programmes" : `#${item.toLowerCase()}`}>
                {item}
              </a>
            ))}
          </nav>
        )}
      </header>

      <main id="top">
        <div className="atlas-route-rail" aria-hidden="true">
          <svg viewBox="0 0 86 900" preserveAspectRatio="none"><path d="M50 0C5 78 89 130 45 221S7 377 54 456 83 627 35 722s21 121 10 178" /></svg>
          <span className="atlas-route-rail__node atlas-route-rail__node--1" /><span className="atlas-route-rail__node atlas-route-rail__node--2" /><span className="atlas-route-rail__node atlas-route-rail__node--3" /><span className="atlas-route-rail__node atlas-route-rail__node--4" />
          <small className="atlas-route-rail__label atlas-route-rail__label--1">01 / explore</small><small className="atlas-route-rail__label atlas-route-rail__label--2">02 / apply</small><small className="atlas-route-rail__label atlas-route-rail__label--3">03 / compare</small><small className="atlas-route-rail__label atlas-route-rail__label--4">04 / connect</small>
        </div>
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-section__route-label">Route 01 / Learning systems</div>
          <div className="hero-copy">
            <p className="eyebrow eyebrow--gold">AI-powered education & training</p>
            <h1 id="hero-title">
              Choose the AI route<br />
              that <em>moves you forward.</em>
            </h1>
            <p className="hero-copy__intro">
              Focused programmes for people and teams who want to build meaningful AI capability—at a pace that fits the work ahead.
            </p>
            <div className="hero-copy__actions">
              <a className="button button--gold" href="#programmes">
                Explore learning routes <ArrowRight size={18} />
              </a>
              <a className="text-link" href="mailto:ola@ai-ros.ai">
                Discuss your needs <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
          <div className="hero-marks" aria-hidden="true">
            <span>CAIRO / 30.0444° N</span>
            <span>AI-ROS / 2026</span>
          </div>
          <a className="hero-scroll" href="#programmes" aria-label="Scroll to programmes">
            <span>Scroll to explore</span><ArrowDown size={18} />
          </a>
        </section>

        <section className="statement-strip" aria-label="AI-ROS approach">
          <p>
            <span>From curiosity</span> to capability. <span>From ideas</span> to implementable systems. <span>From learning</span> to impact.
          </p>
          <div className="statement-strip__coordinates">30.0444° N / 31.2357° E <i aria-hidden="true" /></div>
        </section>

        <section className="programmes-section" id="programmes" aria-labelledby="programmes-title">
          <SectionHeading
            index="01"
            eyebrow="The programme portfolio"
            title="Three routes, built for different kinds of momentum."
            description="Start with the learning route that matches your ambition, timeline, and practical context."
          />

          <div className="programme-list">
            {programmes.map((programme, index) => {
              const Icon = programme.icon;
              return (
                <article className={`programme-card programme-card--${index + 1}`} key={programme.id}>
                  <div className="programme-card__visual">
                    <img src={programme.image} alt="" />
                    <div className="programme-card__image-wash" />
                    <span className="programme-card__number"><i aria-hidden="true" />{programme.id}</span>
                    <span className="programme-card__duration">{programme.length}</span>
                    <Icon className="programme-card__icon" aria-hidden="true" />
                  </div>
                  <div className="programme-card__body">
                    <p className="programme-card__alignment">{programme.alignment}</p>
                    <h3>{programme.title}</h3>
                    <p className="programme-card__subtitle">{programme.subtitle}</p>
                    <p className="programme-card__description">{programme.description}</p>
                    <div className="programme-card__meta">
                      <span>For</span><strong>{programme.audience}</strong>
                    </div>
                    <a className="programme-card__link" href={`#programme-${programme.id}`}>
                      See what you’ll build <ArrowRight size={17} />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="pathway-section" aria-labelledby="pathway-title">
          <div className="pathway-section__contours" aria-hidden="true"><span /><span /><span /></div>
          <div className="pathway-section__aside">
            <p className="eyebrow">Designed around your context</p>
            <h2 id="pathway-title">Not another course catalogue.</h2>
            <p>Every programme connects foundational knowledge to hands-on implementation, so the outcome has a life beyond the classroom.</p>
            <a className="text-link text-link--dark" href="mailto:ola@ai-ros.ai">Plan your learning route <ArrowUpRight size={17} /></a>
          </div>
          <ol className="pathway-steps">
            <li><span>01</span><div><h3>Orient</h3><p>Clarify the problem, ambition, and capability you need next.</p></div></li>
            <li><span>02</span><div><h3>Build</h3><p>Learn by working with tools, frameworks, and real project conditions.</p></div></li>
            <li><span>03</span><div><h3>Apply</h3><p>Leave with a practical outcome you can take into your role, team, or venture.</p></div></li>
          </ol>
        </section>

        <section className="detail-section" aria-label="Programme details">
          {programmes.map((programme, index) => (
            <article className={`programme-detail programme-detail--${index % 2 === 0 ? "navy" : "cream"}`} id={`programme-${programme.id}`} key={programme.id}>
              <div className="programme-detail__header">
                <span>{programme.id}</span>
                <p>{programme.alignment}</p>
              </div>
              <div className="programme-detail__content">
                <div>
                  <p className="eyebrow">{programme.length} / {programme.audience}</p>
                  <h2>{programme.title}</h2>
                  <p className="programme-detail__description">{programme.description}</p>
                </div>
                <ul>
                  {programme.outcomes.map((outcome) => <li key={outcome}><Check size={16} strokeWidth={2.4} />{outcome}</li>)}
                </ul>
              </div>
              <a className="button programme-detail__button" href="mailto:ola@ai-ros.ai?subject=AI-ROS%20Training%20Enquiry">
                Request programme details <ArrowUpRight size={18} />
              </a>
            </article>
          ))}
        </section>

        <section className="comparison-section" aria-labelledby="comparison-title">
          <SectionHeading index="02" eyebrow="At a glance" title="Compare your learning routes." />
          <p className="comparison-section__coordinates">N 30.0444° / E 31.2357° / AI LEARNING ATLAS</p>
          <div className="comparison-table-wrap">
            <table>
              <thead>
                <tr><th>Route</th><th>Career Accelerator</th><th>AI Automation</th><th>Social Entrepreneurship</th></tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row[0]}>{row.map((cell, index) => <td key={cell} data-label={index === 0 ? "" : cell}>{cell}</td>)}</tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="cta-section" id="contact" aria-labelledby="cta-title">
          <div className="cta-section__signal">Ready when you are</div>
          <img className="cta-section__seed" src="/manus-storage/airos-favicon_f2875ae6.png" alt="" aria-hidden="true" />
          <div>
            <p className="eyebrow eyebrow--gold">Make the next move deliberate</p>
            <h2 id="cta-title">Tell us where you want AI to take you.</h2>
          </div>
          <div className="cta-section__action">
            <p>We’ll help you find the right route for your learning goals, team context, and timeline.</p>
            <a className="button button--cream" href="mailto:ola@ai-ros.ai?subject=Let%27s%20talk%20about%20AI-ROS%20training">
              Start a conversation <ArrowUpRight size={18} />
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-footer__brand"><BrandMark inverse /><p>Innovating today, sustaining tomorrow.</p></div>
        <div className="site-footer__contacts">
          <a href="mailto:ola@ai-ros.ai"><Mail size={16} />ola@ai-ros.ai</a>
          <a href="tel:+201021183564"><Phone size={16} />+20 102 118 3564</a>
        </div>
        <p className="site-footer__copyright">© 2026 AI-ROS / Cairo, Egypt</p>
      </footer>
    </div>
  );
}
