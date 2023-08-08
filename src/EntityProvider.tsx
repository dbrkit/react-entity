import { createContext, PropsWithChildren } from "react";

export const EntityContext = createContext({});

const EntityProvider = ({ children, data }: PropsWithChildren<any>) => {
  return (
    <EntityContext.Provider value={data}>{children}</EntityContext.Provider>
  );
};

export default EntityProvider;
