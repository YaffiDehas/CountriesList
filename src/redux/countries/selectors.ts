import { createSelector } from 'reselect';
import { AppState } from '../reducers';

export const getCountriesState = createSelector((state: AppState) => state, ({ countries }) => countries);
export const getCountriesListSelector = createSelector(getCountriesState, ({ countriesList }) => countriesList);
export const getLoadingSelector = createSelector(getCountriesState, ({ loading }) => loading);
