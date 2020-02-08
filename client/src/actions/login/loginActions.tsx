import * as ActionType from './loginConstants'

export interface DataType {
    email: string
    password: string
}

export interface UserIsLogin {
    isLogin: boolean
}

export const createAcount = (data : DataType) => ({
    type: ActionType.LOGIN_CREATE_ACOUNT as typeof ActionType.LOGIN_CREATE_ACOUNT,
    payload: {
        ...data
    }
})

export const loginAcount = (data: DataType) => ({
    type: ActionType.LOGIN_USER_ACOUNT as typeof ActionType.LOGIN_USER_ACOUNT,
    payload: {
        ...data
    }
})

export type LoginAction =
    |ReturnType<typeof createAcount>
    |ReturnType<typeof loginAcount>