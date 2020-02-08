import { connect } from 'react-redux'
import Admin from '../../../components/Pages/Admin'
import { State } from '../../../reducers'

const mapStateToProps = (state: State) => ({
    members: state.members
})

export default connect(mapStateToProps, {})(Admin)