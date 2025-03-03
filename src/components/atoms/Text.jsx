function Text({ children, size = "medium" }) {
  const getClasses = (size) => {
    switch (size) {
      case "large":
        return "text-lg text-slate-800";
      case "medium":
        return "text-base text-slate-800";
      default:
        return "text-sm text-slate-500";
    }
  }
  return (
    <p className={getClasses(size)}>
      {children}
    </p>
  )
}

export default Text;