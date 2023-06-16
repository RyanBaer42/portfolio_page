import './ProjectPage.scss'
import projects from '../../projects'
import ProjectCard from '../ProjectCard/ProjectCard'

const ProjectPage = () => {
    const allProjects = projects.map(project => {
        return (
            <ProjectCard
                key={project.id} 
                project={project}
            />
        )
    })

    return (
        <div className='project-page'>
            {allProjects}
        </div>
    )
}

export default ProjectPage