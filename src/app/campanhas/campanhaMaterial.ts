export class CampanhaMaterial {
  id: number;
  campanha_id: number;
  material_id: number;
  quantidade: number;
  valor: number;
  desconto: number;
  campanha_simulacao_id: number;

  campanhaMaterial: CampanhaMaterial;

  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }
}
