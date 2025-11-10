export default function FormInput({label, ...props}){
    return (
        <label className="grid gap-1">
            {label && <span className="text-sm text-gray-600">{label}</span>}
            <input className="input" {...props} />
        </label>
    )
}