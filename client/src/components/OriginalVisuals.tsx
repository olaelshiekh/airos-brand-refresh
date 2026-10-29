import { useEffect, useId, useRef, useState } from "react";
import { Link } from "wouter";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CircleDot,
  Pause,
  Play,
  Route,
} from "lucide-react";
import {
  capabilityStories,
  featuredProjects,
  partnerVisuals,
} from "@/lib/site-content";
import { SectionTitle } from "@/components/BrandSections";

const scrollBehavior = (): ScrollBehavior =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ? "instant"
    : "smooth";

export function AtlasContours() {
  const id = useId().replace(/:/g, "");
  return (
    <svg
      className="atlas-contours"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`route-line-${id}`} x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#A69586" stopOpacity="0" />
          <stop offset=".25" stopColor="#A69586" stopOpacity=".62" />
          <stop offset=".72" stopColor="#8FA9D9" stopOpacity=".52" />
          <stop offset="1" stopColor="#A69586" stopOpacity="0" />
        </linearGradient>
        <filter
          id={`route-glow-${id}`}
          x="-40%"
          y="-40%"
          width="180%"
          height="180%"
        >
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g
        className="atlas-contours__orbits"
        fill="none"
        stroke="#A69586"
        strokeDasharray="4 12"
      >
        <circle cx="1110" cy="330" r="215" />
        <circle cx="1110" cy="330" r="280" />
        <circle cx="1110" cy="330" r="345" />
      </g>
      <g
        className="atlas-contours__routes"
        fill="none"
        stroke={`url(#route-line-${id})`}
        strokeLinecap="round"
      >
        <path d="M-100 220C190 95 355 370 660 247S1017 48 1530 210" />
        <path d="M-90 415C220 260 430 576 765 390S1130 265 1540 431" />
        <path d="M-70 625C223 452 456 795 820 579S1208 498 1532 665" />
        <path d="M-80 805C255 645 555 937 908 735S1249 696 1550 810" />
      </g>
      <g
        className="atlas-contours__markers"
        fontFamily="Effra, sans-serif"
        fontSize="12"
        letterSpacing="2"
        fill="#86745F"
      >
        <circle
          cx="205"
          cy="166"
          r="5"
          fill="#BBA07B"
          filter={`url(#route-glow-${id})`}
        />
        <circle cx="205" cy="166" r="15" fill="none" stroke="#A69586" />
        <text x="229" y="170">
          ROUTE 01 / CAIRO
        </text>
        <circle
          cx="965"
          cy="364"
          r="5"
          fill="#8FA9D9"
          filter={`url(#route-glow-${id})`}
        />
        <circle cx="965" cy="364" r="15" fill="none" stroke="#8FA9D9" />
        <text x="990" y="368">
          WAYPOINT / 31.23°E
        </text>
        <circle
          cx="1210"
          cy="691"
          r="5"
          fill="#BBA07B"
          filter={`url(#route-glow-${id})`}
        />
        <circle cx="1210" cy="691" r="15" fill="none" stroke="#A69586" />
        <text x="1235" y="695">
          AI-ROS / 2026
        </text>
      </g>
      <circle
        className="atlas-contours__signal"
        cx="635"
        cy="488"
        r="4"
        fill="#8FA9D9"
      />
      <circle
        className="atlas-contours__signal atlas-contours__signal--delay"
        cx="745"
        cy="523"
        r="4"
        fill="#BBA07B"
      />
    </svg>
  );
}

