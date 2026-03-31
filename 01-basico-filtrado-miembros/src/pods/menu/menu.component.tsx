import {
  Container,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Button,
} from "@mui/material";
import { Grid } from "@mui/material";
import { appRoutes } from "../../router";
import { Link as RouterLink } from "react-router-dom";

interface Props {
  handleEnterList: (list: string) => void;
}

export const MenuApp = ({ handleEnterList }: Props) => {
  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography variant="h2" align="center" gutterBottom marginBottom={10}>
        LISTAS A ELEGIR
      </Typography>

      <Grid container spacing={6}>
        {/* Rick & Morty */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Card
            sx={{
              transition: "0.3s",
              "&:hover": { transform: "scale(1.1)" },
            }}
          >
            <CardActionArea
              onClick={() => handleEnterList(appRoutes.listRickMorty)}
            >
              <CardMedia
                component="img"
                height="180"
                image="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
              />
              <CardContent>
                <Typography variant="h6">Lista de Rick y Morty</Typography>
                <Typography variant="body2" color="text.secondary">
                  Ver personajes de la API
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        {/* GitHub */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Card
            sx={{
              transition: "0.3s",
              "&:hover": { transform: "scale(1.1)" },
            }}
          >
            <CardActionArea onClick={() => handleEnterList(appRoutes.list)}>
              <CardMedia
                component="img"
                height="180"
                image="https://avatars.githubusercontent.com/u/9919?s=200&v=4"
              />
              <CardContent>
                <Typography variant="h6">Lista de miembros de Git</Typography>
                <Typography variant="body2" color="text.secondary">
                  Ver miembros de una organización
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
      <Box mt={3} display="flex" justifyContent="center">
        <Button
          variant="contained"
          color="primary"
          component={RouterLink}
          to={appRoutes.root}
        >
          Salir
        </Button>
      </Box>
    </Container>
  );
};
