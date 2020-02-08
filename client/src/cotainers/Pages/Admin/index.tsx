import { connect } from 'react-redux'
import {State} from '../../../reducers/index'
import Admin from '../../../components/Pages/Admin'

const mapStateToProps = (state: State) => ({
    user: state.members
})

export default connect(mapStateToProps, {})(Admin)