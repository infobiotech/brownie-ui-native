import React, { createContext, ReactNode, useContext, useState } from 'react';

type PortalContextType = {
  addPortal: (element: ReactNode) => void;
  removePortal: () => void;
};

interface PortalContextProps {
  children: ReactNode;
}

const PortalContext = createContext<PortalContextType>(null!);

export const PortalProvider: React.FC<PortalContextProps> = ({ children }) => {
  const [portal, setPortal] = useState<ReactNode | null>();

  const addPortal = (element: ReactNode) => {
    setPortal(element);
  };

  const removePortal = () => {
    setPortal(null);
  };

  return (
    <PortalContext.Provider value={{ addPortal, removePortal }}>
      {children}
      {portal}
    </PortalContext.Provider>
  );
};

export const usePortal = () => {
  const context = useContext(PortalContext);
  return context;
};
