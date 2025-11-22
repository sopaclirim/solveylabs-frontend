import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Http from '../api/Http';

export default function Careers(){
    const { t } = useTranslation('common');
    const [form, setForm] = useState({ fullName:'', email:'', cv:null, message:'' });
    const [sent, setSent] = useState(false);
    const [err, setErr] = useState('');

    const onChange = e => {
        const { name, value, files } = e.target;
        setForm(f=>({ ...f, [name]: files ? files[0] : value }));
    }

    const submit = async e => {
        e.preventDefault(); setErr('');
        
        try{
            const fd = new FormData();
            fd.append('fullName', form.fullName);
            fd.append('email', form.email);
            if(form.cv) fd.append('cv', form.cv);
            fd.append('message', form.message);
            await Http.post('/api/applications', fd, { headers: { 'Content-Type':'multipart/form-data' } });
            setSent(true);
        }catch{
            setErr(t('common.error'));
        }
    }

    if(sent) return <div className="container-page"><div className="card">{t('careers.ok')}</div></div>

    return (
        <div className="container-page py-8">
        <h1 className="section-title">{t('careers.title')}</h1>
        <p className="text-center text-lg mb-10">{t('careers.text')}</p>

        <form className="max-w-3xl mx-auto space-y-6" onSubmit={submit}>
            <div>
                <label className="block text-sm font-medium text-light-slate">{t('careers.name')}</label>
                <input className="mt-1 input" name="fullName" value={form.fullName} onChange={onChange} required />
            </div>

            <div>
                <label className="block text-sm font-medium text-light-slate">{t('careers.email')}</label>
                <input type="email" className="mt-1 input" name="email" value={form.email} onChange={onChange} required />
            </div>

            <div>
                <label className="block text-sm font-medium text-light-slate">{t('careers.cv')}</label>
                <input type="file" accept=".pdf" className="mt-1 w-full text-sm text-slate file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:font-semibold file:bg-accent file:text-dark-navy hover:file:bg-accent/80"
                        id="cv" name="cv" onChange={onChange} />
            </div>

            <div>
                <label className="block text-sm font-medium text-light-slate">{t('careers.msg')}</label>
                <textarea rows={4} className="mt-1 input h-32" name="message" value={form.message} onChange={onChange} />
            </div>

            {err && <p className="text-red-500">{err}</p>}
            <button type="submit" className="w-full btn-primary py-3 rounded-2xl">{t('careers.submit')}</button>
        </form>
        </div>
    )
}