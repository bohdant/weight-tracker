import RootStore from "../stores/root-store";
import React from "react";


const storeContext = React.createContext<typeof RootStore | null>(null);

export const useStore = () => {
  const store = React.useContext(storeContext);
  if (!store) {
    throw new Error("useStore must be used within a StoreProvider.");
  }
  return store;
};

export const StoreProvider = ({ children }) => {
  const store = RootStore;
  return (
    <storeContext.Provider value={store}>{children}</storeContext.Provider>
  );
};
