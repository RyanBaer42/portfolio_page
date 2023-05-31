import './Dashboard.scss'
import Canyon from '../../Media/canyon.jpeg';

const Dashboard = () => {
    return (
        <div>
            <img src={Canyon} className='canyon-photo' alt='canyon in Moab'/>
            <p>Front-End Typescript/React developer continuously looking for new knowledge and currently residing in Denver, Colorado. Following a childhood love for video games and technology; I dove into the world of software development. 
               I fiddled around on various online courses, and then honed my skills at Turing School of Software and Design.</p>
        </div>
    )
}

export default Dashboard