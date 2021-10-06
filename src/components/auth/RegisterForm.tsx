import React, {useState} from 'react'
import {useDispatch} from 'react-redux'

import {InputChange, FormSubmit} from '../../utils/Types'
import {register} from '../../redux/actions/authAction'

const INITIAL_VALUE = {
  name: '',
  account: '',
  password: '',
  cf_password: ''
}

const RegisterForm = () => {
  const [userRegister, setUserRegister] = useState(INITIAL_VALUE)
  const {name, account, password, cf_password} = userRegister
  const [typePass, setTypePass] = useState(false)
  const [typeCfPass, setTypeCfPass] = useState(false)

  const dispatch = useDispatch()

  const handleChangeInput = (e: InputChange) => {
    const {value, name} = e.target
    setUserRegister({...userRegister, [name]: value})
  }

  const handleSubmit = (e: FormSubmit) => {
    e.preventDefault()
    dispatch(register(userRegister))
  }
  return (
    <div className={'card'} style={{width: 400, margin: 'auto'}}>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label htmlFor="name" className="form-label">Name</label>

            <input type="text"
                   className="form-control"
                   id="name"
                   name="name" value={name}
                   onChange={handleChangeInput}
                   placeholder="Your name is up to 20 chars."/>
          </div>

          <div className="form-group mb-3">
            <label htmlFor="account" className="form-label">
              Email / Phone number
            </label>

            <input type="text"
                   className="form-control"
                   id="account"
                   name="account"
                   value={account}
                   onChange={handleChangeInput}
                   placeholder="Example@gmail.com/+84374481936"/>
          </div>

          <div className="form-group mb-3">
            <label htmlFor="password" className="form-label">Password</label>

            <div className="pass">
              <input type={typePass ? "text" : "password"}
                     className="form-control"
                     id="password"
                     name="password" value={password}
                     onChange={handleChangeInput}
                     placeholder="Password must be at least 6 chars."
              />

              <small onClick={() => setTypePass(!typePass)}>
                {typePass ? 'Hide' : 'Show'}
              </small>
            </div>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="password" className="form-label">
              Confirm Password
            </label>

            <div className="pass">
              <input type={typeCfPass ? "text" : "password"}
                     className="form-control"
                     id="cf_password"
                     name="cf_password" value={cf_password}
                     onChange={handleChangeInput}
                     placeholder="Your confirm password."
              />

              <small onClick={() => setTypeCfPass(!typeCfPass)}>
                {typeCfPass ? 'Hide' : 'Show'}
              </small>
            </div>
          </div>

          <button type="submit" className="btn btn-dark w-100 my-1">
            Register
          </button>
        </form>
      </div>
    </div>
  )
}

export default RegisterForm
