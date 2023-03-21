import { Reducer } from 'redux';
import {
    ActionType,
    getType,
} from 'typesafe-actions';
import * as actions from './actions';
import { LoadingState } from '../constans';
import { CountrysState } from './types';

type Actions = ActionType<typeof actions>;

const initialState: CountrysState = {
    loading: LoadingState.IDLE,
    countriesList: []
};

const userReducer: Reducer<CountrysState, Actions> = (state = initialState, action) => {
    switch (action.type) {
        case getType(actions.getCountriesList.request): {
            return {
                ...state,
                loading: LoadingState.REQUEST
            };
        }
        case getType(actions.getCountriesList.success): {
            return {
                ...state,
                countriesList: action.payload,
                loading: LoadingState.SUCCESS
            };
        }

        case getType(actions.getCountriesList.failure): {
            return {
                ...state,
                loading: LoadingState.FAILURE
            };
        }

        default: {
            return state;
        }
    }
};

export default userReducer;
