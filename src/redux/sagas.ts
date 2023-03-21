
import { all } from 'redux-saga/effects';
import { watchUsers } from './countries/sagas';

export function* rootSaga() {
    yield all([
        watchUsers(),
        // TODO Replace with a real saga.
    ]);
}
