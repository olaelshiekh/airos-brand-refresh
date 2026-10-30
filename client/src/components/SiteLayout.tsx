import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link, useLocation } from "wouter";
import {
  ArrowUp,
  ArrowUpRight,
  Linkedin,
  Mail,
  Menu,
  Pause,
  Phone,
  Play,
  X,
} from "lucide-react";
import { BrandMark } from "./BrandMark";
import { brandAssets, navigation } from "@/lib/site-content";
import { prefersReducedMotion, useSiteMotion } from "@/contexts/MotionContext";

export function SiteLayout({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const {
    paused: motionPaused,
    reduced,
    enabled,
    toggle: toggleMotion,
  } = useSiteMotion();
  const menuButton = useRef<HTMLButtonElement>(null);
  const menuPanel = useRef<HTMLElement>(null);

  useEffect(() => {
    setMenuOpen(false);
    const titles: Record<string, string> = {
      "/": "Innovating Today, Sustaining Tomorrow",
      "/solutions": "Solutions",
      "/projects": "Projects",
      "/blog": "Insights & Articles",
      "/academy": "Academy",
      "/trainings": "Trainings",
      "/events": "Events",
      "/about": "About",
      "/contact": "Let’s talk",
    };
    document.title = `AI-ROS — ${titles[location] ?? (location.startsWith("/projects/") ? "Projects" : "Page not found")}`;
    if (window.location.hash) {
      requestAnimationFrame(() =>
        document.getElementById(window.location.hash.slice(1))?.scrollIntoView()
      );
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [location]);

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(
        ".page-hero .shell, .section-title, .solution-card, .solution-detail, .agent-comparison > article, .project-visual-card, .project-catalog-card, .project-case-study, .programme-card, .event-card, .values-content, .about-intro > *, .founder-name-panel, .founder-copy, .ecosystem-panel, .contact-aside, .contact-form-card, .learning-approach > *, .contact-band, .event-disclaimer, .project-catalog-note, .blog-topic-panel, .site-footer .footer-grid > div"
      )
    );
    if (!enabled || typeof IntersectionObserver === "undefined") {
      elements.forEach(element => element.classList.add("is-revealed"));
      return;
    }
    const observer = new IntersectionObserver(
      entries =>
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.1 }
    );
    elements.forEach((element, index) => {
      element.classList.add("motion-reveal");
      element.style.setProperty("--reveal-delay", `${(index % 3) * 45}ms`);
      if (element.getBoundingClientRect().top < window.innerHeight * 0.82) {
        element.classList.add("is-revealed");
      } else {
        observer.observe(element);
      }
    });
    const focus = (event: FocusEvent) =>
      (event.target as HTMLElement)
        ?.closest(".motion-reveal")
        ?.classList.add("is-revealed");
    document.addEventListener("focusin", focus);
    return () => {
      observer.disconnect();
      document.removeEventListener("focusin", focus);
    };
  }, [location, enabled]);

  useEffect(() => {
    const update = () => setShowBackToTop(window.scrollY > 800);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    menuPanel.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        requestAnimationFrame(() => menuButton.current?.focus());
      }
      if (event.key === "Tab") {
        const items = [
          menuButton.current,
          ...Array.from(
            menuPanel.current?.querySelectorAll<HTMLAnchorElement>("a") ?? []
          ),
        ].filter(Boolean) as HTMLElement[];
        const first = items[0];
        const last = items[items.length - 1];
        if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        }
      }
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onResize = () => {
      if (window.innerWidth > 860) setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [menuOpen]);

  return (
    <div
      className={`airos-site ${!enabled ? "motion-paused" : ""}`}
      data-motion={reduced ? "reduced" : motionPaused ? "paused" : "enabled"}
    >
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="site-header">
        <div className="shell header-inner">
          <Link href="/" className="header-brand" aria-label="AI-ROS home">
            <BrandMark />
          </Link>
          <nav className="desktop-nav" aria-label="Primary navigation">
            {navigation.map(item => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={
                  location === item.href ||
                  (item.href === "/projects" &&
                    location.startsWith("/projects/")) ||
                  (item.href === "/trainings" && location === "/academy")
                    ? "page"
                    : undefined
                }
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="header-actions">
            <Link
              href="/contact"
              className="airos-btn airos-btn--primary header-cta"
            >
              Book a meeting <ArrowUpRight size={17} />
            </Link>
            <button
              ref={menuButton}
              className="menu-toggle"
              type="button"
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav
            ref={menuPanel}
            id="mobile-navigation"
            className="mobile-nav"
            aria-label="Mobile navigation"
            onClick={event => {
              if ((event.target as HTMLElement).closest("a"))
                setMenuOpen(false);
            }}
          >
            <Link href="/" aria-current={location === "/" ? "page" : undefined}>
              Home <ArrowUpRight size={19} />
            </Link>
            {navigation.map(item => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={
                  location === item.href ||
                  (item.href === "/projects" &&
                    location.startsWith("/projects/")) ||
                  (item.href === "/trainings" && location === "/academy")
                    ? "page"
                    : undefined
                }
              >
                {item.label}
                <ArrowUpRight size={19} />
              </Link>
            ))}
            <Link
              href="/events"
              aria-current={location === "/events" ? "page" : undefined}
            >
              Events <ArrowUpRight size={19} />
            </Link>
            <Link
              href="/contact"
              aria-current={location === "/contact" ? "page" : undefined}
            >
              Book a meeting <ArrowUpRight size={19} />
            </Link>
            <p>Innovating Today, Sustaining Tomorrow.</p>
          </nav>
        )}
      </header>
      <main id="main-content" tabIndex={-1}>
        <div className="route-page" key={location} data-route={location}>
          {children}
        </div>
      </main>
      <footer className="site-footer">
        <div className="shell footer-grid">
          <div className="footer-brand">
            <Link href="/" aria-label="AI-ROS home">
              <BrandMark />
            </Link>
            <p>
              Innovating Today,
              <br />
              Sustaining Tomorrow.
            </p>
            <span className="footer-location">
              Cairo, Egypt · Across Egypt & the Gulf
            </span>
          </div>
          <div>
            <h2>Explore</h2>
            <nav aria-label="Footer navigation">
              {navigation.map(item => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
              <Link href="/events">Events</Link>
              <Link href="/academy">AI-ROS Academy</Link>
            </nav>
          </div>
          <div>
            <h2>Let’s connect</h2>
            <a href="mailto:ola@ai-ros.ai">
              <Mail size={16} />
              ola@ai-ros.ai
            </a>
            <a href="mailto:ola.elshiekh71@gmail.com">
              <Mail size={16} />
              ola.elshiekh71@gmail.com
            </a>
            <a href="tel:+201021183564">
              <Phone size={16} />
              +20 102 118 3564
            </a>
            <a href="tel:+966598366584">
              <Phone size={16} />
              +966 59 836 6584
            </a>
            <div className="social-links">
              <a
                href="https://www.linkedin.com/company/ai-ros/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="AI-ROS on LinkedIn (opens in a new tab)"
              >
                <Linkedin size={19} />
              </a>
              <a
                href="https://www.instagram.com/airos.ai/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </div>
        <div className="shell footer-bottom">
          <span>
            © {new Date().getFullYear()} AI-ROS. All rights reserved.
          </span>
          <Link href="/">
            ai-ros.ai <ArrowUpRight size={14} />
          </Link>
          <img src={brandAssets.mark} alt="" width="32" height="32" />
        </div>
      </footer>
      <button
        className="page-motion-toggle"
        type="button"
        aria-pressed={motionPaused}
        onClick={toggleMotion}
        aria-label={
          motionPaused ? "Resume site animations" : "Pause site animations"
        }
      >
        {motionPaused ? <Play size={14} /> : <Pause size={14} />}
        <span>{motionPaused ? "Play motion" : "Pause motion"}</span>
      </button>
      <button
        className={`back-to-top ${showBackToTop ? "is-visible" : ""}`}
        type="button"
        aria-label="Back to top"
        tabIndex={showBackToTop ? 0 : -1}
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: prefersReducedMotion() ? "instant" : "smooth",
          })
        }
      >
        <ArrowUp size={19} />
      </button>
    </div>
  );
}
