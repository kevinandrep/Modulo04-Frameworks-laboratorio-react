import { generatePath, Link as RouterLink } from "react-router-dom";
import { appRoutes } from "../../../router";
import type { MemberGitEntity } from "../../../core/members.model";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

interface Props {
  member: MemberGitEntity;
}

export const MemberGitRow = ({ member }: Props) => {
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            sx={{ height: 240 }}
            image={member.avatar_url}
            title={member.login}
          ></CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {member.login}
            </Typography>
            <CardActions>
              <Button
                size="small"
                component={RouterLink}
                to={generatePath(appRoutes.detail, { id: member.login })}
              >
                Ver Detalles
              </Button>
            </CardActions>
          </CardContent>
        </CardActionArea>
      </Card>

      {/* <Link to={generatePath(appRoutes.detail, { id: member.login })}>
        {member.login}
      </Link> */}
    </>
  );
};
