import React, { createContext, useContext, useState } from 'react';

const RfqContext = createContext();

export const RfqProvider = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [preselectedCategory, setPreselectedCategory] = useState('tonewood');
  const [toasts, setToasts] = useState([]);

  const openRfqDrawer = (category = 'tonewood') => {
    if (category) setPreselectedCategory(category);
    setIsDrawerOpen(true);
  };

  const closeRfqDrawer = () => {
    setIsDrawerOpen(false);
  };

  const addToast = (message) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4500);
  };

  return (
    <RfqContext.Provider
      value={{
        isDrawerOpen,
        preselectedCategory,
        openRfqDrawer,
        closeRfqDrawer,
        toasts,
        addToast,
      }}
    >
      {children}
    </RfqContext.Provider>
  );
};

export const useRfq = () => useContext(RfqContext);
