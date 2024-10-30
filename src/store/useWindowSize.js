import { create } from "zustand";
import { useEffect } from "react";

const MOBILE_BREAKPOINT = 768;

export const useWindowSizeStore = create((set) => ({
  isMobile: window.innerWidth < MOBILE_BREAKPOINT,
  setIsMobile: (isMobile) => set({ isMobile }),
}));

export const useWindowSize = () => {
  const { isMobile, setIsMobile } = useWindowSizeStore();

  const handleResize = () => {
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { isMobile };
};
