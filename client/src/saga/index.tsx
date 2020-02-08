import { all, fork } from 'redux-saga/effects'
import loginActions from './login'
import memberActions from './member'

export function* watchAllActions() {
    yield fork(loginActions)
    yield fork(memberActions)
}

export default function* rootSaga() {
    yield all([fork(watchAllActions)])
} 