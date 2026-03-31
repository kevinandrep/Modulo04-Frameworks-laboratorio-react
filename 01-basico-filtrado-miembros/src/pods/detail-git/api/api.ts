import type { MemberGitDetailEntityAM } from "./api.model";

export const getMemberGitDetail = async (
  id: string | undefined,
): Promise<MemberGitDetailEntityAM> =>
  fetch(`https://api.github.com/users/${id}`).then((res) => res.json());
