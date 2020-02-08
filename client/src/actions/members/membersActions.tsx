import { MembersState, membersState} from '../../reducers/membersReducer'
import * as ActionType from './membersConstants'
import { MemberState } from '../../components/Organisms/Form/UpdateForm'

export const changeLoading = (isLoading: boolean) => ({
    type: ActionType.MEMBERS_CHANGE_LOADING as typeof ActionType.MEMBERS_CHANGE_LOADING,
    payload: {
        isLoading
    }
})

export const changePermission = (isPermission: boolean) => ({
    type: ActionType.MEMBERS_CHANGE_PERMISSION as typeof ActionType.MEMBERS_CHANGE_PERMISSION,
    payload: {
        isPermission
    }
})

export const addMember = (member : MemberState) => ({
    type: ActionType.MEMBERS_MEMBER_ADD as typeof ActionType.MEMBERS_MEMBER_ADD,
    payload: {...member} 
})

export const updateMember = (member : MemberState) => ({
    type: ActionType.MEMBERS_MEMBER_UPDATE as typeof ActionType.MEMBERS_MEMBER_UPDATE,
    payload: {...member}
})

export const deleteMember = (memberId: string) => ({
    type: ActionType.MEMBERS_MEMBER_DELETE as typeof ActionType.MEMBERS_MEMBER_DELETE,
    payload: memberId
})

export const getAllMembers = () => ({
    type: ActionType.MEMBERS_GET_ALLMEMBERS as typeof ActionType.MEMBERS_GET_ALLMEMBERS,
})

export const storageMembers = (members: membersState) => ({
    type: ActionType.MEMBERS_STORAGE_MEMBERS as typeof ActionType.MEMBERS_STORAGE_MEMBERS,
    payload: {
        members
    }
})

export type MembersAction = 
    |ReturnType<typeof addMember>
    |ReturnType<typeof updateMember>
    |ReturnType<typeof deleteMember>
    |ReturnType<typeof getAllMembers>
    |ReturnType<typeof storageMembers>
    |ReturnType<typeof changeLoading>
    |ReturnType<typeof changePermission>