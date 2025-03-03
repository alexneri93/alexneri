function Badge({text}) {
    return(
        <div className="inline-block font-bold rounded-md text-slate-800 bg-slate-100 dark:text-teal-500 dark:bg-teal-300/10 text-xs px-3 py-1">
            {text}
        </div>
    )
}

export default Badge;