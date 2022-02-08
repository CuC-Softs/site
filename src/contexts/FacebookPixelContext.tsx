import React, { createContext, useContext, useEffect, useState } from 'react';

interface FacebookPixelData {
  fbq: any;
}

export const ReactPixelContext = createContext<FacebookPixelData>(
  {} as FacebookPixelData,
);
export const ReactPixelProvider = ({ children }) => {
  const [fbq, setFbq] = useState<any>(null);
  useEffect(() => {
    import('react-facebook-pixel')
      .then(x => x.default)
      .then(ReactPixelFB => {
        if (typeof window !== 'undefined') {
          setFbq(ReactPixelFB);
        }
      });
  }, []);

  useEffect(() => {
    if (fbq) {
      fbq.init('249251460695363');
      fbq.pageView();
    }
  }, [fbq]);
  return (
    <ReactPixelContext.Provider value={fbq}>
      {children}
    </ReactPixelContext.Provider>
  );
};
export const useFbq = () => {
  const context = useContext(ReactPixelContext);
  if (!context) {
    throw new Error('The useFbq must be used within a facebook pixel context');
  }
  return context;
};
