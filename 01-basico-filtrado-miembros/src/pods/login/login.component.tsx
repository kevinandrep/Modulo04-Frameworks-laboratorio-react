import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

interface Props {
  onLogin: (username: string, password: string) => void;
}

interface User {
  name: string;
  password: string;
}
//Componente Login - logica de UI
export const Login: React.FC<Props> = ({ onLogin }) => {
  const [user, setUser] = useState<User>({ name: "", password: "" });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onLogin(user.name, user.password);
  };

  const handleChange =
    (field: keyof User) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setUser({ ...user, [field]: e.target.value });
    };

  return (
    <>
      <Container maxWidth="sm">
        <Paper elevation={3} sx={{ padding: 4, marginTop: 8 }}>
          <Typography variant="h5" align="center" gutterBottom>
            LOGIN
          </Typography>

          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              label="Usuario"
              variant="outlined"
              fullWidth
              margin="normal"
              value={user.name}
              onChange={handleChange("name")}
            />

            <TextField
              label="Contraseña"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              value={user.password}
              onChange={handleChange("password")}
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ marginTop: 2 }}
            >
              LOGIN
            </Button>
          </Box>
          <Typography>Usuario : admin</Typography>
          <Typography>Password : test</Typography>
        </Paper>
      </Container>
    </>
  );
};
