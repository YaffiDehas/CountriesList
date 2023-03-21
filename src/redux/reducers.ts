
import { combineReducers } from 'redux';
import { StateType } from 'typesafe-actions';
import countries from './countries/reducer';

export const reducers = combineReducers({
    countries,
});

export type AppState = StateType<typeof reducers>;
