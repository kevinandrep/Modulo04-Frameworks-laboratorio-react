import React, { useState, type PropsWithChildren } from "react";
import { OrganizationContext } from "./organization.context";

export const OrganizationProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [organization, setOrganization] = useState("lemoncode");

  return (
    <OrganizationContext value={{ organization, setOrganization }}>
      {children}
    </OrganizationContext>
  );
};
