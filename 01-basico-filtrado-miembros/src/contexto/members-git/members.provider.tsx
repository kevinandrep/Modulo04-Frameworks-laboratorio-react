import { useState, type PropsWithChildren } from "react";
import { MemberContext } from "./members.context";
import type { MemberGitEntity } from "../../core/members.model";

export const MemberProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [members, setMembers] = useState<MemberGitEntity[]>([]);

  return (
    <MemberContext value={{ members, setMembers }}>{children}</MemberContext>
  );
};
