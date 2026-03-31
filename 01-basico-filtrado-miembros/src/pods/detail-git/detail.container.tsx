import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { MemberGitDetailEntity } from "./detail.vm";
import { getMemberGitDetail } from "./api";
import { mapMemberGitDetailEntityToVM } from "./detail.mappers";
import { DetailGitMember } from "./detail.component";

export const DetailContainer = () => {
  const [member, setMember] = useState<MemberGitDetailEntity | undefined>(
    undefined,
  );
  const { id } = useParams();

  useEffect(() => {
    getMemberGitDetail(id).then(mapMemberGitDetailEntityToVM).then(setMember);
  }, [id]);

  return (
    <>
      {member ? (
        <DetailGitMember member={member} id={id}></DetailGitMember>
      ) : (
        <p>Usuario no encontrado</p>
      )}
    </>
  );
};
