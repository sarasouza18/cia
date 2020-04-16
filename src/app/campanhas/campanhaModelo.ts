export class CampanhaModelo {
  id: number;
  campanha_id: number;
  quantidade: number;
  valor: number;
  desconto: number;
  id_microvix: string;
  campanha_simulacao_id: number;

  campanhaModelo: CampanhaModelo;

  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }
}
