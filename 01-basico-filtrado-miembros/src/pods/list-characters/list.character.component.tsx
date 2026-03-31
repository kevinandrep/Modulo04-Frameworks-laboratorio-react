import {
  Box,
  Grid,
  TextField,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import type { CharacterEntity } from "../../contexto/characters/characters.model";
import { Link as RouterLink } from "react-router-dom";
import { appRoutes } from "../../router";

interface Props {
  characters: CharacterEntity[];
  setSearch: (value: string) => void;
}

export const ListCharacters = ({ characters, setSearch }: Props) => {
  return (
    <>
      {/* Buscador */}
      <Box display="flex" gap={3} marginBottom={3}>
        <TextField
          label="Filtrar por nombre"
          variant="outlined"
          fullWidth
          onChange={(e) => setSearch(e.target.value)}
        />
      </Box>

      {/* Lista */}
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {characters.map((character) => (
            <Grid key={character.id} size={{ xs: 2, sm: 4, md: 3 }}>
              <Card
                sx={{
                  transition: "0.3s",
                  "&:hover": { transform: "scale(1.03)" },
                }}
              >
                <CardMedia
                  component="img"
                  height="160"
                  image={character.image}
                  alt={character.name}
                />

                <CardContent>
                  <Typography variant="h6">{character.name}</Typography>

                  <Typography variant="body2" color="text.secondary">
                    {character.species}
                  </Typography>

                  <Typography variant="body2">
                    Estado: {character.status}
                  </Typography>

                  <Typography variant="caption">ID: {character.id}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box
        marginTop={3}
        marginBottom={3}
        display="flex"
        justifyContent="center"
      >
        <Button
          variant="contained"
          color="success"
          component={RouterLink}
          to={appRoutes.menu}
        >
          Regresar
        </Button>
      </Box>
    </>
  );
};
