import {
  Checkbox,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import type { ProductsVm } from "../../core/api/product.model";

interface Props {
  products: ProductsVm[];
  handleRowClick: (id: number) => void;
  handleImporteChange: (id: number, value: number) => void;
}

export const OrderTable = ({
  products,
  handleImporteChange,
  handleRowClick,
}: Props) => {
  return (
    <>
      <TableContainer component={Paper} sx={{ mt: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Estado</TableCell>
              <TableCell>Descripción</TableCell>
              <TableCell>Importe</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>
                  <Checkbox
                    checked={product.validado}
                    onChange={() => handleRowClick(product.id)}
                  />
                </TableCell>

                <TableCell>
                  {product.validado ? "Valido" : "Pendiente"}
                </TableCell>

                <TableCell>{product.descripcion}</TableCell>

                <TableCell>
                  <TextField
                    type="number"
                    value={product.importe}
                    onChange={(e) =>
                      handleImporteChange(product.id, Number(e.target.value))
                    }
                    size="small"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
