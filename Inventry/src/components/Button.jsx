export default function Button({
    variant="primary",
    size="md",
    loading=false,
    children,
    ...rest
}) {
    const base = "inline-flex items-center justify-center rounded-lg font-semibold transition focus:outline-none focus:ring-2 focus:ring-moss-500/20 disabled:cursor-not-allowed disabled:opacity-50";
    const variants = {
        primary: "bg-moss-600 text-white hover:bg-moss-700 shadow-sm",
        outline: "border border-line bg-white text-ink hover:bg-ink/5 shadow-sm hover:border-moss-500 hover:text-moss-700",
        ghost: "text-ink hover:bg-ink/5",
    };
    const sizes ={
        sm: "px-3 py-2 text-sm",
        md: "px-4 py-2 text-sm",
        lg: "px-5 py-2.5 text-base",
    };
    return(
        <button
            className={`${base} ${variants[variant]} ${sizes[size]}`}
            disabled={loading}
            {...rest}>
                {loading && (
                    <span className="h-3.5 w-3.5 rounded-full border-2 border-t-white border-moss-500/20 animate-spin" />
                )}
                {children}
        </button>
    );
}
