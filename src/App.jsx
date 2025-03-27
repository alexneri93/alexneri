import './App.css'
import Title from './components/atoms/Title.jsx'
import Text from './components/atoms/Text.jsx'
import Social from './components/atoms/Social.jsx'
import Navigation from './components/molecules/Navigation.jsx'
import NavigationDesktop from './components/molecules/NavigationDesktop.jsx'
import ExperienceCard from './components/organisms/ExperienceCard.jsx'
import ProjectCard from './components/organisms/ProjectCard.jsx'
import Footer from './components/organisms/Footer.jsx'
import esperiencedata from './data/experience.json';
import { projectsData } from './data/projects.js';
import monster from './assets/monster.svg';

function App() {

  return (
    <>
      <header className="mb-20 lg:col-span-2 lg:max-h-screen lg:mb-0 lg:sticky lg:top-0 flex flex-col gap-5 lg:justify-between px-5">
        <div className="flex flex-col gap-5 lg:pt-10 lg:items-start">
          <Title>Alejandro Neri</Title>
          <Text size="large">Frontend Engineer</Text>
          <div className="w-[60%]">
            <Text size="medium">I craft accessible, pixel-perfect web digital experiences</Text>
          </div>
          <NavigationDesktop/>
        </div>
        <div className="flex gap-4 lg:pb-20">
          <Social name="instagram"/>
          <Social name="codepen"/>
          <Social name="linkedin"/>
          <Social name="github"/>
        </div>
      </header>

      <main className="lg:col-span-4">
        <div className="wrapper">
          <div className="bg">
              <img className="animate-bounce absolute left-[40px] top-[30%]" src={monster} width="120" height="120"/>
          </div>
          <div className="bg">
              <img className="animate-bounce absolute left-[40px] top-[30%]" src={monster} width="120" height="120"/>
          </div>
        </div>
        
        <Navigation/>

        <section id="about" className="py-10 flex flex-col gap-6 px-5">
          <Title size="medium" level={2}>ABOUT</Title>
          <Text size="medium">I am a software developer with a passion for graphic design, accessibility and web performance. I specialize in crafting pixel-perfect user interfaces that seamlessly merge sophisticated design principles with robust engineering solutions. I thrive where design meets development, crafting experiences that combine stunning aesthetics with thoughtful engineering for optimal performance and usability.</Text>
          <Text size="medium">Currently I'm a Frontend Engineer at <a className="underline hover:text-slate-400" href="https://www.gartner.com/en/digital-markets">Gartner Digital Markets</a>. I contribute to the creation and maintenance of UI components that power Gartbner Digital Matkets local sites frontend, always having in mind the accessibility, performance and best practices.</Text>
          <Text size="medium">My experience is best represented by my work at <a className="underline hover:text-slate-400" href="https://www.gartner.com/en/digital-markets">Gartner</a>, <a className="underline hover:text-slate-400" href="https://www.grupogodo.com/">GrupoGodo</a> and <a className="underline hover:text-slate-400" href="https://www.grupohotusa.com/">Hotusa</a> where I contributed to product design, accessibility and performance initiatives, and engineering.</Text>
        </section>

        <section id="experience" className="py-10 flex flex-col gap-6 px-5">
          <Title size="medium" level={2}>EXPERIENCE</Title>
          {esperiencedata.map((exp) => (
            <ExperienceCard key={exp.id} expid={exp.id} name={exp.name} date={exp.date} skills={exp.skills}>
              {exp.description}
            </ExperienceCard>
          ))}
        </section>

        <section id="projects" className="py-10 flex flex-col gap-6 px-5">
          <Title size="medium" level={2}>PROJECTS</Title>
          <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2">
            {projectsData.map((project) => (
              <ProjectCard
                key={project.id} 
                name={project.name} 
                image={project.image.name}
                imageAlt={project.image.alt}
                link={project.link}
                skills={project.skills}
                projectId={project.id}
              />
            ))}
          </div>
        </section>
        <Footer/>
      </main>
    </>
  )
}

export default App
