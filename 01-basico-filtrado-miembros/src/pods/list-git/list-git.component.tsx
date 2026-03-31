import { Link as RouterLink } from "react-router-dom";
import type { MemberGitEntity } from "../../core/members.model";
import React from "react";
import { MemberGitRow } from "./components";
import { Box, Button, Grid, TextField } from "@mui/material";
import { appRoutes } from "../../router";

interface Props {
  members: MemberGitEntity[];
  onChangeOrganization: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeOrganization: (e: React.SubmitEvent<HTMLFormElement>) => void;
  organization: string;
}

export const ListGit: React.FC<Props> = ({
  members,
  onChangeOrganization,
  handleChangeOrganization,
  organization,
}) => {
  return (
    <>
      <form onSubmit={handleChangeOrganization}>
        <Box display="flex" gap={5}>
          <TextField
            label="Organization"
            variant="outlined"
            value={organization}
            onChange={onChangeOrganization}
          ></TextField>
          <Button variant="contained">Cambiar Organización</Button>
        </Box>
      </form>

      <Box sx={{ flexGrow: 1 }} marginTop={5} marginBottom={3}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {members.map((member) => (
            <Grid key={member.id} size={{ xs: 2, sm: 4, md: 4 }}>
              <MemberGitRow member={member}></MemberGitRow>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box marginBottom={3}>
        <Button
          variant="contained"
          color="success"
          size="large"
          component={RouterLink}
          to={appRoutes.menu}
        >
          Regresar a Lista
        </Button>
      </Box>

      {/* <Link to="/detail">Regresa a la pagina de detalles</Link> */}
    </>
  );
};
