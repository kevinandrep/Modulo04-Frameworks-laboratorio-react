import { useContext } from "react";
import { MemberContext } from "./members.context";

export const useMembers = () => {
  const context = useContext(MemberContext);

  if (!context) {
    throw new Error("MembersContext no envuelve un objeto");
  }

  return context;
};
