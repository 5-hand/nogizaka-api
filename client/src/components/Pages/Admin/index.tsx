import React, { useEffect } from 'react'
import Wrapper from '../../Atoms/Wrapper'
import AdminForm from '../../../cotainers/Organisms/Form/AdminForm'
import UpdateForm from '../../../cotainers/Organisms/Form/UpdateForm'
import { Helmet } from 'react-helmet'
import {Route, Switch} from 'react-router'
import useReactRouter from 'use-react-router'
import { MembersState } from '../../../reducers/membersReducer'

interface Props {
    member : MembersState
}

const Admin = (props: Props) => {
    // const {history} = useReactRouter()
    // useEffect(() => {
    //     const isPermission = props.member.isPermission;
    //     if(isPermission) {
    //         history.push('/error')
    //     }
    // })

    return(
        <>
            <Helmet>
                <title>
                    Nogizaka-API -AdminPage-
                </title>
            </Helmet>

            <Wrapper styled={{min_height: '100vh'}}>
                <Switch>
                    <Route path="/admin/update" component={UpdateForm}/>
                    <Route path="/" component={AdminForm} />
                </Switch>
            </Wrapper>
        </>
    )
}

export default Admin