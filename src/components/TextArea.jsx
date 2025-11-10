export default function TextArea({label, ...props}){
    return (
        <label className="grid gap-1">
            {label && <span className="text-sm text-gray-600">{label}</span>}
            <textarea className="input h-32" {...props} />
        </label>
    )
}