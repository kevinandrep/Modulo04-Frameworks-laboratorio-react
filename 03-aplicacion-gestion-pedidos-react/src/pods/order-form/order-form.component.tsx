import type { Dispatch, SetStateAction } from "react";
import type { formDataM } from "./order-form.model";
import { OrderStatusProgress } from "./components/order-status-progress";
import {
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

interface Props {
  handleSubmit: (e: React.SubmitEvent<HTMLFormElement>) => void;
  formData: formDataM;
  setFormData: Dispatch<SetStateAction<formDataM>>;
  sent: boolean;
  total: number;
  orderStatus: number;
  canSubmit: boolean;
}

export const OrderForm = ({
  handleSubmit,
  formData,
  sent,
  setFormData,
  total,
  orderStatus,
  canSubmit,
}: Props) => {
  return (
    <>
      <Paper
        sx={{
          p: 3,
          bgcolor: "var(--social-bg.)",
        }}
      >
        <Typography variant="h2" sx={{ color: "black", fontWeight: 500 }}>
          Pedido a Proveedor
        </Typography>

        <Box component="form" onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <TextField
              label="Número"
              name="num"
              placeholder="123"
              value={formData.num}
              onChange={(e) =>
                setFormData({ ...formData, num: e.target.value })
              }
            />

            <TextField
              label="Proveedor"
              name="provedor"
              placeholder="Samsung"
              value={formData.provedor}
              onChange={(e) =>
                setFormData({ ...formData, provedor: e.target.value })
              }
            />

            <TextField
              label="Fecha"
              name="fecha"
              type="date"
              value={formData.fecha}
              onChange={(e) =>
                setFormData({ ...formData, fecha: e.target.value })
              }
              sx={{
                width: 200,
                "& input::-webkit-calendar-picker-indicator": {
                  filter: "invert(1)",
                  cursor: "pointer",
                },
              }}
            />

            <Typography variant="h4">
              Importe Total: <strong>$/. {total}</strong>
            </Typography>

            <Box display="flex" justifyContent="center">
              <OrderStatusProgress value={orderStatus} />
            </Box>

            <Button variant="contained" type="submit" disabled={!canSubmit}>
              Enviar
            </Button>
          </Stack>
        </Box>

        {sent && (
          <Typography variant="h4" color="success.main" mt={2}>
            ¡ENVIADO!
          </Typography>
        )}
      </Paper>
    </>
  );
};
