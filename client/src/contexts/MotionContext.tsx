import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

const STORAGE_KEY = "airos-motion-paused";
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

type MediaQueryWithLegacyListeners = MediaQueryList & {
  addListener?: (listener: (event: MediaQueryListEvent) => void) => void;
  removeListener?: (listener: (event: MediaQueryListEvent) => void) => void;
};

export function getMotionQuery(query: string): MediaQueryList | undefined {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function")
    return undefined;
  try {
    return window.matchMedia(query);
  } catch {
    return undefined;
  }
}

export function listenToMotionQuery(
  media: MediaQueryList | undefined,
  callback: (matches: boolean) => void
) {
  if (!media) return () => {};
  const listener = (event: MediaQueryListEvent) => callback(event.matches);
  const legacy = media as MediaQueryWithLegacyListeners;
  if (typeof media.addEventListener === "function") {
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }
  if (typeof legacy.addListener === "function") {
    legacy.addListener(listener);
    return () => legacy.removeListener?.(listener);
  }
  return () => {};
}

export function prefersReducedMotion() {
  return getMotionQuery(REDUCED_MOTION_QUERY)?.matches ?? false;
}

function readPaused() {
  if (typeof window === "undefined") return false;
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
  const [reduced, setReduced] = useState(prefersReducedMotion);

  useEffect(() => {
    const media = getMotionQuery(REDUCED_MOTION_QUERY);
    const unsubscribe = listenToMotionQuery(media, setReduced);
    const onStorage = (event: StorageEvent) => {
      if (event.key !== STORAGE_KEY && event.key !== null) return;
      setPaused(event.key === null ? false : event.newValue === "true");
    };
    window.addEventListener("storage", onStorage);
    return () => {
      unsubscribe();
      window.removeEventListener("storage", onStorage);
    };
  }, []);

  const toggle = () => {
    setPaused(previous => {
      const next = !previous;
      try {
        window.localStorage.setItem(STORAGE_KEY, String(next));
      } catch {
        // The in-memory control remains available when storage is blocked.
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
