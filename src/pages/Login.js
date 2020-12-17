import React from 'react'
import LoginForm from '../components/login/LoginForm'
import { connect } from 'react-redux';
import Form from '../components/login/Form';

function Login(props) {
    return (
        <div>
            {console.log(props.isSigned)}
            {
                (props.isSigned) ? 
                <Form/>:
                <LoginForm/>
            }
        </div>
    )
}

function mapStateToProps(state) {
    const { isSigned } = state
    return { isSigned: isSigned }
  }
  
  export default connect(mapStateToProps)(Login)
