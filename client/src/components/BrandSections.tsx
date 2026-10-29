import { useState, type ReactNode } from "react";
import { Link } from "wouter";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  CalendarCheck,
  Check,
  CheckCheck,
  CircleDot,
  Mail,
  MessageSquare,
  Workflow,
} from "lucide-react";
import { events, learningSteps, solutions } from "@/lib/site-content";

export function SectionTitle({
  kicker,
  children,
  description,
}: {
  kicker: string;
  children: ReactNode;
  description?: string;
}) {
  return (
    <div className="section-title">
      <p className="airos-kicker">{kicker}</p>
      <h2>{children}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

export function SolutionCards() {
  return (
    <div className="solution-grid">
      {solutions.map(solution => {
        const Icon = solution.icon;
        return (
          <Link
            href={`/solutions#${solution.id}`}
            key={solution.id}
            className="solution-card airos-card"
          >
            <div className="solution-card-top">
              <span className="airos-iconbox">
                <Icon size={29} strokeWidth={1.5} />
              </span>
              <span className="solution-index">{solution.number}</span>
            </div>
            <h3>{solution.title}</h3>
            <p>{solution.description}</p>
            <span className="card-link">
              Explore solution <ArrowUpRight size={18} />
            </span>
          </Link>
        );
      })}
    </div>
  );
}

export function AgentExplainer() {
  const [example, setExample] = useState<"meeting" | "report">("meeting");
  const meeting = example === "meeting";
  return (
    <div className="agent-comparison">
      <article className="chatbot-card airos-card">
        <div className="comparison-label">
          <MessageSquare size={21} strokeWidth={1.5} />
          <span>THE CHATBOT</span>
          <span className="airos-pill">Responds</span>
        </div>
        <h3>A helpful answer.</h3>
        <p>
          Find information. Answer a question.
          <br />
          Then hand the next step back to you.
        </p>
        <div className="chat-example">
          <span className="chat-request">
            “I’d like to book a consultation.”
          </span>
          <div className="chat-response">
            <MessageSquare size={19} />
            <p>You can contact our team to find a time that works for you.</p>
          </div>
        </div>
        <span className="comparison-footnote">You take it from here.</span>
      </article>
      <article className="agent-card airos-card airos-card--accent">
        <div className="comparison-label">
          <Bot size={21} strokeWidth={1.5} />
          <span>THE AI AGENT</span>
          <span className="airos-chip">Takes action</span>
        </div>
        <h3>A useful next step.</h3>
        <p>
          Use connected tools to work towards your goal, with people in control.
        </p>
        <div
          className="example-controls"
          aria-label="Illustrative AI agent workflow"
        >
          <button
            type="button"
            aria-pressed={meeting}
            onClick={() => setExample("meeting")}
          >
            Schedule a meeting
          </button>
          <button
            type="button"
            aria-pressed={!meeting}
            onClick={() => setExample("report")}
          >
            Prepare a report
          </button>
        </div>
        <ol className="agent-workflow" aria-live="polite">
          <li>
            <CircleDot size={17} />
            <span>
              {meeting
                ? "Understand the request"
                : "Understand the reporting goal"}
            </span>
            <Check size={16} />
          </li>
          <li>
            <Workflow size={17} />
            <span>
              {meeting
                ? "Check the connected calendar"
                : "Retrieve relevant business data"}
            </span>
            <Check size={16} />
          </li>
          <li>
            <CalendarCheck size={17} />
            <span>
              {meeting
                ? "Propose a time for your approval"
                : "Prepare a draft for your review"}
            </span>
            <CheckCheck size={16} />
          </li>
        </ol>
        <span className="comparison-footnote">
          Illustrative workflow · Connected tools + human oversight
        </span>
      </article>
    </div>
  );
}

export function LearningRoadmap() {
  const [selected, setSelected] = useState(0);
  const step = learningSteps[selected];
  return (
    <div className="roadmap">
      <div
        className="roadmap-track"
        role="tablist"
        aria-label="AI Career Accelerator learning stages"
      >
        {learningSteps.map((item, index) => (
          <button
            key={item.title}
            id={`stage-tab-${index}`}
            type="button"
            role="tab"
            aria-selected={selected === index}
            aria-controls="stage-panel"
            tabIndex={selected === index ? 0 : -1}
            className={
              selected === index
                ? "is-current"
                : selected > index
                  ? "is-done"
                  : ""
            }
            onClick={() => setSelected(index)}
            onKeyDown={event => {
              let next = index;
              if (event.key === "ArrowRight")
                next = (index + 1) % learningSteps.length;
              else if (event.key === "ArrowLeft")
                next =
                  (index + learningSteps.length - 1) % learningSteps.length;
              else if (event.key === "Home") next = 0;
              else if (event.key === "End") next = learningSteps.length - 1;
              else return;
              event.preventDefault();
              setSelected(next);
              document.getElementById(`stage-tab-${next}`)?.focus();
            }}
          >
            <span className="roadmap-node">
              {index < selected ? (
                <Check size={19} />
              ) : (
                String(index + 1).padStart(2, "0")
              )}
            </span>
            <span>{item.title}</span>
          </button>
        ))}
      </div>
      <div
        className="roadmap-panel"
        id="stage-panel"
        role="tabpanel"
        aria-labelledby={`stage-tab-${selected}`}
        tabIndex={0}
      >
        <div>
          <p className="airos-kicker">
            STAGE {String(selected + 1).padStart(2, "0")} / 06
          </p>
          <h3>{step.subtitle}</h3>
          <p>{step.description}</p>
        </div>
        <div className="roadmap-outcome">
          <span className="airos-iconbox">
            <GraduationIcon />
          </span>
          <span>{step.outcome}</span>
        </div>
      </div>
    </div>
  );
}
function GraduationIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m2 9 10-5 10 5-10 5L2 9Zm4 2v6c4 3 8 3 12 0v-6M22 9v7" />
    </svg>
  );
}

export function EventCards({ extended = false }: { extended?: boolean }) {
  return (
    <div className="events-grid">
      {events.map(event => (
        <a
          key={event.name}
          href={event.href}
          className="event-card"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${event.name} ${event.year}, official website (opens in a new tab)`}
        >
          <div>
            <span className="event-year">{event.year}</span>
            <ArrowUpRight size={19} />
          </div>
          <h3>{event.name}</h3>
          <p>{event.location}</p>
          {extended && <p className="event-theme">{event.theme}</p>}
        </a>
      ))}
    </div>
  );
}

export function ContactBand() {
  return (
    <section className="contact-band-section">
      <div className="shell">
        <div className="contact-band airos-grid-bg">
          <div>
            <p className="airos-kicker">YOUR NEXT STEP</p>
            <h2>
              Ready to move from
              <br />
              answering to <span className="airos-gradient-text">acting?</span>
            </h2>
            <p>
              Let’s find the right starting point for your business or learning
              journey.
            </p>
          </div>
          <Link className="airos-btn airos-btn--primary" href="/contact">
            Book a meeting <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function InquiryLink({
  subject,
  children = "Discuss your needs",
}: {
  subject: string;
  children?: ReactNode;
}) {
  return (
    <Link
      className="airos-btn airos-btn--outline"
      href={`/contact?interest=${encodeURIComponent(subject)}`}
    >
      {children}
      <ArrowRight size={17} />
    </Link>
  );
}
