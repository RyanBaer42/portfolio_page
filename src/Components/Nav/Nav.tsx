import './Nav.scss'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div className='Nav'>
            <Link to='/' className='home-button'>Ryan Baer</Link>
            <div className='options'>
                <Link to='/projects' className='nav-button'>Projects</Link>
                <Link to='/skills' className='nav-button'>Skills</Link>
                <Link to='aboutme' className='nav-button'>About Me</Link>
                <button className='contact-button'>Contact</button>
            </div>
        </div>
    )
}

export default Nav