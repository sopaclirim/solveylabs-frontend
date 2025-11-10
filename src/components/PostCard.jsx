export default function PostCard({ post }){
    return (
        <article className="card">
        <h3 className="mb-2 text-xl font-bold text-lightest-slate">{post.title}</h3>
        {post.coverUrl && (
            <img src={post.coverUrl} alt={post.title} className="mb-4 h-48 w-full rounded-md object-cover" />
        )}
        <p className="text-slate whitespace-pre-line">
            {(post.content || '').slice(0, 220)}{(post.content||'').length>220?'…':''}
        </p>
        </article>
    )
}