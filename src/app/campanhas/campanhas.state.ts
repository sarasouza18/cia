import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { CampanhaModel } from './campanha.model';

export interface CampanhaState extends EntityState<CampanhaModel> {
  loading: boolean;
  selecionada: number;
  selecionadaLoading: boolean;
}

export const campanhasAdapter = createEntityAdapter<CampanhaModel>();

export const initialState: CampanhaState = campanhasAdapter.getInitialState({
  loading: false,
  selecionada: null,
  selecionadaLoading: false
});

export const selectCampanhas = createFeatureSelector<CampanhaState>(
  'campanhas'
);

const { selectAll } = campanhasAdapter.getSelectors();

export const selectCampanhasAll = createSelector(
  selectCampanhas,
  selectAll
);

export const selectCampanhasSelecionadaId = createSelector(
  selectCampanhas,
  state => state.selecionada
);

export const selectCampanhasSelecionada = createSelector(
  selectCampanhas,
  selectCampanhasSelecionadaId,
  (state: CampanhaState, selecionadaId) => state.entities[selecionadaId] || {}
);
