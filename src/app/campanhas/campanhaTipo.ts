export class CampanhaTipo {
  id: number;
  descricao: string;
  regra: number;
  codigo_dre: string;
  campanhaTipo: CampanhaTipo;

  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }
}
