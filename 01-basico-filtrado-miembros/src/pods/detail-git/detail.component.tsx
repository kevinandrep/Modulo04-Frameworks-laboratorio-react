import {
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { appRoutes } from "../../router";
import type { MemberGitDetailEntity } from "./detail.vm";

interface Props {
  member: MemberGitDetailEntity;
  id: string | undefined;
}

export const DetailGitMember = ({ member }: Props) => {
  return (
    <Box sx={{ mt: 4, mb: 4 }}>
      {/* Grid centrado */}
      <Grid container justifyContent="center">
        <Grid size={{ xs: 12, sm: 8, md: 6 }}>
          <Card
            sx={{
              boxShadow: 3,
              transition: "0.3s",
              "&:hover": { transform: "scale(1.02)" },
            }}
          >
            <CardMedia
              component="img"
              height="400"
              image={member.avatar_url}
              alt={member.login}
            />

            <CardContent>
              <Typography variant="h5" gutterBottom>
                {member.name}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                @{member.login}
              </Typography>
              <Typography variant="body2" gutterBottom>
                Company: {member.company}
              </Typography>
              <Typography variant="body2" gutterBottom>
                Location: {member.location}
              </Typography>

              {/* Estadísticas */}
              <Box mt={2} mb={1}>
                <Typography variant="body2">
                  Public Repos: {member.public_repos}
                </Typography>
                <Typography variant="body2">
                  Followers: {member.followers}
                </Typography>
              </Box>

              <Box mt={3}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  component={RouterLink}
                  to={appRoutes.list}
                >
                  Regresar a la lista
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};
