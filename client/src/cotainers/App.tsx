import { connect } from 'react-redux'
import { MembersState } from '../reducers/membersReducer'
import App from '../components/App'

const mapStateToProps = ({members} : {members: MembersState}) => ({
    members
})

export default connect(mapStateToProps, {})(App)