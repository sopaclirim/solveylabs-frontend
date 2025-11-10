import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Http from '../../api/Http'

const showAdminLogin = import.meta.env.VITE_SHOW_ADMIN_LOGIN === 'true'

export default function AdminLogin(){
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [err,setErr]=useState('')
  const nav = useNavigate()
  const { t } = useTranslation('common')

  useEffect(()=>{
    if(!showAdminLogin && !localStorage.getItem('sl_token')){
      nav('/', { replace:true })
    }
  }, [])

  const submit = async e => {
    e.preventDefault(); setErr('')
    try{
      const { data } = await Http.post('/api/auth/login',{email,password})
      localStorage.setItem('sl_token', data.token)
      nav('/admin')
    }catch{
      setErr(t('admin.invalid'))
    }
  }

  return (
    <div className="container-page py-8 max-w-md">
      <h1 className="section-title">{t('admin.loginTitle')}</h1>
      <form onSubmit={submit} className="card grid gap-4">
        <input className="input" placeholder="Email" type="email" value={email} onChange={e=>setEmail(e.target.value)} required />
        <input className="input" placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} required />
        {err && <p className="text-red-500">{err}</p>}
        <button className="btn-primary" type="submit">{t('nav.login')}</button>
      </form>
    </div>
  )
}
