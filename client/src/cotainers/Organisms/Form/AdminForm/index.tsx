import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import AdminForm, {MemberState} from '../../../../components/Organisms/Form/AdminForm'
import * as Action from '../../../../actions/members/membersActions'
import { membersState as Members} from '../../../../reducers/membersReducer'

const mapStateToProps = ({members}: {members: Members}) => ({
    members: {...members}
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    upload: (member: MemberState) => {
        dispatch(Action.addMember(member))
    },
    getAllMembers: () => {
        dispatch(Action.getAllMembers())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(AdminForm)