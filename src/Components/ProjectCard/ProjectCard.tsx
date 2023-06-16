import './ProjectCard.scss';

interface Project {
  name: string;
  image: any;
  skills: string[];
  overView: string;
  link: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const skills = project.skills.map(skill => {
    return (
        <div className='single-skill'>
            <p className='skill-text'>{skill}</p>
        </div>
    )
  })
  return (
    <div className="project-card" >
      <div className='title-container'>
        <h3>{project.name}</h3>
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          <p>Project Link</p>
        </a>
      </div>
      <img className='project-gif' src={project.image} alt='Project'/>
      <div className='overview-container'>
        <p>{project.overView}</p>
      </div>
      <div className='skill-container'>
        <h3 className='skills-title'>Required Skills:</h3>
        <div className='skills'>{skills}</div>
      </div>
    </div>
  );
};

export default ProjectCard;