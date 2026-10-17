export default function Input({label,error,hint,className="",...rest}){
    return(
        <div className={className}>
            {label &&(
                <label className="mb-1.5 block text-[13px] font-semibold text-ink/80">
                    {label}
                </label>
                )}
                <input className={`w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm
                outline-none transition placeholder:text-ink/30
                focus:border-moss-500 focus:ring-2 focus:ring-moss-500/20
                ${error? "border-clay":"border-line"}`}
                {...rest}/>
                {error?(
                    <p className ="mt-1.5 text-[13px] text-clay"> {error}</p>
                ):hint?(
                    <p className="mt-1.5 text-[13px] text-ink/60">{hint}</p>
                ):null}
            </div>
    )
}