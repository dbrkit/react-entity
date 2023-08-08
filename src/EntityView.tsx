import { PropsWithChildren } from "react";
import EntityProvider from "./EntityProvider";

const EntityView = ({ children, data }: PropsWithChildren<any>) => {
  return <EntityProvider data={data}>{children}</EntityProvider>;
};

export default EntityView;
