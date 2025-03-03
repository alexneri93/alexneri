
import { InstagramIcon } from "./InstagramIcon";
import { CodepenIcon } from "./CodepenIcon";
import { LinkedinIcon } from "./LinkedinIcon";
import { GithubIcon } from "./GithubIcon";

function Social({name}) {
    const data = {
        github: "https://www.github.com/alexneri93",
        linkedin: "https://www.linkedin.com/in/alexneri93/",
        codepen: "https://codepen.io/alexneri",
        instagram: "https://www.instagram.com/alexne93",
    }

    return (
        <a href={data[name]} className="inline-block text-slate-800 hover:text-slate-400 p-2" target="_blank" aria-label={`${name} (Opens in new tab)`}>
            {name === "github" && <GithubIcon styleClass="w-6 h-6"/>}
            {name === "linkedin" && <LinkedinIcon styleClass="w-6 h-6"/>}
            {name === "codepen" && <CodepenIcon styleClass="w-6 h-6"/>}
            {name === "instagram" && <InstagramIcon styleClass="w-6 h-6"/>}
        </a>
    )
}

export default Social;