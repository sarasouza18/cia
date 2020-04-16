import { Injectable } from '@angular/core';
import {
  CampanhasTypesActions,
  BuscarCampanhasSuccessAction,
  CriarCampanhaAction,
  CriarCampanhaSuccessAction,
  SelecionarCampanhaAction,
  SelecionarCampanhaSuccessAction,
  BuscarCampanhasAction,
  BuscarCampanhasMaterialAction,
  BuscarCampanhasEmpresaAction,
  BuscarCampanhasTipoAction,
  BuscarCampanhasNdAction,
  BuscarCampanhasModeloAction,
  BuscarCampanhasEmpresaSuccessAction,
  BuscarCampanhasEmpresaFailction,
  BuscarCampanhasFailction,
  BuscarCampanhasMaterialFailction,
  BuscarCampanhasMaterialSuccessAction,
  BuscarCampanhasModeloFailction,
  BuscarCampanhasModeloSuccessAction,
  BuscarCampanhasNdFailction,
  BuscarCampanhasNdSuccessAction,
  BuscarCampanhasTipoFailction,
  BuscarCampanhasTipoSuccessAction,
  SelecionarCampanhaEmpresaAction,
  SelecionarCampanhaEmpresaFailAction,
  SelecionarCampanhaMaterialAction,
  SelecionarCampanhaModeloAction,
  SelecionarCampanhaTipoAction,
  SelecionarCampanhaNdAction
} from './campanhas.actions';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { CampanhasService } from './campanhas.service';
import { map, mergeMap } from 'rxjs/operators';
import { switchMap } from 'rxjs/operators';
import { Campanha } from './campanha';
import { CampanhaMaterial } from './campanhaMaterial';
import { CampanhaEmpresa } from './campanhaEmpresa';
import { CampanhaTipo } from './campanhaTipo';

@Injectable()
export class CampanhasEffects {
  constructor(
    private actions$: Actions,
    private campanhasService: CampanhasService
  ) {}

  @Effect()
  buscar$ = this.actions$.pipe(
    ofType(CampanhasTypesActions.BUSCAR),
    mergeMap(({ params }: BuscarCampanhasAction) =>
      this.campanhasService.findCampanha(params).pipe(
        map(campanhas => {
          return new BuscarCampanhasSuccessAction(campanhas['campanha']);
        })
        // catchError(() => new BuscarCampanhasFailAction())
      )
    )
  );

  @Effect()
  buscarCampanhaEmpresa$ = this.actions$.pipe(
    ofType(CampanhasTypesActions.BUSCAR),
    mergeMap(({ params }: BuscarCampanhasEmpresaAction) =>
      this.campanhasService.findCampanhaEmpresa(params).pipe(
        map(campanhasEmpresa => {
          return new BuscarCampanhasEmpresaSuccessAction(
            campanhasEmpresa['campanha_empresa']
          );
        })
        // catchError(() => new BuscarCampanhasFailAction())
      )
    )
  );

  @Effect()
  buscarCampanhaMaterial$ = this.actions$.pipe(
    ofType(CampanhasTypesActions.BUSCAR),
    mergeMap(({ params }: BuscarCampanhasMaterialAction) =>
      this.campanhasService.findCampanhaMaterial(params).pipe(
        map(campanhasMaterial => {
          return new BuscarCampanhasMaterialSuccessAction(
            campanhasMaterial['campanha_material']
          );
        })
        // catchError(() => new BuscarCampanhasFailAction())
      )
    )
  );

  @Effect()
  buscarCampanhaTipo$ = this.actions$.pipe(
    ofType(CampanhasTypesActions.BUSCAR),
    mergeMap(({ params }: BuscarCampanhasTipoAction) =>
      this.campanhasService.findCampanhaTipo(params).pipe(
        map(campanhasTipo => {
          return new BuscarCampanhasTipoSuccessAction(
            campanhasTipo['campanha_tipo']
          );
        })
        // catchError(() => new BuscarCampanhasFailAction())
      )
    )
  );

