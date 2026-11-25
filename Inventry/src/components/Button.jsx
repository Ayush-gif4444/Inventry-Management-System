export default function Button({
    variant = "primary",
    size = "md",
    loading = false,
    className = "",
    children,
    ...rest
}) {
    const base = "inline-flex items-center justify-center gap-2 rounded-[10px] font-semibold transition focus:outline-none focus:ring-2 focus:ring-brand-600/30 disabled:cursor-not-allowed disabled:opacity-60";
    const variants = {
        primary: "bg-brand-600 text-white hover:bg-brand-700 shadow-[0px_6px_14px_0px_rgba(70,80,198,0.16)]",
        outline: "border border-line bg-white text-ink hover:bg-ink/5 shadow-sm hover:border-brand-600 hover:text-brand-700",
        ghost: "text-ink hover:bg-ink/5",
    };
    const sizes = {
        sm: "px-3 py-2 text-sm",
        md: "px-4 py-2 text-sm",
        lg: "h-14 px-5 text-[15px]",
    };
    return (
        <button
            className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
            disabled={loading}
            {...rest}>
            {loading && (
                <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
            )}
            {children}
        </button>
    );
}
