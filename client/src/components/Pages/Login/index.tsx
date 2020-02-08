import React, {useEffect} from 'react'
import LoginHeader from '../../Organisms/Header/LoginHeader'
import LoginForm from '../../../cotainers/Organisms/Form/LoginForm'
import { Helmet } from 'react-helmet'
import useReactRouter from 'use-react-router'

const Login : React.FC = () => {
    const { history } = useReactRouter()
    useEffect(() => {
        const isStorageToken = localStorage.getItem('ticket') !== null
        // if(isStorageToken === true) {
        //     history.push('/top')
        // }
    })
    return(
        <>
            <Helmet>
                <title>
                    Nogizaka-Dictinary ~LoginPage~
                </title>
            </Helmet>
            <LoginHeader />
            <LoginForm />
        </>
    )
}

export default Login