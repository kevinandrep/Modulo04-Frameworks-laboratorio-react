import { Link as LinkRouter, Outlet } from "react-router-dom";
import { useState } from "react";
import { Cart } from "../scenes/cart";
import { appRoutes } from "../router/routes";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Drawer,
  IconButton,
  Container,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const Layout = () => {
  const [open, setOpen] = useState(false);

  const toggleCart = () => {
    setOpen((prev) => !prev);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* HEADER */}
      <AppBar position="static" sx={{ backgroundColor: "#2f2f2f" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <Button
              color="inherit"
              component={LinkRouter}
              to={appRoutes.kitties}
              sx={{ fontSize: "1.5rem" }}
            >
              Kitties
            </Button>
            <Button
              color="inherit"
              component={LinkRouter}
              to={appRoutes.puppies}
              sx={{ fontSize: "1.5rem" }}
            >
              Puppies
            </Button>
          </Box>

          <Typography variant="h3">TIENDA DE IMÁGENES</Typography>

          <IconButton color="inherit" onClick={toggleCart}>
            <ShoppingCartIcon sx={{ fontSize: 50 }} />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* MAIN */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Outlet />
      </Box>

      {/* DRAWER (CARRITO) */}
      <Drawer anchor="right" open={open} onClose={toggleCart}>
        <Box sx={{ width: 300, p: 2 }}>
          <Cart />
        </Box>
      </Drawer>

      {/* FOOTER */}
      <Box
        component="footer"
        sx={{
          p: 4,
          backgroundColor: "#2f2f2f",
          textAlign: "center",
          color: "white",
        }}
      >
        <Container>
          <Typography variant="body1" fontWeight="bold">
            Mi Tienda de imagenes
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mt: 1, color: "inherit" }}
          >
            © KAPB - Lemoncode
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};