  @Effect()
  buscarCampanhaModelo$ = this.actions$.pipe(
    ofType(CampanhasTypesActions.BUSCAR),
    mergeMap(({ params }: BuscarCampanhasModeloAction) =>
      this.campanhasService.findCampanhaModelo(params).pipe(
        map(campanhasModelo => {
          return new BuscarCampanhasModeloSuccessAction(
            campanhasModelo['campanha_modelo']
          );
        })
        // catchError(() => new BuscarCampanhasFailAction())
      )
    )
  );

  @Effect()
  buscarCampanhaNd$ = this.actions$.pipe(
    ofType(CampanhasTypesActions.BUSCAR),
    mergeMap(({ params }: BuscarCampanhasNdAction) =>
      this.campanhasService.findCampanhaNd(params).pipe(
        map(campanhasNd => {
          return new BuscarCampanhasModeloSuccessAction(
            campanhasNd['campanha_nd']
          );
        })
        // catchError(() => new BuscarCampanhasFailAction())
      )
    )
  );

  @Effect()
  criar$ = this.actions$.pipe(
    ofType(CampanhasTypesActions.CRIAR),
    mergeMap((action: CriarCampanhaAction) =>
      this.campanhasService
        .createCampanha(action.campanha)
        .pipe(
          map(
            campanha =>
              new CriarCampanhaSuccessAction(<any>campanha['campanha'])
          )
        )
    )
  );

  @Effect()
  selecionar$ = this.actions$.pipe(
    ofType(CampanhasTypesActions.SELECIONAR),
    mergeMap((action: SelecionarCampanhaAction) =>
      this.campanhasService
        .getCampanhaById(action.id)
        .pipe(
          map(
            campanha =>
              new SelecionarCampanhaSuccessAction(<any>campanha['campanha'])
          )
        )
    )
  );

  @Effect()
  selecionarCampanhaEmpresa$ = this.actions$.pipe(
    ofType(CampanhasTypesActions.SELECIONAR),
    mergeMap((action: SelecionarCampanhaEmpresaAction) =>
      this.campanhasService
        .getCampanhasEmpresa()
        .pipe(
          map(
            campanhaEmpresa =>
              new SelecionarCampanhaSuccessAction(<any>(
                campanhaEmpresa['campanha_empresa']
              ))
          )
        )
    )
  );

  // @Effect()
  selecionarCampanhaMaterial$ = this.actions$.pipe(
    ofType(CampanhasTypesActions.SELECIONAR),
    mergeMap((action: SelecionarCampanhaMaterialAction) =>
      this.campanhasService
        .getCampanhasMaterial()
        .pipe(
          map(
            campanhaMaterial =>
              new SelecionarCampanhaSuccessAction(<any>(
                campanhaMaterial['campanha_material']
              ))
          )
        )
    )
  );

  @Effect()
  selecionarCampanhaModelo$ = this.actions$.pipe(
    ofType(CampanhasTypesActions.SELECIONAR),
    mergeMap((action: SelecionarCampanhaModeloAction) =>
      this.campanhasService
        .getCampanhasModelo()
        .pipe(
          map(
            campanhaModelo =>
              new SelecionarCampanhaSuccessAction(<any>(
                campanhaModelo['campanha_modelo']
              ))
          )
        )
    )
  );

  @Effect()
  selecionarCampanhaTipo$ = this.actions$.pipe(
    ofType(CampanhasTypesActions.SELECIONAR),
    mergeMap((action: SelecionarCampanhaTipoAction) =>
      this.campanhasService
        .getCampanhasTipo()
        .pipe(
          map(
            CampanhaTipo =>
              new SelecionarCampanhaSuccessAction(<any>(
                CampanhaTipo['campanha_tipo']
              ))
          )
        )
    )
  );
}
