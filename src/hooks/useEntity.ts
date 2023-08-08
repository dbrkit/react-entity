import { useContext } from "react";
import { EntityContext } from "../EntityProvider";

const useEntity: any = () => {
  return useContext(EntityContext);
};

export default useEntity;
