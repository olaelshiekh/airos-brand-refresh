import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Link, Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { MotionProvider } from "./contexts/MotionContext";
import { SiteLayout } from "./components/SiteLayout";
import Home from "./pages/Home";
import Trainings from "./pages/Trainings";
import {
  AboutPage,
  BlogPage,
  ContactPage,
  EventsPage,
  ProjectCaseStudyPage,
  ProjectsPage,
  SolutionsPage,
} from "./pages/SitePages";

function NotFound() {
  return (
    <section className="page-hero not-found airos-grid-bg">
      <div className="shell">
        <p className="airos-kicker">404 · PAGE NOT FOUND</p>
        <h1>
          Let’s get you
          <br />
          <span className="airos-gradient-text">back on track.</span>
        </h1>
        <p>This page isn’t part of the refreshed website.</p>
        <Link className="airos-btn airos-btn--primary" href="/">
          Back to AI-ROS
        </Link>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <MotionProvider>
          <TooltipProvider>
            <Toaster />
            <SiteLayout>
              <Switch>
                <Route path="/" component={Home} />
                <Route path="/solutions" component={SolutionsPage} />
                <Route path="/projects" component={ProjectsPage} />
                <Route
                  path="/projects/:slug"
                  component={ProjectCaseStudyPage}
                />
                <Route path="/blog" component={BlogPage} />
                <Route path="/academy" component={Trainings} />
                <Route path="/trainings" component={Trainings} />
                <Route path="/events" component={EventsPage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/contact" component={ContactPage} />
                <Route component={NotFound} />
              </Switch>
            </SiteLayout>
          </TooltipProvider>
        </MotionProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
