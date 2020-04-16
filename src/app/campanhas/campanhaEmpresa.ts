export class CampanhaEmpresa {
  id: number;
  campanha_id: number;
  empresa_id: number;
  quantidade: number;
  campanhaEmpresa: CampanhaEmpresa;

  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }
}
