import './Nav.scss'
import { Link } from 'react-router-dom'

const Nav = () => {
    
    const openEmailClient = () => {
      var emailAddress = 'ryanjbaer@outlook.com';
      var mailtoUrl = 'mailto:' + encodeURIComponent(emailAddress);
      window.location.href = mailtoUrl;
    }

    return (
        <div className='Nav'>
            <Link to='/' className='home-button'>Ryan Baer</Link>
            <div className='options'>
                <Link to='/projects' className='nav-button'>Projects</Link>
                <Link to='/skills' className='nav-button'>Skills</Link>
                <Link to='aboutme' className='nav-button'>About Me</Link>
                <button onClick={openEmailClient} className='contact-button'>Contact</button>
            </div>
        </div>
    )
}

export default Nav