import type { MemberGitDetailEntityAM } from "./api";
import type { MemberGitDetailEntity } from "./detail.vm";

export const mapMemberGitDetailEntityToVM = (
  member: MemberGitDetailEntityAM,
): MemberGitDetailEntity => ({
  login: member.login,
  avatar_url: member.avatar_url,
  name: member.name ?? null,
  company: member.company ?? null,
  location: member.location ?? null,
  blog: member.blog ?? null,
  bio: member.bio ?? null,
  public_repos: member.public_repos,
  public_gists: member.public_gists,
  followers: member.followers,
  following: member.following,
  created_at: member.created_at,
  updated_at: member.updated_at,
});
