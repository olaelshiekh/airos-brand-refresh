import { Link } from "wouter";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Bot,
  CircleDot,
  HeartHandshake,
  Workflow,
} from "lucide-react";
import {
  AgentExplainer,
  ContactBand,
  EventCards,
  LearningRoadmap,
  SectionTitle,
  SolutionCards,
} from "@/components/BrandSections";
import { brandAssets } from "@/lib/site-content";

export default function Home() {
  return (
    <>
      <section className="home-hero airos-grid-bg" aria-labelledby="hero-title">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="airos-kicker">
              <span className="kicker-line" />
              AI & ROBOTICS
            </p>
            <h1 id="hero-title">
              Innovating Today,
              <br />
              <span className="airos-gradient-text">
                Sustaining
                <br className="hero-line-break" /> Tomorrow.
              </span>
            </h1>
            <p className="hero-description">
              AI Agents, robotics and training
              <br className="desktop-break" /> that put people first.
            </p>
            <div className="hero-actions">
              <Link className="airos-btn airos-btn--primary" href="/contact">
                Book a meeting <ArrowUpRight size={18} />
              </Link>
              <Link className="airos-btn airos-btn--outline" href="/solutions">
                Explore solutions <ArrowRight size={18} />
              </Link>
            </div>
            <div className="hero-location">
              <span className="signal-dot" />
              <span>BASED IN CAIRO. BUILT FOR WHAT’S NEXT.</span>
            </div>
          </div>
          <div
            className="hero-art"
            aria-label="AI-ROS: intelligence built around people"
          >
            <span className="orbit orbit-outer" />
            <span className="orbit orbit-middle" />
            <span className="orbit orbit-inner" />
            <span className="orbit-dot orbit-dot--sky" />
            <span className="orbit-dot orbit-dot--sand" />
            <div className="hero-core">
              <img src={brandAssets.mark} alt="" />
              <span>INTELLIGENCE, WITH PURPOSE</span>
            </div>
            <div className="orbit-label orbit-label--agent">
              <span className="small-icon">
                <Bot size={21} strokeWidth={1.5} />
              </span>
              <div>
                <strong>AI that acts.</strong>
                <small>Connected to your goals</small>
              </div>
            </div>
            <div className="orbit-label orbit-label--people">
              <HeartHandshake size={21} strokeWidth={1.5} />
              <span>Built around people.</span>
            </div>
            <span className="orbit-caption">PEOPLE LEAD. AI AMPLIFIES.</span>
          </div>
        </div>
        <div className="shell hero-bottom">
          <a href="#solutions">
            Discover what’s possible <ArrowDown size={16} />
          </a>
          <div>
            <span>INTELLIGENT</span>
            <CircleDot size={8} />
            <span>HUMAN-CENTRED</span>
            <CircleDot size={8} />
            <span>PRACTICAL</span>
          </div>
        </div>
      </section>

      <section className="section solutions-section" id="solutions">
        <div className="shell">
          <SectionTitle
            kicker="WHAT WE DO"
            description="From the first idea to practical implementation. Find the right AI approach for the work you do."
          >
            Solutions built around{" "}
            <span className="airos-gradient-text">real needs.</span>
          </SectionTitle>
          <SolutionCards />
        </div>
      </section>

      <section className="section difference-section airos-grid-bg">
        <div className="shell">
          <SectionTitle
            kicker="THE DIFFERENCE"
            description="Useful intelligence goes beyond a conversation. It connects understanding to the next step."
          >
            A chatbot answers.
            <br />
            <span className="airos-gradient-text">An AI Agent acts.</span>
          </SectionTitle>
          <AgentExplainer />
          <div className="section-link-row">
            <Link className="text-link" href="/solutions#agents">
              Explore AI Agents <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section academy-section" id="academy">
        <div className="shell">
          <div className="academy-heading-row">
            <span className="airos-pill">
              <Workflow size={16} />
              LEARN. BUILD. APPLY.
            </span>
            <span className="academy-note">THE AI-ROS ACADEMY</span>
          </div>
          <SectionTitle
            kicker="AI CAREER ACCELERATOR"
            description="A guided, hands-on pathway from AI foundations to projects you can put into practice. Explore each stage."
          >
            Build your AI skills,
            <br />
            <span className="airos-gradient-text">one step at a time.</span>
          </SectionTitle>
          <LearningRoadmap />
          <div className="academy-actions">
            <Link className="airos-btn airos-btn--primary" href="/academy">
              Explore the Academy <ArrowUpRight size={18} />
            </Link>
            <span>For professionals, students and teams.</span>
          </div>
        </div>
      </section>

      <section className="section events-section" id="events">
        <div className="shell">
          <SectionTitle kicker="IN THE AI CONVERSATION">
            Ideas don’t grow{" "}
            <span className="airos-gradient-text">in isolation.</span>
          </SectionTitle>
          <EventCards />
          <div className="events-caption">
            <p>Industry events from the AI-ROS brand calendar.</p>
            <Link className="text-link" href="/events">
              Explore events <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className="values-section airos-grid-bg" id="about">
        <div className="shell values-content">
          <span className="airos-iconbox">
            <HeartHandshake size={32} strokeWidth={1.5} />
          </span>
          <p className="airos-kicker">OUR BELIEF</p>
          <h2>
            Technology should
            <br />
            <span className="airos-gradient-text">empower, not replace.</span>
          </h2>
          <p>
            People are at the centre of everything we build.
            <br />
            We turn AI capability into practical, responsible progress.
          </p>
          <Link className="text-link" href="/about">
            Meet AI-ROS <ArrowRight size={17} />
          </Link>
        </div>
      </section>
      <ContactBand />
    </>
  );
}
