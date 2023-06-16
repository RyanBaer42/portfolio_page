import './ProjectPage.scss'
import { useEffect } from 'react'
import projects from '../../projects'
import ProjectCard from '../ProjectCard/ProjectCard'

const ProjectPage = () => {

    useEffect(() => {
        window.scrollTo(0,0)
    })

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