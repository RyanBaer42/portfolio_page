import './Nav.scss'

const Nav = () => {
    return (
        <div className='Nav'>
            <p className='home-button'>Ryan Baer</p>
            <div className='options'>
                <p className='nav-button'>Projects</p>
                <p className='nav-button'>Skills</p>
                <p className='nav-button'>About Me</p>
                <button className='contact-button'>Contact</button>
            </div>
        </div>
    )
}

export default Nav