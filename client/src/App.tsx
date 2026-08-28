/**
 * Terra-Tech Atlas: Routes use the same training-atlas entry for the brand-refresh preview.
 * The SiteBackground is owned by the shared page composition, ready to extend to future routes.
 */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Trainings from "./pages/Trainings";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/trainings" component={Trainings} />
      <Route component={Home} />
    </Switch>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

