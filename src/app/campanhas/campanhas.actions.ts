import { CampanhaModel } from './campanha.model';
import { CampanhaEmpresaModel } from './campanhaEmpresa.model';
import { CampanhaTipoModel } from './campanhaTipo.model';
import { CampanhaModeloModel } from './campanhaModelo.model';
import { CampanhaMaterialModel } from './campanhaMaterial.model';
import { CampanhaNdModel } from './campanhaNd.model';

import { Query } from '@angular/core';

export enum CampanhasTypesActions {
  INCREMENT = '[campanhas] increment',
  BUSCAR = '[campanhas] buscar campanhas',
  BUSCAR_SUCCESS = '[campanhas] buscar campanhas success',
  BUSCAR_FAIL = '[campanhas] buscar campanhas fail',
  CRIAR = '[campanhas] criar campanha',
  CRIAR_SUCCESS = '[campanhas] criar campanha success',
  CRIAR_FAIL = '[campanhas] criar campanha fail',
  SELECIONAR = '[campanhas] selecionar campanha',
  SELECIONAR_SUCCESS = '[campanhas] selecionar campanha success',
  SELECIONAR_FAIL = '[campanhas] selecionar campanha fail'
}

export class BuscarCampanhasAction {
  readonly type = CampanhasTypesActions.BUSCAR;

  constructor(public params: any) {}
}
export class BuscarCampanhasEmpresaAction {
  readonly type = CampanhasTypesActions.BUSCAR;

  constructor(public params: any) {}
}
export class BuscarCampanhasMaterialAction {
  readonly type = CampanhasTypesActions.BUSCAR;

  constructor(public params: any) {}
}
export class BuscarCampanhasTipoAction {
  readonly type = CampanhasTypesActions.BUSCAR;

  constructor(public params: any) {}
}

export class BuscarCampanhasNdAction {
  readonly type = CampanhasTypesActions.BUSCAR;

  constructor(public params: any) {}
}

export class BuscarCampanhasModeloAction {
  readonly type = CampanhasTypesActions.BUSCAR;

  constructor(public params: any) {}
}

export class BuscarCampanhasSuccessAction {
  readonly type = CampanhasTypesActions.BUSCAR_SUCCESS;

  constructor(public campanhas: CampanhaModel[]) {}
}

export class BuscarCampanhasFailction {
  readonly type = CampanhasTypesActions.BUSCAR_FAIL;

  constructor(public message: string) {}
}

export class BuscarCampanhasMaterialSuccessAction {
  readonly type = CampanhasTypesActions.BUSCAR_SUCCESS;

  constructor(public campanhasMaterial: CampanhaMaterialModel[]) {}
}

export class BuscarCampanhasMaterialFailction {
  readonly type = CampanhasTypesActions.BUSCAR_FAIL;

  constructor(public message: string) {}
}

export class BuscarCampanhasModeloSuccessAction {
  readonly type = CampanhasTypesActions.BUSCAR_SUCCESS;

  constructor(public campanhasModelo: CampanhaModeloModel[]) {}
}

export class BuscarCampanhasModeloFailction {
  readonly type = CampanhasTypesActions.BUSCAR_FAIL;

  constructor(public message: string) {}
}

export class BuscarCampanhasTipoSuccessAction {
  readonly type = CampanhasTypesActions.BUSCAR_SUCCESS;

  constructor(public CampanhasTipo: CampanhaTipoModel[]) {}
}

export class BuscarCampanhasTipoFailction {
  readonly type = CampanhasTypesActions.BUSCAR_FAIL;

  constructor(public message: string) {}
}

export class BuscarCampanhasNdSuccessAction {
  readonly type = CampanhasTypesActions.BUSCAR_SUCCESS;

  constructor(public CampanhasNd: CampanhaNdModel[]) {}
}

export class BuscarCampanhasNdFailction {
  readonly type = CampanhasTypesActions.BUSCAR_FAIL;

  constructor(public message: string) {}
}

export class BuscarCampanhasEmpresaSuccessAction {
  readonly type = CampanhasTypesActions.BUSCAR_SUCCESS;

  constructor(public CampanhasEmpresa: CampanhaEmpresaModel[]) {}
}

