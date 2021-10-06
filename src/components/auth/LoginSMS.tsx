import { useState} from "react";
import { useDispatch } from 'react-redux'

import { FormSubmit } from '../../utils/Types'
import { loginSMS } from '../../redux/actions/authAction'

const LoginSMS = () => {
  const [phone, setPhone] = useState('');

  const dispatch = useDispatch()

  const handleSubmit = (e: FormSubmit) => {
    e.preventDefault()
    dispatch(loginSMS(phone))
  }

  return (
    <div className={'card'} style={{width: '400px', margin: 'auto'}}>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label htmlFor="phone">Phone Number</label>
            <input type="text"
                   onChange={e => setPhone(e.target.value)}
                   id={'phone'}
                   className={'form-control'}
                   placeholder="+84374481936"
                   name={'phone'}
                   value={phone}/>
          </div>
          <div className="d-grid gap-2">
            <button type={'submit'} disabled={(!phone)} className={'btn btn-dark'}>Log In using SMS</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginSMS;
