// export interface MemberGitDetailEntity {
//   id: number;
//   login: string;
//   name: string;
//   company: string;
//   bio: string;
// }

export interface MemberGitEntity {
  id: number;
  login: string;
  avatar_url: string;
}

export type SetMembersState = React.Dispatch<
  React.SetStateAction<MemberGitEntity[]>
>;
