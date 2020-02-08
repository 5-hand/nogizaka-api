import { Reducer } from 'redux'
import { MembersAction } from '../actions/members/membersActions'
import * as ActionType from '../actions/members/membersConstants'


export const initialState  = {
    members: [
        {
            _id: '',
            image: '',
            name: ['',''],
            sailium: ['', ''],
            segment: '',
            dateOfBirth : '',
            blod: '',
            height: '',
            hash:['']
        }
    ],
    token: '',
    loading: false,
    isPermission: false
}

export const defaultState = {
    members: [] as membersState,
    token: '',
    loading: false,
    isPermission: false
}

export type membersState = typeof initialState.members
export type MembersState= typeof initialState
export type Member = typeof initialState.members[0]

const MembersReducer : Reducer<MembersState, MembersAction> = (state : MembersState = defaultState, action : MembersAction) => {
    switch(action.type) {
        case ActionType.MEMBERS_STORAGE_MEMBERS : 
            return {
                ...state,
                members: action.payload
            }
        case ActionType.MEMBERS_CHANGE_LOADING :
            return {
                ...state,
                ...action.payload
            }
        case ActionType.MEMBERS_CHANGE_PERMISSION :
            return {
                ...state,
                ...action.payload
            }
        default : 
            return state
    }
}

export default MembersReducer