export function CapabilityScroll() {
  const scene = useRef<HTMLElement>(null);
  const viewport = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const root = scene.current;
    const rail = viewport.current;
    if (!root || !rail) return;
    const media = window.matchMedia(
      "(min-width: 861px) and (prefers-reduced-motion: no-preference)"
    );
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (media.matches) {
          const rect = root.getBoundingClientRect();
          const travel = Math.max(1, rect.height - window.innerHeight);
          const progress = Math.min(1, Math.max(0, -rect.top / travel));
          const distance = rail.scrollWidth - rail.clientWidth;
          rail.scrollLeft = progress * distance;
          root.style.setProperty("--gallery-progress", `${progress * 100}%`);
          setActive(previous => {
            const next = Math.min(
              capabilityStories.length - 1,
              Math.round(progress * (capabilityStories.length - 1))
            );
            return previous === next ? previous : next;
          });
        } else {
          const progress =
            rail.scrollLeft / Math.max(1, rail.scrollWidth - rail.clientWidth);
          root.style.setProperty("--gallery-progress", `${progress * 100}%`);
          setActive(
            Math.min(
              capabilityStories.length - 1,
              Math.round(progress * (capabilityStories.length - 1))
            )
          );
        }
      });
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(root);
    observer.observe(rail);
    window.addEventListener("scroll", update, { passive: true });
    rail.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    media.addEventListener("change", update);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      rail.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      media.removeEventListener("change", update);
    };
  }, []);

  const goTo = (index: number, instant = false) => {
    const root = scene.current;
    const rail = viewport.current;
    if (!root || !rail) return;
    const progress = index / (capabilityStories.length - 1);
    if (
      window.matchMedia(
        "(min-width: 861px) and (prefers-reduced-motion: no-preference)"
      ).matches
    ) {
      const top = root.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: top + (root.offsetHeight - window.innerHeight) * progress,
        behavior: instant ? "instant" : scrollBehavior(),
      });
    } else {
      const card = rail.querySelectorAll<HTMLElement>(
        ".capability-gallery-card"
      )[index];
      if (card)
        rail.scrollTo({
          left: card.offsetLeft,
          behavior: instant ? "instant" : scrollBehavior(),
        });
    }
  };

  return (
    <section className="capability-gallery-scene" id="capabilities" ref={scene}>
      <div className="capability-gallery-pin">
        <div className="capability-route-field">
          <AtlasContours />
        </div>
        <div className="shell capability-intro-row">
          <div>
            <p className="airos-kicker">
              <Route size={13} /> ROUTE 02 / SCROLL-DRIVEN CAPABILITIES
            </p>
            <h2>
              Engineered capabilities.
              <br />
              <span className="airos-gradient-text">Triggered for impact.</span>
            </h2>
          </div>
          <div className="capability-scroll-hint">
            <span>SCROLL TO TRAVERSE</span>
            <ArrowDown size={16} />
          </div>
        </div>
        <div
          className="capability-gallery-viewport"
          ref={viewport}
          role="region"
          aria-label="Scroll-driven AI-ROS capability gallery"
        >
          <div className="capability-gallery-track">
            {capabilityStories.map((item, index) => (
              <article
                className={`capability-gallery-card ${active === index ? "is-active" : ""}`}
                key={item.title}
              >
                <img src={item.image} alt={item.imageAlt} loading="eager" />
                <div className="capability-gallery-wash" />
                <span className="capability-gallery-coordinate">
                  AI-ROS · CAIRO / 2026
                </span>
                <span className="capability-gallery-orbit" aria-hidden="true">
                  <i />
                </span>
                <div className="capability-gallery-copy">
                  <p className="airos-kicker">
                    0{index + 1} / 0{capabilityStories.length}
                  </p>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <Link
                    className="text-link"
                    href={`/solutions#${index === 3 ? "agents" : index === 5 ? "learning" : index === 4 ? "data" : "robotics"}`}
                    onFocus={() => goTo(index, true)}
                  >
                    Explore solution <ArrowUpRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="shell capability-gallery-footer">
          <div
            className="capability-gallery-progress"
            aria-label="Capability gallery progress"
          >
            <span />
          </div>
          <div className="capability-gallery-dots">
            {capabilityStories.map((item, index) => (
              <button
                type="button"
                key={item.title}
                className={index === active ? "is-active" : ""}
                onClick={() => goTo(index)}
                aria-label={`Show capability ${index + 1}: ${item.title}`}
                aria-current={index === active ? "step" : undefined}
              >
                0{index + 1}
              </button>
            ))}
          </div>
          <Link className="text-link" href="/solutions">
            View solutions <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function ProjectGallery() {
  const rail = useRef<HTMLDivElement>(null);
  const move = (direction: -1 | 1) => {
    const el = rail.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>(".project-visual-card");
    el.scrollBy({
      left: direction * ((card?.offsetWidth ?? 340) + 22),
      behavior: scrollBehavior(),
    });
  };
  return (
    <section className="section projects-gallery-section" id="projects">
      <div className="shell">
        <div className="project-gallery-heading">
          <SectionTitle
            kicker="FEATURED PROJECTS"
            description="A glimpse of the kinds of real-world challenges AI and data solutions can address."
          >
            Applied ideas.
            <br />
            <span className="airos-gradient-text">Visible in the world.</span>
          </SectionTitle>
          <div className="project-gallery-controls">
            <button
              type="button"
              onClick={() => move(-1)}
              aria-label="Scroll to previous project"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => move(1)}
              aria-label="Scroll to next project"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
        <div
          className="project-visual-rail"
          ref={rail}
          aria-label="Featured AI-ROS projects"
        >
          {featuredProjects.map((project, index) => (
            <article className="project-visual-card" key={project.title}>
              <div className="project-visual-media">
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
                <span className="project-visual-signal" aria-hidden="true">
                  <CircleDot size={24} />
                </span>
              </div>
              <div className="project-visual-copy">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-visual-tags">
                  {project.tags.map(tag => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <Link
                  className="text-link"
                  href={`/projects#project-${index + 1}`}
                >
                  Explore project <ArrowUpRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="project-gallery-bottom">
          <p>Selected project examples from the existing AI-ROS site.</p>
          <Link className="text-link" href="/projects">
            View all projects <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function PartnerTicker() {
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [reduced, setReduced] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  const logos = [...partnerVisuals, ...partnerVisuals];
  return (
    <section
      className="partner-ticker-section"
      aria-label="Selected success-partner ecosystem"
    >
      <div className="shell partner-ticker-heading">
        <div>
          <p className="airos-kicker">SELECTED SUCCESS-PARTNER ECOSYSTEM</p>
          <p>Logo artwork from the approved AI-ROS introduction material.</p>
        </div>
        {reduced ? (
          <span className="partner-static-status">Motion reduced</span>
        ) : (
          <button
            className="partner-ticker-controls"
            type="button"
            onClick={() => setPaused(value => !value)}
            aria-pressed={paused}
            aria-label={
              paused
                ? "Resume partner strip animation"
                : "Pause partner strip animation"
            }
          >
            {paused ? <Play size={15} /> : <Pause size={15} />}
            {paused ? "Play strip" : "Pause strip"}
          </button>
        )}
      </div>
      <div
        className={`partner-ticker ${paused || hovered ? "is-paused" : ""}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="partner-ticker-track">
          {logos.map((logo, index) => (
            <span
              className={`partner-logo-tile ${index >= partnerVisuals.length ? "is-duplicate" : ""}`}
              key={`${logo.name}-${index}`}
              aria-hidden={index >= partnerVisuals.length}
            >
              <img
                src={logo.image}
                alt={index >= partnerVisuals.length ? "" : logo.name}
                loading="lazy"
              />
            </span>
          ))}
        </div>
      </div>
      <div className="shell partner-ticker-note">
        <span>
          Selected ecosystem references; not a claim of specific AI-ROS
          engagement.
        </span>
        <span>
          <CircleDot size={12} /> PEOPLE FIRST. PRACTICAL AI.
        </span>
      </div>
    </section>
  );
}
