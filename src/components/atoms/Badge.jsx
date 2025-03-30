function Badge({text}) {
    return(
        <div className="inline-block font-bold rounded-md text-sky-700 text-xs px-3 py-1 border border-teal-200">
            {text}
        </div>
    )
}

export default Badge;