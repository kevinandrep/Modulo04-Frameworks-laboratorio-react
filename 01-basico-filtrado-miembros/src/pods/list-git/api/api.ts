import type { MemberGitEntityApi } from "./api.model";

export const getMembersGit = async (
  organization: string,
): Promise<MemberGitEntityApi[]> => {
  return fetch(`https://api.github.com/orgs/${organization}/members`).then(
    (res) => res.json(),
  );
};
