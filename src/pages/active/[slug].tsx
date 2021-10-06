import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { IParams } from '../../utils/Types'
import { postAPI } from '../../utils/FetchData'
import { showErrMsg, showSuccessMsg } from '../../components/alert/Alert'

const Active = () => {
  const { slug }: IParams = useParams()
  const [err, setErr] = useState('')
  const [success, setSuccess] = useState('')

  useEffect(() => {
    if(slug){
      postAPI('auth/active', { active_token: slug })
        .then((res: any) => setSuccess(res.data.msg))
        .catch(err => setErr(err.response.data.msg))
    }
  },[slug])

  return (
    <div>
      { err && showErrMsg(err) }
      { success && showSuccessMsg(success) }
    </div>
  )
}

export default Active
