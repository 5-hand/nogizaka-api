import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { DataType } from '../../../../actions/login/loginActions'
import * as userAction from '../../../../actions/login/loginActions'
import LoginForm from '../../../../components/Organisms/Form/LoginForm'
import { StateValue } from '../../../../reducers'

const mapStateToProps = (state: StateValue) => state.members

const mapDispatchToProps = (dispatch : Dispatch)  => ({
    createAcount: (data : DataType) => {
        dispatch(userAction.createAcount(data))
    },
    loginAcount: (data : DataType) => {
        dispatch(userAction.loginAcount(data))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)