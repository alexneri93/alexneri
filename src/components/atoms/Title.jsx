const Heading1 = ({ text, styleclass }) => <h1 className={styleclass}>{text}</h1>
const Heading2 = ({ text, styleclass }) => <h2 className={styleclass}>{text}</h2>
const Heading3 = ({ text, styleclass }) => <h3 className={styleclass}>{text}</h3>

function Title({ children, size = "large", level = 1 }) {
  const getClasses = (size) => {
    if (size === "large") return "text-3xl font-bold text-slate-800"
    if (size === "medium") return "text-md font-bold text-slate-800"
    if (size === "small") return "text-sm font-bold text-slate-800"
  }

  switch (level) {
    case 1:
      return <Heading1 text={children} styleclass={getClasses(size)} />;
    case 2:
      return <Heading2 text={children} styleclass={getClasses(size)} />;
    default:
      return <Heading3 text={children} styleclass={getClasses(size)} />;
  }
}

export default Title;