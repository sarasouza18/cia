
export class Campanha {
    id: string;
    descricao: string;
    data_inicial: Date;
    data_final: Date;
    franqueador_id: string;
    referencia: string;
    quantidade: number;
    valor: number;
    desconto: number;
    id_microvix: string;
    percentual_impostos_custo: number;
    rebate_por_target: boolean;
    campanha: Campanha;


    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }

}