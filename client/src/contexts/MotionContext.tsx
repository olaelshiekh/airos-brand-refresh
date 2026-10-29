import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

const STORAGE_KEY = "airos-motion-paused";

function readPaused() {
  try {
    return window.localStorage.getItem(STORAGE_KEY) === "true";
  } catch {
    return false;
  }
}

const MotionContext = createContext({
  paused: false,
  reduced: false,
  enabled: true,
  toggle: () => {},
});

export function MotionProvider({ children }: { children: ReactNode }) {
  const [paused, setPaused] = useState(readPaused);
  const [reduced, setReduced] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  const toggle = () => {
    setPaused(previous => {
      const next = !previous;
      try {
        window.localStorage.setItem(STORAGE_KEY, String(next));
      } catch {
        // Motion remains controllable when browser storage is unavailable.
      }
      return next;
    });
  };
  return (
    <MotionContext.Provider
      value={{ paused, reduced, enabled: !paused && !reduced, toggle }}
    >
      {children}
    </MotionContext.Provider>
  );
}

export const useSiteMotion = () => useContext(MotionContext);
