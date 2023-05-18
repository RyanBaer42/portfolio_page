import './Footer.scss';
import LinkedIn from '../../Media/LinkedIn_icon.png';
import GitHub from '../../Media/Github_icon.png';

const Footer = () => {
    return (
        <div className='Footer'>
            <p className='connect-message'>Thank's for visiting, let's connect!</p>
            <div className='social-container'>
                <a href="https://www.linkedin.com/in/ryan-baer42/" target="_blank" rel="noopener noreferrer">
                    <img src={LinkedIn} className='social-icon' alt='LinkedIn Icon' />
                </a>
                <a href='https://github.com/RyanBaer42' target="_blank" rel="noopener noreferrer">
                    <img src={GitHub} className='social-icon' alt='GitHub Icon' />
                </a>
            </div>
        </div>
    );
};

export default Footer;