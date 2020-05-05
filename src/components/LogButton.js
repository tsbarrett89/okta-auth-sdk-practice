import React from 'react'
import { useOktaAuth } from '@okta/okta-react'

const LogButton = () => {
    const { authState, authService } = useOktaAuth();

    const login = async () => {
        authService.login('/')
    }

    const logout = async () => {
        authService.logout('/')
    }

    if (authState.isPending){
        return <div>Loading . . .</div>
    }

    return authState.isAuthenticated ?
        <button onClick={logout}>Logout</button> :
        <button onClick={login}>Login</button>
}

export default LogButton