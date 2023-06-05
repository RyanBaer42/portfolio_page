import './ProjectCard.scss';

interface Project {
  name: string;
  image: string;
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
        <div>
            <p>{skill}</p>
        </div>
    )
  })
  return (
    <div className="project-card">
      <h2>{project.name}</h2>
      <img src={project.image} alt='Project'/>
      <p>{project.overView}</p>
      <div>{skills}</div>
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        <p>Project Link</p>
      </a>
    </div>
  );
};

export default ProjectCard;