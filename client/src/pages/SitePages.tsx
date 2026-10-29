import { useState, type FormEvent, type ReactNode } from "react";
import { Link, useParams } from "wouter";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Copy,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { toast } from "sonner";
import { useSiteMotion } from "@/contexts/MotionContext";
import {
  ContactBand,
  EventCards,
  InquiryLink,
  SectionTitle,
} from "@/components/BrandSections";
import { AtlasContours } from "@/components/OriginalVisuals";
import {
  blogTopics,
  ecosystem,
  featuredProjects,
  solutions,
} from "@/lib/site-content";

export function PageHero({
  kicker,
  title,
  description,
}: {
  kicker: string;
  title: ReactNode;
  description: string;
}) {
  return (
    <section className="page-hero airos-grid-bg">
      <div className="hero-route-backdrop" aria-hidden="true">
        <AtlasContours />
      </div>
      <div className="shell">
        <p className="airos-kicker">{kicker}</p>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}

export function SolutionsPage() {
  return (
    <>
      <PageHero
        kicker="AI-ROS SOLUTIONS"
        title={
          <>
            Intelligence, put
            <br />
            to <span className="airos-gradient-text">practical use.</span>
          </>
        }
        description="AI consulting, connected agents, robotics and data solutions. Designed around the problem, not the technology."
      />
      <section className="section">
        <div className="shell">
          <nav className="solution-jump-links" aria-label="Solution categories">
            {solutions.map(item => (
              <a href={`#${item.id}`} key={item.id}>
                {item.title}
                <ArrowDownIcon />
              </a>
            ))}
          </nav>
          <div className="solution-details">
            {solutions.map(item => {
              const Icon = item.icon;
              return (
                <article className="solution-detail" id={item.id} key={item.id}>
                  <div className="solution-detail-title">
                    <span className="airos-iconbox">
                      <Icon size={32} strokeWidth={1.5} />
                    </span>
                    <span className="airos-bignum">{item.number}</span>
                    <p className="airos-kicker">{item.label}</p>
                    <h2>{item.title}</h2>
                    <div className="tag-list">
                      {item.tags.map(tag => (
                        <span className="airos-pill" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="solution-detail-copy">
                    <p>{item.detail}</p>
                    <ul>
                      {item.examples.map(example => (
                        <li key={example}>
                          <Check size={17} />
                          {example}
                        </li>
                      ))}
                    </ul>
                    <InquiryLink subject={item.title}>
                      Talk about {item.title}
                    </InquiryLink>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <ContactBand />
    </>
  );
}
function ArrowDownIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M12 4v16m-6-6 6 6 6-6" />
    </svg>
  );
}

export function EventsPage() {
  return (
    <>
      <PageHero
        kicker="INDUSTRY EVENTS"
        title={
          <>
            Part of a bigger
            <br />
            <span className="airos-gradient-text">AI conversation.</span>
          </>
        }
        description="Explore technology events across Egypt and the Gulf, where practical AI, new ideas and human ambition meet."
      />
      <section className="section">
        <div className="shell">
          <SectionTitle
            kicker="THE BRAND CALENDAR"
            description="Selected industry-event references from the approved AI-ROS brand calendar. Each card links to the event’s official website."
          >
            Across the region.
            <br />
            <span className="airos-gradient-text">Connected by ideas.</span>
          </SectionTitle>
          <EventCards extended />
          <p className="event-disclaimer">
            These are event references, not a claim of attendance, sponsorship
            or speaking participation. Check the official websites for current
            editions and schedules.
          </p>
        </div>
      </section>
      <ContactBand />
    </>
  );
}

export function BlogPage() {
  const [selectedTopic, setSelectedTopic] = useState(0);
  const [animateTopic, setAnimateTopic] = useState(false);
  const { enabled } = useSiteMotion();
  const selectTopic = (index: number) => setSelectedTopic(index);
  return (
    <>
      <PageHero
        kicker="KNOWLEDGE & RESEARCH CENTER"
        title={
          <>
            Insights{" "}
            <span className="airos-gradient-text">&amp; Articles.</span>
          </>
        }
        description="Thought leadership and industry insights from the AI-ROS team."
      />
      <section className="section">
        <div className="shell">
          <div className="blog-topic-panel airos-card">
            <div>
              <p className="airos-kicker">EXPLORE BY TOPIC</p>
              <div
                className="blog-topic-tabs"
                role="tablist"
                aria-label="Article topics"
              >
                {blogTopics.map((topic, index) => (
                  <button
                    key={topic}
                    id={`blog-topic-${index}`}
                    type="button"
                    role="tab"
                    aria-selected={selectedTopic === index}
                    aria-controls="blog-topic-content"
                    tabIndex={selectedTopic === index ? 0 : -1}
                    onClick={event => {
                      setAnimateTopic(event.detail > 0);
                      selectTopic(index);
                    }}
                    onKeyDown={event => {
                      let next = index;
                      if (event.key === "ArrowRight")
                        next = (index + 1) % blogTopics.length;
                      else if (event.key === "ArrowLeft")
                        next =
                          (index + blogTopics.length - 1) % blogTopics.length;
                      else if (event.key === "Home") next = 0;
                      else if (event.key === "End")
                        next = blogTopics.length - 1;
                      else return;
                      event.preventDefault();
                      setAnimateTopic(false);
                      setSelectedTopic(next);
                      document.getElementById(`blog-topic-${next}`)?.focus();
                    }}
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </div>
            <div
              id="blog-topic-content"
              className={`blog-topic-content ${enabled && animateTopic ? "tab-content-enter" : "tab-content-instant"}`}
              key={blogTopics[selectedTopic]}
              role="tabpanel"
              aria-labelledby={`blog-topic-${selectedTopic}`}
              tabIndex={0}
              aria-live="polite"
            >
              <p className="airos-kicker">
                {selectedTopic === 0
                  ? "AI-ROS INSIGHTS"
                  : blogTopics[selectedTopic]}
              </p>
              <h2>
                {selectedTopic === 0
                  ? "Ideas for practical AI."
                  : `Explore ${blogTopics[selectedTopic]}.`}
              </h2>
              <p>
                The article archive is not included in this website preview. Its
                published route and topic navigation are preserved for the
                AI-ROS site.
              </p>
            </div>
          </div>
        </div>
      </section>
      <ContactBand />
    </>
  );
}

export function AboutPage() {
  return (
    <>
      <PageHero
        kicker="ABOUT AI-ROS"
        title={
          <>
            People lead.
            <br />
            <span className="airos-gradient-text">AI amplifies.</span>
          </>
        }
        description="Based in Cairo and active across Egypt and the Gulf, we bridge AI technology and real-world implementation."
      />
      <section className="section">
        <div className="shell about-intro">
          <div>
            <p className="airos-kicker">INTELLIGENCE WITH PURPOSE</p>
            <h2>
              Practical technology.
              <br />
              <span className="airos-gradient-text">Responsible progress.</span>
            </h2>
          </div>
          <div>
            <p>
              AI-ROS is an AI solutions and technology company focused on
              consulting, Generative AI, automation, enterprise AI integration,
              robotics, training and capacity building.
            </p>
            <p>
              We work to make adoption practical, efficient and responsible,
              connecting technical capability with the needs of people,
              businesses and communities.
            </p>
          </div>
        </div>
      </section>
      <section className="section founder-section">
        <div className="shell">
          <div className="founder-grid">
            <div className="founder-name-panel">
              <p className="airos-kicker">MEET THE FOUNDER</p>
              <div className="founder-monogram" aria-hidden="true">
                OE
              </div>
              <h2>Ola El-Shiekh</h2>
              <p className="founder-role">Founder & CEO, AI-ROS</p>
              <p>
                Senior AI Engineer · International Speaker
                <br />
                AI Consultant · Lead AI Trainer
              </p>
              <a className="text-link" href="mailto:ola@ai-ros.ai">
                Connect with Ola <ArrowUpRight size={17} />
              </a>
            </div>
            <div className="founder-copy">
              <h3>
                Connecting technical innovation
                <br />
                with real-world applications.
              </h3>
              <blockquote className="founder-positioning">
                “Bridging technical innovation with real-world
                applications—delivering ethical, scalable, and inclusive AI
                strategies that empower communities and accelerate digital
                transformation across MENA.”
              </blockquote>
              <dl>
                <div>
                  <dt>Education</dt>
                  <dd>
                    MIT Master’s Candidate. MicroMaster in Statistics and Data
                    Science through MITx.
                  </dd>
                </div>
                <div>
                  <dt>Technical expertise</dt>
                  <dd>
                    Generative AI, Machine Learning, Deep Learning, Data
                    Science, retrieval-augmented generation (RAG), automation
                    and enterprise AI integration.
                  </dd>
                </div>
                <div>
                  <dt>Recognition & leadership</dt>
                  <dd>
                    Identified in the approved profile as the only Egyptian
                    woman Global Ambassador at Huawei. Safir SDGs Ambassador,
                    youth mentor and public speaker.
                  </dd>
                </div>
                <div>
                  <dt>Selected achievements</dt>
                  <dd>
                    Company Founder and CEO, Senior AI Engineer, International
                    Speaker, and business support at TIEC and MCIT.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="ecosystem-panel">
            <p className="airos-kicker">SELECTED SUCCESS-PARTNER ECOSYSTEM</p>
            <div className="ecosystem-list">
              {ecosystem.map(name => (
                <span className="airos-pill" key={name}>
                  {name}
                </span>
              ))}
            </div>
            <p>
              Selected names from Ola’s approved introduction material; not
              claims of specific AI-ROS client engagements.
            </p>
          </div>
        </div>
      </section>
      <ContactBand />
    </>
  );
}

export function ContactPage() {
  const interest =
    new URLSearchParams(window.location.search).get("interest") ?? "";
  const [draft, setDraft] = useState("");
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    interest,
    message: "",
  });
  const update = (key: keyof typeof form, value: string) => {
    setForm(previous => ({ ...previous, [key]: value }));
    setDraft("");
    setCopied(false);
  };
  const prepareEmail = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = `AI-ROS enquiry — ${form.interest || "Book a meeting"}`;
    const body = `Hi AI-ROS,\n\n${form.message.trim()}\n\nName: ${form.name.trim()}\nEmail: ${form.email.trim()}\nOrganisation: ${form.company.trim() || "Not specified"}\nInterest: ${form.interest || "Book a meeting"}\n\nI’d like to discuss next steps and a suitable time to connect.`;
    setDraft(
      `mailto:ola@ai-ros.ai?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    );
    setCopied(false);
    toast.success(
      "Your email draft is ready. Review it, then open your email app."
    );
  };
  const copy = async () => {
    try {
      const url = new URL(draft);
      await navigator.clipboard.writeText(
        `To: ola@ai-ros.ai\nSubject: ${url.searchParams.get("subject")}\n\n${url.searchParams.get("body")}`
      );
      setCopied(true);
      toast.success("Email draft copied.");
    } catch {
      toast.error(
        "Could not copy. Use the email-app link or email ola@ai-ros.ai directly."
      );
    }
  };
  return (
    <>
      <PageHero
        kicker="LET’S TALK"
        title={
          <>
            Your next step.
            <br />
            <span className="airos-gradient-text">Made practical.</span>
          </>
        }
        description="Tell us what you’re working towards. We’ll discuss the right solution or learning pathway, and a suitable time to connect."
      />
      <section className="section contact-section">
        <div className="shell contact-grid">
          <aside className="contact-aside">
            <p className="airos-kicker">A CONVERSATION STARTS HERE</p>
            <h2>
              Build something
              <br />
              that matters.
            </h2>
            <p>
              Bring a business challenge, a learning goal or an idea you want to
              test.
            </p>
            <a href="mailto:ola@ai-ros.ai">
              <Mail size={21} />
              <span>
                <small>Email Ola</small>ola@ai-ros.ai
              </span>
              <ArrowUpRight size={17} />
            </a>
            <a href="mailto:ola.elshiekh71@gmail.com">
              <Mail size={21} />
              <span>
                <small>Direct email</small>ola.elshiekh71@gmail.com
              </span>
              <ArrowUpRight size={17} />
            </a>
            <a href="tel:+201021183564">
              <Phone size={21} />
              <span>
                <small>Egypt</small>+20 102 118 3564
              </span>
            </a>
            <a href="tel:+966598366584">
              <Phone size={21} />
              <span>
                <small>Saudi Arabia</small>+966 59 836 6584
              </span>
            </a>
            <div className="contact-location">
              <MapPin size={21} />
              <span>
                Cairo, Egypt
                <br />
                Working across Egypt & the Gulf
              </span>
            </div>
          </aside>
          <div className="contact-form-card airos-card">
            <h2>Tell us a little about your plans.</h2>
            <p>
              This form prepares an email draft. It doesn’t send a message or
              confirm a booking.
            </p>
            <form onSubmit={prepareEmail}>
              <div className="form-row">
                <label>
                  Your name <span>*</span>
                  <input
                    required
                    maxLength={100}
                    name="name"
                    autoComplete="name"
                    value={form.name}
                    onChange={event => update("name", event.target.value)}
                    placeholder="Full name"
                  />
                </label>
                <label>
                  Email address <span>*</span>
                  <input
                    required
                    maxLength={254}
                    type="email"
                    name="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={event => update("email", event.target.value)}
                    placeholder="you@company.com"
                  />
                </label>
              </div>
              <label>
                Organisation <span className="optional">(optional)</span>
                <input
                  maxLength={150}
                  name="company"
                  autoComplete="organization"
                  value={form.company}
                  onChange={event => update("company", event.target.value)}
                  placeholder="Company, team or institution"
                />
              </label>
              <label>
                I’m interested in <span>*</span>
                <select
                  required
                  name="interest"
                  value={form.interest}
                  onChange={event => update("interest", event.target.value)}
                >
                  <option value="" disabled>
                    Select a starting point
                  </option>
                  {form.interest &&
                    ![
                      "AI Agents",
                      "AI & Robotics",
                      "Adaptive Learning",
                      "Data Intelligence",
                      "AI Career Accelerator",
                      "AI Automation",
                      "AI & Social Entrepreneurship",
                      "Book a meeting",
                      "Something else",
                    ].includes(form.interest) && (
                      <option value={form.interest}>{form.interest}</option>
                    )}
                  {[
                    "AI Agents",
                    "AI & Robotics",
                    "Adaptive Learning",
                    "Data Intelligence",
                    "AI Career Accelerator",
                    "AI Automation",
                    "AI & Social Entrepreneurship",
                    "Book a meeting",
                    "Something else",
                  ].map(option => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                What would you like to explore? <span>*</span>
                <textarea
                  required
                  minLength={10}
                  maxLength={3000}
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={event => update("message", event.target.value)}
                  placeholder="Your goal, challenge or idea. Share whatever helps us understand your starting point."
                />
              </label>
              <div className="form-submit">
                <button className="airos-btn airos-btn--primary" type="submit">
                  Prepare email draft <ArrowRight size={17} />
                </button>
                <span>Your information stays in your browser.</span>
              </div>
            </form>
            {draft && (
              <div className="email-draft-result" role="status">
                <div>
                  <Check size={19} />
                  <strong>Ready for your review</strong>
                </div>
                <p>
                  No message has been sent. Open the draft in your email app and
                  send it when you’re ready.
                </p>
                <div>
                  <a className="airos-btn airos-btn--primary" href={draft}>
                    Open email app <ArrowUpRight size={17} />
                  </a>
                  <button className="text-link" type="button" onClick={copy}>
                    <Copy size={16} />
                    {copied ? "Copied" : "Copy draft"}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export function ProjectsPage() {
  return (
    <>
      <PageHero
        kicker="FEATURED PROJECTS"
        title={
          <>
            Real-world challenges.
            <br />
            <span className="airos-gradient-text">Applied AI.</span>
          </>
        }
        description="Selected projects listed on the original AI-ROS website, presented with their image-led stories and no unverified performance figures."
      />
      <section className="section project-catalog-section">
        <div className="shell">
          <div className="project-catalog-grid">
            {featuredProjects.map((project, index) => (
              <article
                className="project-catalog-card airos-card"
                id={`project-${index + 1}`}
                key={project.title}
              >
                <div className="project-catalog-media">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    loading="lazy"
                  />
                  <span className="project-visual-index">
                    0{index + 1} / 0{featuredProjects.length}
                  </span>
                  <span className="project-visual-category">
                    {project.category}
                  </span>
                </div>
                <div className="project-catalog-copy">
                  <p className="airos-kicker">{project.category}</p>
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                  <div className="project-visual-tags">
                    {project.tags.map(tag => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <Link
                    className="text-link"
                    href={`/projects/${project.slug}`}
                  >
                    View case study <ArrowUpRight size={16} />
                  </Link>
                  <InquiryLink subject={project.title}>
                    Discuss a similar challenge
                  </InquiryLink>
                </div>
              </article>
            ))}
          </div>
          <p className="project-catalog-note">
            Project titles and descriptions are retained from the live AI-ROS
            website. Visuals are illustrative and no performance statistics are
            presented.
          </p>
        </div>
      </section>
      <ContactBand />
    </>
  );
}

export function ProjectCaseStudyPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = featuredProjects.find(item => item.slug === slug);
  if (!project) return <ProjectsPage />;
  return (
    <>
      <PageHero
        kicker="AI-ROS PROJECT CASE STUDY"
        title={project.title}
        description={project.description}
      />
      <section className="section">
        <div className="shell project-case-study airos-card">
          <div className="project-case-study-media">
            <img src={project.image} alt={project.imageAlt} />
          </div>
          <div className="project-case-study-copy">
            <p className="airos-kicker">{project.category}</p>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <p className="project-catalog-note">
              This refresh carries over the published project listing only. It
              does not add client, implementation, or impact details that have
              not been supplied for this page.
            </p>
            <div className="project-case-study-actions">
              <InquiryLink subject={project.title}>
                Discuss a similar challenge
              </InquiryLink>
              <Link className="text-link" href="/projects">
                <ArrowRight size={16} /> Back to projects
              </Link>
            </div>
          </div>
        </div>
      </section>
      <ContactBand />
    </>
  );
}
