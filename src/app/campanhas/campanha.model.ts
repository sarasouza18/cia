export interface CampanhaModel {
  id: number;
  descricao: string;
  data_inicial: Date;
  data_final: Date;
  franqueador_id: string;
  campanha_tipo_id: number;
  referencia: string;
  quantidade: number;
  valor: number;
  desconto: number;
  nd_id: number;
  status: string;
  id_microvix: string;
  percentual_impostos_custo: number;
  rebate_por_target: boolean;
  // campanha: Campanha;
}
