export class CampanhaNd {
  id: number;
  data_geracao: Date;
  data_envio: Date;
  data_pagamento: Date;
  data_vencimento: Date;
  data_cancelamento: Date;

  destinatario_id: number;
  empresa_id: number;
  numero_nd: number;
  numero_fatura: number;
  valor: number;
  nd_id: number;
  status: string;
  campanhaNd: CampanhaNd;

  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }
}
