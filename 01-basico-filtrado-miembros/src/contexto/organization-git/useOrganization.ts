import { useContext } from "react";
import { OrganizationContext } from "./organization.context";

export const useOrganization = () => {
  const contexto = useContext(OrganizationContext);

  if (!contexto) {
    throw new Error("organiozationContext no esta envolviendo un children");
  }

  return contexto;
};
