import useEntity from "./useEntity";
import { PrimitiveType, getValue } from "@dbrkit/js-utils";

const useEntityField = (name: string) => {
  const entity = useEntity();
  const value: PrimitiveType | PrimitiveType[] | object = getValue(
    entity ?? {},
    name
  );

  return {
    value,
  };
};

export default useEntityField;
