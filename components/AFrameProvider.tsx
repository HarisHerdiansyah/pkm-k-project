'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

type AFrameContextType = {
  isAFrameLoaded: boolean;
};

const AFrameContext = createContext<AFrameContextType>({
  isAFrameLoaded: false,
});

export const useAFrame = () => useContext(AFrameContext);

export default function AFrameProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isAFrameLoaded, setIsAFrameLoaded] = useState(false);

  useEffect(() => {
    const loadAFrame = async () => {
      if (typeof window !== 'undefined') {
        await import('aframe');
        await import('aframe-environment-component');

        setIsAFrameLoaded(true); // Mark A-Frame as loaded
      }
    };

    loadAFrame();
  }, []);

  return (
    <AFrameContext.Provider value={{ isAFrameLoaded }}>
      {children}
    </AFrameContext.Provider>
  );
}
