import { createContext } from "react";

interface OrganizationContextModel {
  organization: string;
  setOrganization: (value: string) => void;
}

export const OrganizationContext = createContext<
  OrganizationContextModel | undefined
>(undefined);
