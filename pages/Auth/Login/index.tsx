import React from 'react'
import MainComponent from '../../../components/shared/MainComponent'
import LoginForm from '../../../components/LoginForm'
import SignUpForm from '../../../components/SignUpForm'

const Login: React.FC = () => {
  return (
    <MainComponent>
      <br />
      <LoginForm titlePhrase="Log In" buttonPhrase="Log In" />
      <br />
      <SignUpForm titlePhrase="Create new account" buttonPhrase="CREATE" />
    </MainComponent>
  )
}

export default Login
