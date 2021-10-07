import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import LoginPass from "../components/auth/LoginPass";
import LoginSMS from "../components/auth/LoginSMS";
import {RootStore} from "../utils/Types";
import SocialLogin from "../components/auth/SocialLogin";

const Login = () => {
  const [sms, setSms] = useState(false);
  const history = useHistory()

  const { auth } = useSelector((state: RootStore) => state)

  useEffect(() => {
    if(auth.access_token) {
      let url = history.location.search.replace('?', '/')
      return history.push(url)
    }
  },[auth.access_token, history])

  return (
    <div className={'auth_page'}>
      <div className="auth_box">
        <h3 className={'text-uppercase text-center mb-4'}>Login</h3>
        <SocialLogin />
        {sms ? <LoginSMS/> : <LoginPass />}

        <div style={{width: '400px', margin: 'auto', padding: '0 15px'}}>
          <small className={'row my-2 text-prima ry'} style={{cursor: 'pointer'}}>
            <Link to={'/forgot_password'} className={'col-6'}>
              Forgot password?
            </Link>
            <span className={'col-6 text-primary text-end'} onClick={() => setSms(!sms)}>
              {sms ? 'Sign in with password' : 'Sign in with SMS'}
            </span>
          </small>
          <p className={'text-muted mt-4 text-center'}>
            You don't have an account? <Link to={`/register${history.location.search}`} className={'text-decoration-none'}>Register now</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login;
