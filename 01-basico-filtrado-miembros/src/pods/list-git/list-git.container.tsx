import { useEffect, useState } from "react";
import { useMembers } from "../../contexto/members-git";
import { useOrganization } from "../../contexto/organization-git";
import { ListGit } from "./list-git.component";
import { getMembersGit } from "./api/api";
import { mapMembersGitEntityToVm } from "./list-git.mappers";

export const ListContainer = () => {
  const { members, setMembers } = useMembers();
  const { organization, setOrganization } = useOrganization();
  const [inputValue, setInputValue] = useState(organization);

  useEffect(() => {
    getMembersGit(organization).then(mapMembersGitEntityToVm).then(setMembers);
  }, [setMembers, organization]);

  const onChangeOrganization = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value.toLowerCase());
  };

  const handleChangeOrganization = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const org = inputValue;
    setOrganization(org);
    getMembersGit(org).then(mapMembersGitEntityToVm).then(setMembers);
  };

  return (
    <ListGit
      members={members}
      organization={inputValue}
      onChangeOrganization={onChangeOrganization}
      handleChangeOrganization={handleChangeOrganization}
    />
  );
};
