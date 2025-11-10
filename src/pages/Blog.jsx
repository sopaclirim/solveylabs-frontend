import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Http from '../api/Http'
import PostCard from '../components/PostCard'

export default function Blog(){
  const [posts, setPosts] = useState(null)
  const { t } = useTranslation('common')

  useEffect(()=>{ (async()=>{
    try{ const { data } = await Http.get('/api/posts'); setPosts(data||[]) }
    catch{ setPosts([]) }
  })() }, [])

  return (
    <div className="container-page py-8">
      <h1 className="section-title">{t('blog.title')}</h1>
      {!posts ? (
        <p className="text-center">{t('common.loading')}</p>
      ) : posts.length === 0 ? (
        <p className="text-center">{t('blog.empty')}</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map(p=> <PostCard key={p.id} post={p}/>)}
        </div>
      )}
    </div>
  )
}
