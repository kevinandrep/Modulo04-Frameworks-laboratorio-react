import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import type { PropsWithChildren } from "react";

export const AppLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      {/* Header */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">LISTA DE USUARIOS </Typography>
        </Toolbar>
      </AppBar>

      {/* Contenido */}
      <Container sx={{ flex: 1, mt: 5 }}>{children}</Container>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          backgroundColor: "#1976d2",
          color: "white",
          textAlign: "center",
          padding: 5,
        }}
      >
        <Typography variant="body2">KPB - Bootcamp Lemoncode</Typography>
      </Box>
    </Box>
  );
};
