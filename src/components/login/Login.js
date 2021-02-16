import React from 'react'
import {Login} from '../../store/action'
import DialogBox from '../DialogBox'
const LoginSignup = () => {
    return (
        <div>
            <DialogBox method={() => Login()}/>
        </div>
    )
}

export default LoginSignup
