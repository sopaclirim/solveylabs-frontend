import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Http from '../../api/Http'

export default function AdminDashboard(){
  const { t } = useTranslation('common')
  const [tab, setTab] = useState('posts')
  const [posts, setPosts] = useState([])
  const [applications, setApplications] = useState([])
  const [contacts, setContacts] = useState([])
  const [draft, setDraft] = useState({ title:'', slug:'', content:'', coverUrl:'', published:true })

  const loadAll = async ()=>{
    try{
      const [p,a,c] = await Promise.all([
        Http.get('/api/posts'),
        Http.get('/api/applications'),
        Http.get('/api/contacts'),
      ])
      setPosts(p.data||[]); setApplications(a.data||[]); setContacts(c.data||[])
    }catch(e){ console.error(e) }
  }
  useEffect(()=>{ loadAll() }, [])

  const createPost = async e => { e.preventDefault(); await Http.post('/api/posts', draft); setDraft({ title:'', slug:'', content:'', coverUrl:'', published:true }); loadAll() }
  const deletePost = async id => { if(confirm('Delete?')){ await Http.delete(`/api/posts/${id}`); loadAll() } }
  const approveApp = async id => { await Http.put(`/api/applications/${id}/approve`); loadAll() }

  return (
    <div className="container-page py-8">
      <h1 className="section-title">{t('admin.title')}</h1>

      <div className="flex gap-2 justify-center mb-6">
        <button className={`btn ${tab==='posts'?'bg-accent text-dark-navy':'btn-ghost'}`} onClick={()=>setTab('posts')}>{t('admin.posts')}</button>
        <button className={`btn ${tab==='applications'?'bg-accent text-dark-navy':'btn-ghost'}`} onClick={()=>setTab('applications')}>{t('admin.applications')}</button>
        <button className={`btn ${tab==='contacts'?'bg-accent text-dark-navy':'btn-ghost'}`} onClick={()=>setTab('contacts')}>{t('admin.contacts')}</button>
      </div>

      {tab==='posts' && (
        <div className="grid gap-6">
          <form onSubmit={createPost} className="card grid gap-3">
            <h3 className="text-lg font-semibold text-lightest-slate">{t('admin.createPost')}</h3>
            <input className="input" placeholder={t('admin.titleLabel')} value={draft.title} onChange={e=>setDraft(d=>({...d, title:e.target.value}))} required />
            <input className="input" placeholder={t('admin.slug')} value={draft.slug} onChange={e=>setDraft(d=>({...d, slug:e.target.value}))} required />
            <input className="input" placeholder={t('admin.cover')} value={draft.coverUrl} onChange={e=>setDraft(d=>({...d, coverUrl:e.target.value}))} />
            <textarea className="input h-40" placeholder={t('admin.content')} value={draft.content} onChange={e=>setDraft(d=>({...d, content:e.target.value}))} required />
            <label className="inline-flex items-center gap-2 text-lightest-slate">
              <input type="checkbox" checked={draft.published} onChange={e=>setDraft(d=>({...d, published:e.target.checked}))} />
              {t('admin.published')}
            </label>
            <button className="btn-primary w-fit" type="submit">{t('admin.save')}</button>
          </form>

          <div className="grid gap-3">
            <h3 className="text-lg font-semibold text-lightest-slate">{t('admin.posts')}</h3>
            <div className="grid gap-3 md:grid-cols-2">
              {posts.map(p=>(
                <div key={p.id} className="card">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-semibold text-lightest-slate">{p.title}</h4>
                      <p className="text-sm text-slate">/{p.slug} — {p.published?'Published':'Draft'}</p>
                    </div>
                    <button className="btn-ghost" onClick={()=>deletePost(p.id)}>{t('admin.delete')}</button>
                  </div>
                  <p className="mt-2 text-slate whitespace-pre-line">{(p.content||'').slice(0,200)}{(p.content||'').length>200?'…':''}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {tab==='applications' && (
        <div className="grid gap-3">
          <h3 className="text-lg font-semibold text-lightest-slate">{t('admin.applications')}</h3>
          <div className="grid gap-3">
            {applications.map(a=>(
              <div key={a.id} className="card">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-semibold text-lightest-slate">{a.fullName} — <span className="text-slate">{a.email}</span></p>
                    <p className="text-sm text-slate">{t('admin.status')}: {a.status}</p>
                    {a.cvUrl && <a href={a.cvUrl} className="underline text-accent" target="_blank" rel="noreferrer">{t('admin.cv')}</a>}
                  </div>
                  {a.status!=='Approved' && <button className="btn-primary" onClick={()=>approveApp(a.id)}>{t('admin.approve')}</button>}
                </div>
                {a.message && <p className="mt-2 text-slate whitespace-pre-line">{a.message}</p>}
              </div>
            ))}
          </div>
        </div>
      )}

      {tab==='contacts' && (
        <div className="grid gap-3">
          <h3 className="text-lg font-semibold text-lightest-slate">{t('admin.contacts')}</h3>
          <div className="grid gap-3">
            {contacts.map(c=>(
              <div key={c.id} className="card">
                <p className="font-semibold text-lightest-slate">{c.fullName} — <span className="text-slate">{c.email}</span></p>
                {c.phone && <p className="text-sm text-slate">Phone: {c.phone}</p>}
                <p className="mt-2 text-slate whitespace-pre-line">{c.message}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
