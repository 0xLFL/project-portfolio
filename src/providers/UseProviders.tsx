import React, { ReactNode } from "react";
import { ContainerProvider } from "./ContainerProvider.tsx/index";

interface UseProvidersProps {
  children: ReactNode;
}

const UseProviders = ({ children }: UseProvidersProps) => {
  return (
    <ContainerProvider>
      {children}
    </ContainerProvider>
  )
}

export default UseProviders;
