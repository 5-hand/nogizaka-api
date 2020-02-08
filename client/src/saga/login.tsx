import { put, call, takeLatest} 
from 'redux-saga/effects'
import * as Action from '../actions/login/loginConstants'
import * as LoginAction from '../actions/login/loginActions'
import * as MembersAction from '../actions/members/membersActions'
import { loginUserFactory } from '../api/loginApiFactory'

function* createAcount(action : ReturnType<typeof LoginAction.createAcount>){
    const userData = action.payload;
    
    try{
        const api = loginUserFactory();
        yield put(MembersAction.changeLoading(true))
        const result = yield call(api, userData, '/login/create')
        yield put(MembersAction.changeLoading(false))
        yield alert(result.data);
    }catch(error) {
        yield alert(error);
        yield put(MembersAction.changeLoading(false))
    }
}

function* loginAcount(action : ReturnType<typeof LoginAction.loginAcount>) {
    const userData = action.payload;

    try {
        const api = loginUserFactory();
        const result = yield call(api, userData, '/login/authenticate');
        yield put(MembersAction.changeLoading(true))
        alert(result.data.message);
        yield put(MembersAction.changeLoading(false))
        if(result.data.success) {
            yield localStorage.setItem('ticket',result.data.token);
            if(result.data.permission === 'root') {
                yield put(MembersAction.changePermission(true))
            }
        }
    }catch(error) {
        yield alert(error);
    }
}


export default function* loginActions() {
    yield takeLatest (Action.LOGIN_CREATE_ACOUNT, createAcount)
    yield takeLatest (Action.LOGIN_USER_ACOUNT, loginAcount)
}