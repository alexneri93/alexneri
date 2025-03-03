import Title from '../atoms/Title'
import Badge from '../atoms/Badge'
import Text from '../atoms/Text'

function ExperienceCard({name, date, skills, children, expid}) {
    return(
        <article className="flex flex-col gap-2 mb-3 lg:flex-row">
            <div className="block text-sm text-slate-500 lg:flex-none lg:w-50 uppercase">{date}</div>
            <div className="flex flex-col gap-2 lg:flex-1">
                <Title level={3} size="small">{name}</Title>
                <Text size="small">{children}</Text>
                <div className="flex gap-2 flex-wrap">
                    {skills.map((skill, index) => (
                        <Badge key={`${expid}-${index}`} text={skill}/>
                    ))}
                </div>
            </div>
        </article>
    )
}

export default ExperienceCard;