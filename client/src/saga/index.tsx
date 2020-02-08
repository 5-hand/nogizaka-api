import { all, fork } from 'redux-saga/effects'
import memberActions from './member'

export function* watchAllActions() {
    yield fork(memberActions)
}

export default function* rootSaga() {
    yield all([fork(watchAllActions)])
} 