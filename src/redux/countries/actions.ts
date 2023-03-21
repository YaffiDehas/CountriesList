import {
    createAction,
    createAsyncAction,
} from 'typesafe-actions';
import {
    Country,
} from './types';

export const getCountriesList = createAsyncAction(
    'COUNTRY/GET_COUNTRY_LIST_REQUEST',
    'COUNTRY/GET_COUNTRY_LIST_SUCCESS',
    'COUNTRY/GET_COUNTRY_LIST_FAILURE',
)<void, Country[], string>();

export const getUserDetails = createAction(
    'COUNTRIES/GET_COUNTRY_DETAILS',
)<number>();
