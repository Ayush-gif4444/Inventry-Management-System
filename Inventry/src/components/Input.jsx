export default function Input({label, error, hint, icon, trailing, id, className = "", ...rest}) {
    const inputId = id || rest.name;
    return (
        <div className={className}>
            {label && (
                <label htmlFor={inputId} className="mb-[11px] block text-[13px] leading-5 font-semibold text-ink-soft">
                    {label}
                </label>
            )}
            <div className={`flex h-[58px] items-center gap-3 rounded-[10px] border bg-white px-[17px] transition
                focus-within:border-brand-600 focus-within:ring-2 focus-within:ring-brand-600/20
                ${error ? "border-clay" : "border-line"}`}>
                {icon && <img src={icon} alt="" width="20" height="20" className="shrink-0" />}
                <input
                    id={inputId}
                    className="h-full w-full min-w-0 bg-transparent text-sm text-ink outline-none placeholder:text-subtle"
                    aria-invalid={!!error}
                    {...rest}
                />
                {trailing}
            </div>
            {error ? (
                <p className="mt-1.5 text-[13px] text-clay">{error}</p>
            ) : hint ? (
                <p className="mt-1.5 text-[13px] text-muted">{hint}</p>
            ) : null}
        </div>
    );
}
