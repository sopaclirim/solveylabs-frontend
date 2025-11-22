import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Http from '../api/Http';

export default function Contact(){
  const { t } = useTranslation('common');
  const [form, setForm] = useState({ name:'', email:'', subject:'', message:'' });
  const [sent, setSent] = useState(false);
  const [err, setErr] = useState('');

  const onChange = e => setForm(f=>({ ...f, [e.target.name]: e.target.value }));

  const submit = async e => {
    e.preventDefault(); 
    setErr('');

    try{
      await Http.post('/api/contacts', {
        fullName: form.name, 
        email: form.email, 
        subject: form.subject, 
        message: form.message
      });
      setSent(true);
    }catch{
      setErr(t('common.error'));
    }
  }

  if(sent) return <div className="container-page"><div className="card">{t('contact.ok')}</div></div>

  return (
    <div className="container-page py-8">
      <h1 className="section-title">{t('contact.title')}</h1>
      <p className="text-center text-lg mb-10">{t('contact.text')}</p>

      <form className="max-w-3xl mx-auto space-y-6" onSubmit={submit}>
        <div>
          <label className="block text-sm font-medium text-light-slate">{t('contact.yourName')}</label>
          <input className="mt-1 input" name="name" value={form.name} onChange={onChange} required />
        </div>
        <div>
          <label className="block text-sm font-medium text-light-slate">{t('contact.yourEmail')}</label>
          <input type="email" className="mt-1 input" name="email" value={form.email} onChange={onChange} required />
        </div>
        <div>
          <label className="block text-sm font-medium text-light-slate">{t('contact.subject')}</label>
          <input className="mt-1 input" name="subject" value={form.subject} onChange={onChange} required />
        </div>
        <div>
          <label className="block text-sm font-medium text-light-slate">{t('contact.message')}</label>
          <textarea rows={5} className="mt-1 input h-40" name="message" value={form.message} onChange={onChange} required />
        </div>

        {err && <p className="text-red-500">{err}</p>}
        <button type="submit" className="w-full btn-primary rounded-2xl py-3">{t('contact.send')}</button>
      </form>
    </div>
  )
}
