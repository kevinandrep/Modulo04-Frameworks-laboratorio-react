export interface ProductsModelApi {
  id: number;
  entregado: boolean;
  descripcion: string;
  importe: number;
}

export interface ProductsVm {
  id: number;
  entregado: boolean;
  descripcion: string;
  importe: number;
  validado: boolean;
}
