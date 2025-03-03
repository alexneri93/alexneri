import Title from '../atoms/Title'
import Badge from '../atoms/Badge'

function ProjectCard({name, image, imageAlt, link, skills, projectId}) {
    return (
        <article className="flex flex-col gap-2 mb-3 lg:mb-10">
            <img src={image} alt={imageAlt} className="rounded-lg border-1 border-solid border-slate-200"/>
            <Title level={3} size="small">
                <a href={link} target="_blank" className="flex items-center">
                    <span className="mr-2">{name}</span>
                    <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" aria-label="Opens in a new tab"><path d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </a>
            </Title>
            <div className="flex gap-2 flex-wrap">
                {skills.map((skill, index) => (
                    <Badge key={`${projectId}-${index}`} text={skill}/>
                ))}
            </div>
        </article>
    )
}

export default ProjectCard;