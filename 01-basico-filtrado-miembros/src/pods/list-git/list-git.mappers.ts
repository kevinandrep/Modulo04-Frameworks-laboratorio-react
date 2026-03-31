import type { MemberGitEntity } from "../../core/members.model";
import type { MemberGitEntityApi } from "./api/api.model";

const mapMemberGitEntityToVm = (
  member: MemberGitEntityApi,
): MemberGitEntity => ({
  id: member.id,
  login: member.login,
  avatar_url: member.avatar_url,
});

export const mapMembersGitEntityToVm = (
  members: MemberGitEntityApi[],
): MemberGitEntity[] => members.map(mapMemberGitEntityToVm);
