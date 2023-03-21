import {
    all,
    call,
    takeLatest,
    put,
    select
} from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import {
    ActionType,
    getType,
} from 'typesafe-actions';
import { getCountries } from './api';
import * as actions from './actions';
import {
    Country
} from './types';
import { getCountriesListSelector } from './selectors';

export function* requestGetCountryList() {
    try {
        const response: AxiosResponse<Array<Country>> = yield call(getCountries);
        const countries = response.data.filter((country) => country.subregion && country.subregion.includes("Asia"));
        yield put(actions.getCountriesList.success(countries));
    } catch (e) {
        yield put(actions.getCountriesList.failure(''));
    }
}

// export function* requestAddUser({ payload }: ActionType<typeof actions.addUser.request>) {
//     try {
//         // const users: User = yield call(addUser, payload);
//         const userList: User[] = yield select(getUserListSelector)

//         yield put(actions.addUser.success({ ...payload, id: (userList.at(-1)?.id || 0) + 1 }))
//     } catch (e) {
//         yield put(actions.getUsersList.failure(''));
//     }
// }

// export function* requestEditUser({ payload }: ActionType<typeof actions.editUser.request>) {
//     try {
//         // const users: User = yield call(editUser, payload);

//         yield put(actions.editUser.success(payload))
//     } catch (e) {
//         yield put(actions.getUsersList.failure(''));
//     }
// }

// export function* requestDeleteUser({ payload }: ActionType<typeof actions.deleteUser.request>) {
//     try {
//         // const users: User = yield call(deleteUser, payload);

//         yield put(actions.deleteUser.success(payload))
//     } catch (e) {
//         yield put(actions.getUsersList.failure(''));
//     }
// }

export function* watchGetCountriesList() {
    yield takeLatest(getType(actions.getCountriesList.request), requestGetCountryList);
}

// export function* watchAddUser() {
//     yield takeLatest(getType(actions.addUser.request), requestAddUser);
// }

// export function* watchDeleteUser() {
//     yield takeLatest(getType(actions.deleteUser.request), requestDeleteUser);
// }

// export function* watchEditUser() {
//     yield takeLatest(getType(actions.editUser.request), requestEditUser);
// }

export function* watchUsers() {
    yield all([
        call(watchGetCountriesList)
        // call(watchAddUser),
        // call(watchEditUser),
        // call(watchDeleteUser),
    ]);
}
