import { combineReducers } from 'redux'
import MembersReducer, { MembersState } from './membersReducer'


export type StateValue = MembersState
export type State = {
    members: MembersState
}

const rootReducer = combineReducers({
    members: MembersReducer,
})

export default rootReducer