export class BuscarCampanhasEmpresaFailction {
  readonly type = CampanhasTypesActions.BUSCAR_FAIL;

  constructor(public message: string) {}
}

export class CriarCampanhaAction {
  readonly type = CampanhasTypesActions.CRIAR;

  constructor(public campanha: CampanhaModel) {}
}

export class CriarCampanhaSuccessAction {
  readonly type = CampanhasTypesActions.CRIAR_SUCCESS;

  constructor(public campanha: CampanhaModel) {}
}

export class CriarCampanhaFailction {
  readonly type = CampanhasTypesActions.CRIAR_FAIL;

  constructor(public message: string) {}
}

export class SelecionarCampanhaAction {
  readonly type = CampanhasTypesActions.SELECIONAR;

  constructor(public id: string) {}
}

export class SelecionarCampanhaEmpresaAction {
  readonly type = CampanhasTypesActions.SELECIONAR;

  constructor(public id: string) {}
}

export class SelecionarCampanhaModeloAction {
  readonly type = CampanhasTypesActions.SELECIONAR;

  constructor(public id: string) {}
}

export class SelecionarCampanhaMaterialAction {
  readonly type = CampanhasTypesActions.SELECIONAR;

  constructor(public id: string) {}
}

export class SelecionarCampanhaNdAction {
  readonly type = CampanhasTypesActions.SELECIONAR;

  constructor(public id: string) {}
}

export class SelecionarCampanhaTipoAction {
  readonly type = CampanhasTypesActions.SELECIONAR;

  constructor(public id: string) {}
}

export class SelecionarCampanhaSuccessAction {
  readonly type = CampanhasTypesActions.SELECIONAR_SUCCESS;

  constructor(public campanha: CampanhaModel) {}
}

export class SelecionarCampanhaFailAction {
  readonly type = CampanhasTypesActions.SELECIONAR_FAIL;

  constructor(public message: string) {}
}

export class SelecionarCampanhaMaterialSuccessAction {
  readonly type = CampanhasTypesActions.SELECIONAR_SUCCESS;

  constructor(public campanhaMaterial: CampanhaMaterialModel) {}
}

export class SelecionarCampanhaMaterialFailAction {
  readonly type = CampanhasTypesActions.SELECIONAR_FAIL;

  constructor(public message: string) {}
}

export class SelecionarCampanhaEmpresaSuccessAction {
  readonly type = CampanhasTypesActions.SELECIONAR_SUCCESS;

  constructor(public campanhaEmpresa: CampanhaEmpresaModel) {}
}

export class SelecionarCampanhaEmpresaFailAction {
  readonly type = CampanhasTypesActions.SELECIONAR_FAIL;

  constructor(public message: string) {}
}

export class SelecionarCampanhaModeloSuccessAction {
  readonly type = CampanhasTypesActions.SELECIONAR_SUCCESS;

  constructor(public campanhaModelo: CampanhaModeloModel) {}
}

export class SelecionarCampanhaModeloFailAction {
  readonly type = CampanhasTypesActions.SELECIONAR_FAIL;

  constructor(public message: string) {}
}

export class SelecionarCampanhaTipoSuccessAction {
  readonly type = CampanhasTypesActions.SELECIONAR_SUCCESS;

  constructor(public campanhaTipo: CampanhaTipoModel) {}
}

export class SelecionarCampanhaTipoFailAction {
  readonly type = CampanhasTypesActions.SELECIONAR_FAIL;

  constructor(public message: string) {}
}

export class SelecionarCampanhaNdSuccessAction {
  readonly type = CampanhasTypesActions.SELECIONAR_SUCCESS;

  constructor(public campanhaNd: CampanhaNdModel) {}
}

export class SelecionarCampanhaNdFailAction {
  readonly type = CampanhasTypesActions.SELECIONAR_FAIL;

  constructor(public message: string) {}
}

export type CampanhasActions =
  | BuscarCampanhasAction
  | BuscarCampanhasSuccessAction
  | BuscarCampanhasFailction
  | CriarCampanhaAction
  | CriarCampanhaSuccessAction
  | CriarCampanhaFailction
  | SelecionarCampanhaAction
  | SelecionarCampanhaSuccessAction
  | SelecionarCampanhaFailAction;
