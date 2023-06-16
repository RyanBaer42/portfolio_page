import './Nav.scss'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div className='Nav'>
            <Link to='/'>
                <p className='home-button'>Ryan Baer</p>
            </Link>
            <div className='options'>
                <Link to='/projects' className='projects-link'>
                    <p className='nav-button'>Projects</p>
                </Link>
                <Link to='/skills' className='skills-link'>
                    <p className='nav-button'>Skills</p>
                </Link>
                <p className='nav-button'>About Me</p>
                <button className='contact-button'>Contact</button>
            </div>
        </div>
    )
}

export default Nav