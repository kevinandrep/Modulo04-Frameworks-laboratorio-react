import { createContext } from "react";
import type {
  MemberGitEntity,
  SetMembersState,
} from "../../core/members.model";

interface MemberContextModel {
  members: MemberGitEntity[];
  setMembers: SetMembersState;
}

export const MemberContext = createContext<MemberContextModel | undefined>(
  undefined,
);
