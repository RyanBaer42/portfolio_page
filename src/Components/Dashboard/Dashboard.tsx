import './Dashboard.scss'
import { useEffect } from 'react';

const Dashboard = () => {

    useEffect(() => {
        window.scrollTo(0,0)
    })

    return (
        <div className='dashboard-container'>
            <div className='overlay-text'>
                <p>Front-End developer continuously looking for new knowledge, currently residing in Denver, Colorado. Following a childhood love for video games and technology; I dove into the world of software development. 
                   I fiddled around on various online courses, and then honed my skills at Turing School of Software and Design.</p>
            </div>
        </div>
    );
};

export default Dashboard