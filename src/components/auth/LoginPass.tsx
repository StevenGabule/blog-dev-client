import {useState} from "react";
import {FormSubmit, InputChange} from "../../utils/Types";
import {useDispatch} from "react-redux";
import {login} from "../../redux/actions/authAction";

const LoginPass = () => {
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    account: '',
    password: '',
  });

  const [typePass, setTypePass] = useState(false);

  const handleChangeInput = (e: InputChange) => {
    const {name, value} = e.target;
    setUser(prev => ({...prev, [name]: value}))
  }

  const handleSubmit = (e: FormSubmit) => {
    e.preventDefault()
    dispatch(login(user))
  }

  return (
    <div className={'card'} style={{width: '400px', margin: 'auto'}}>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-2">
            <label htmlFor="account">Email / Phone Number</label>
            <input type="text" onChange={handleChangeInput} id={'account'} className={'form-control'} name={'account'}
                   value={user.account}/>
          </div>
          <div className="form-group mb-3">
            <label htmlFor='password'>Password</label>
            <div className="pass">
              <input type={typePass ? 'text' : 'password'} onChange={handleChangeInput} id={'password'}
                     className={'form-control'} name={'password'}
                     value={user.password}/>
              <small onClick={() => setTypePass(!typePass)}>{typePass ? 'Hide' : 'Show'}</small>
            </div>
          </div>
          <div className="d-grid gap-2">
            <button type={'submit'} disabled={(!(user.account && user.password))} className={'btn btn-dark'}>Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPass;
