import { connect } from 'react-redux'
import App from '../components/App'
import { MembersState } from '../reducers/membersReducer'

const mapStateToProps = ({members} : {members:MembersState}) => ({
    members
})

export default connect(mapStateToProps, {})(App)