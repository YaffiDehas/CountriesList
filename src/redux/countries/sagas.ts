import {
    all,
    call,
    takeLatest,
    put
} from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import {
    getType,
} from 'typesafe-actions';
import { getCountries } from './api';
import * as actions from './actions';
import {
    Country
} from './types';

export function* requestGetCountryList() {
    try {
        const response: AxiosResponse<Array<Country>> = yield call(getCountries);
        const countries = response.data.filter((country) => country.subregion && country.subregion.includes("Asia"));
        yield put(actions.getCountriesList.success(countries));
    } catch (e) {
        yield put(actions.getCountriesList.failure(''));
    }
}

export function* watchGetCountriesList() {
    yield takeLatest(getType(actions.getCountriesList.request), requestGetCountryList);
}

export function* watchUsers() {
    yield all([
        call(watchGetCountriesList)
    ]);
}
