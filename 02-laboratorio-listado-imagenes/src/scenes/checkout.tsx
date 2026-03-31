import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import { useCart } from "../core/useCart";

export const Checkout = () => {
  const { cart } = useCart();

  return (
    <>
      <h1>Confirmar pedido</h1>

      <Box sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Carrito de compras
        </Typography>

        <Stack spacing={2}>
          {cart.map((pic) => (
            <Card
              key={pic.id}
              sx={{
                display: "flex",
                alignItems: "center",
                p: 1,
                gap: 2,
              }}
            >
              <CardMedia
                component="img"
                image={pic.picUrl}
                alt={pic.title}
                sx={{ width: 100, height: 100, borderRadius: 2 }}
              />
              <CardContent sx={{ flex: 1 }}>
                <Typography>{pic.title}</Typography>

                <Typography variant="body2" color="text.secondary">
                  ID: {pic.id}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Stack>
        <Typography sx={{ mt: 3 }}>Total productos: {cart.length}</Typography>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
          onClick={() => alert("pedido confirmado")}
        >
          Confirmar pedido
        </Button>
      </Box>
    </>
  );
};
