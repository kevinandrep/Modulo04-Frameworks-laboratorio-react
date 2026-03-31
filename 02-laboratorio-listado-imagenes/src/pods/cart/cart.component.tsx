import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Modal,
  Typography,
} from "@mui/material";
import { Checkout } from "../../scenes/checkout";
import type { PictureInfo } from "../../core/api/picture.model";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

interface Props {
  cart: PictureInfo[];
  handleRemove: (id: string) => void;
  setCart: React.Dispatch<React.SetStateAction<PictureInfo[]>>;
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  maxHeight: "50vh",
  overflowY: "auto",
};

export const Cart = ({ cart, handleRemove, setCart }: Props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Box>
        {/* Título */}
        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          <Typography variant="h6" gutterBottom>
            Mi carrito
          </Typography>
          <Button
            disabled={cart.length === 0 ? true : false}
            variant="contained"
            onClick={handleOpen}
          >
            Comprar
          </Button>
        </Box>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Checkout></Checkout>
          </Box>
        </Modal>

        {/* Lista */}
        <List>
          {cart.map((item) => (
            <Box key={item.id}>
              <ListItem
                secondaryAction={
                  <IconButton edge="end" onClick={() => handleRemove(item.id)}>
                    <DeleteIcon />
                  </IconButton>
                }
              >
                {/* Imagen */}
                <ListItemAvatar>
                  <Avatar
                    variant="rounded"
                    src={item.picUrl}
                    alt={item.title}
                  />
                </ListItemAvatar>

                {/* Texto */}
                <ListItemText primary={item.title} />
              </ListItem>

              {/* Línea separadora */}
              <Divider />
            </Box>
          ))}
        </List>
        {cart.length > 0 ? (
          <Box sx={{ mt: 2 }}>
            <Button
              variant="contained"
              color="error"
              fullWidth
              onClick={() => setCart([])}
            >
              Vaciar carrito
            </Button>
          </Box>
        ) : (
          <Typography variant="h5" align="center" mt={3}>
            No hay productos
          </Typography>
        )}
      </Box>
    </>
  );
};
