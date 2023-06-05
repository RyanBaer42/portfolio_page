import './ProjectPage.scss'
import projects from '../../projects'
import ProjectCard from '../ProjectCard/ProjectCard'

const ProjectPage = () => {
    const allProjects = projects.map(project => {
        return (
            <ProjectCard 
                project={project}
            />
        )
    })

    return (
        <div>
            {allProjects}
        </div>
    )
}

export default ProjectPage