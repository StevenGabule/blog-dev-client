import React from 'react'
import { useDispatch } from 'react-redux'
import { GoogleLogin, GoogleLoginResponse } from 'react-google-login-lite';
import {FacebookLogin, FacebookLoginAuthResponse} from "react-facebook-login-lite";

import { googleLogin, facebookLogin } from '../../redux/actions/authAction'

const SocialLogin = () => {
  const dispatch = useDispatch()

  const onSuccess = (googleUser: GoogleLoginResponse) => {
    const id_token = googleUser.getAuthResponse().id_token
    dispatch(googleLogin(id_token))
  }

  const onFBSuccess = (response: FacebookLoginAuthResponse) => {
    const { accessToken, userID } = response.authResponse
    dispatch(facebookLogin(accessToken, userID))
  }

  return (
    <>
    <div className="my-2">
      <GoogleLogin
        client_id='286967804516-ubihpupec1j1p19kfr4oa6c2kdo7fn3d.apps.googleusercontent.com'
        cookiepolicy='single_host_origin'
        onSuccess={onSuccess}
      />
    </div>
      <div className="my-2">
        <FacebookLogin
          appId="1039244973281852"
          onSuccess={onFBSuccess}
        />
      </div>
    </>
  )
}

export default SocialLogin
