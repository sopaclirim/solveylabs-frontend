import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Http from '../api/Http';

export default function Contact(){
  const { t } = useTranslation('common');
  const [form, setForm] = useState({ name:'', email:'', subject:'', message:'' });
  const [sent, setSent] = useState(false);
  const [err, setErr] = useState('');
  const [loading, setLoading] = useState(false);

  const onChange = e => setForm(f=>({ ...f, [e.target.name]: e.target.value }));

  const submit = async e => {
    e.preventDefault(); 
    setErr('');
    setLoading(true);

    try{
      await Http.post('/api/contacts', {
        fullName: form.name, 
        email: form.email, 
        subject: form.subject, 
        message: form.message
      });
      setSent(true);
      setForm({ name:'', email:'', subject:'', message:'' });
    }catch(error){
      const errorMessage = error.response?.data?.message || error.message || t('common.error');
      setErr(errorMessage);
      console.error('Contact form error:', error);
    } finally {
      setLoading(false);
    }
  }

  if(sent) return (
    <div className="container-page py-8">
      <div className="max-w-3xl mx-auto">
        <div className="card bg-green-50/10 border-2 border-green-500/50 rounded-2xl p-8">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-green-500 mb-2">Message Sent!</h3>
              <p className="text-light-slate text-lg">{t('contact.ok')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="container-page py-8">
      <h1 className="section-title">{t('contact.title')}</h1>
      <p className="text-center text-lg mb-10">{t('contact.text')}</p>

      <form className="max-w-3xl mx-auto space-y-6" onSubmit={submit}>
        <div>
          <label className="block text-sm font-medium text-light-slate">{t('contact.yourName')}</label>
          <input className="mt-1 input" name="name" value={form.name} onChange={onChange} required disabled={loading} />
        </div>
        <div>
          <label className="block text-sm font-medium text-light-slate">{t('contact.yourEmail')}</label>
          <input type="email" className="mt-1 input" name="email" value={form.email} onChange={onChange} required disabled={loading} />
        </div>
        <div>
          <label className="block text-sm font-medium text-light-slate">{t('contact.subject')}</label>
          <input className="mt-1 input" name="subject" value={form.subject} onChange={onChange} required disabled={loading} />
        </div>
        <div>
          <label className="block text-sm font-medium text-light-slate">{t('contact.message')}</label>
          <textarea rows={5} className="mt-1 input h-40" name="message" value={form.message} onChange={onChange} required disabled={loading} />
        </div>

        {err && (
          <div className="bg-red-50/10 border border-red-500/50 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-red-400">{err}</p>
            </div>
          </div>
        )}

        <button 
          type="submit" 
          className="w-full btn-primary rounded-2xl py-3 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          disabled={loading}
        >
          {loading ? (
            <>
              <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>{t('common.sending') || 'Sending...'}</span>
            </>
          ) : (
            t('contact.send')
          )}
        </button>
      </form>
    </div>
  )
}
