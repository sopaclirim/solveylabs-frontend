function Logo({ label }) {
  return (
    <div className="h-10 opacity-70 hover:opacity-100 transition grid place-items-center text-lightest-slate/80 text-sm border border-lightest-navy/10 rounded-md px-3">
      {label}
    </div>
  )
}

export default function LogoCloud(){
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <Logo label="Client A" />
      <Logo label="Client B" />
      <Logo label="Client C" />
      <Logo label="Client D" />
    </div>
  )
}
