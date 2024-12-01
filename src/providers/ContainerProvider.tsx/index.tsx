"use client";
import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
} from "react";

function useContainerHook(ref: React.RefObject<HTMLDivElement>) {
  useEffect(() => {
    if (!ref.current) return;

    const updateHeight = () => {
      const height = ref.current!.offsetHeight;
      // Set the CSS variable on the container element
      ref.current!.style.setProperty('--body-container-height', `${height}px`);
    };

    // Update height on mount and on resize
    updateHeight();

    const resizeObserver = new ResizeObserver(updateHeight);
    resizeObserver.observe(ref.current);

    // Cleanup
    return () => resizeObserver.disconnect();
  }, [ref]);

  return {};
}

type UseContainerHook = ReturnType<typeof useContainerHook>;
const ContainerContext = createContext<UseContainerHook | null>(null);

export const useContainer = (): UseContainerHook => {
  const context = useContext(ContainerContext);
  if (!context) {
    throw new Error("useContainerHook must be used within a ContainerProvider");
  }
  return context;
};

const containerStyles = {
  height: '100vh',
  padding: '25px'
}

export function ContainerProvider({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const hook = useContainerHook(ref);

  return (
    <ContainerContext.Provider value={hook}>
      <div style={containerStyles}>
        <div style={{
          height: '100%'
        }} ref={ref}>
          {children}
        </div>
      </div>
    </ContainerContext.Provider>
  );
}
