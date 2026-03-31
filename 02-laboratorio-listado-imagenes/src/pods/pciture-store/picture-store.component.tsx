import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Checkbox,
  Grid,
  Typography,
} from "@mui/material";
import type { PictureInfo } from "../../core/api/picture.model";

interface Props {
  pictures: PictureInfo[];
  cart: PictureInfo[];
  handleChange: (pic: PictureInfo) => void;
}

export const PictureStore = ({ pictures, cart, handleChange }: Props) => {
  return (
    <>
      <Grid container spacing={4}>
        {pictures.map((pic) => {
          const isChecked = cart.some((item) => item.id === pic.id);

          return (
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={pic.id}>
              <Card
                sx={{
                  borderRadius: 2,
                  boxShadow: 6,
                  transition: "0.3s",
                  "&:hover": {
                    transform: "scale(1.1)",
                    boxShadow: 6,
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="180"
                  image={pic.picUrl}
                  alt={pic.title}
                />

                <CardContent>
                  <Typography textAlign="center">{pic.title}</Typography>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "center",
                    }}
                  >
                    <Typography>Añadir al Carrito</Typography>
                    <Checkbox
                      checked={isChecked}
                      onChange={() => handleChange(pic)}
                      size="large"
                    />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};
