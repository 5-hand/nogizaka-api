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
    isLoading: false,
    isPermission: true
}

export const defaultState = {
    members: [] as membersState,
    isLoading: false,
    isPermission: true
}

export type membersState = typeof initialState.members
export type MembersState = typeof initialState
export type Member = typeof initialState.members[0]

const MembersReducer : Reducer<MembersState, MembersAction> = (state : MembersState = defaultState, action : MembersAction) => {
    switch(action.type) {
        case ActionType.MEMBERS_STORAGE_MEMBERS : 
            return {
                ...state,
                members: action.payload.members
            }
        case ActionType.MEMBERS_CHANGE_LOADING :
            return {
                ...state,
                isLoading: action.payload.isLoading
            }
        case ActionType.MEMBERS_CHANGE_PERMISSION :
            return {
                ...state,
                isPermission: action.payload.isPermission
            }
        default : 
            return state
    }
}

export default MembersReducer