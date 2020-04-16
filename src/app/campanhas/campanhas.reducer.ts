import {
  CampanhaState,
  initialState,
  campanhasAdapter
} from './campanhas.state';
import {
  CampanhasActions,
  CampanhasTypesActions,
  BuscarCampanhasAction
} from './campanhas.actions';

export function campanhaReducer(
  state: CampanhaState = initialState,
  action: CampanhasActions
): CampanhaState {
  switch (action.type) {
    case CampanhasTypesActions.BUSCAR:
      return {
        ...state,
        loading: true
      };

    case CampanhasTypesActions.BUSCAR_SUCCESS:
      return {
        ...state,
        ids: action.campanhas.map(campanha => campanha.id),
        entities: action.campanhas.reduce(
          (curr, next) => ({ ...curr, [next.id]: next }),
          {}
        ),
        loading: false
      };

    case CampanhasTypesActions.CRIAR:
      return {
        ...state,
        loading: true
      };

    case CampanhasTypesActions.CRIAR_SUCCESS:
      return {
        ...state,

        loading: false
      };

    //se não estiver selecionado buscar no erver, criar uma effect pra isso
    case CampanhasTypesActions.SELECIONAR:
      return {
        ...state,
        selecionada: parseInt(action.id),
        selecionadaLoading: true
      };

    case CampanhasTypesActions.SELECIONAR_SUCCESS:
      return campanhasAdapter.addOne(action.campanha, {
        ...state,
        selecionadaLoading: false
      });

    default:
      return state;
  }
}
