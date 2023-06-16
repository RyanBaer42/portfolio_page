import './SkillsPage.scss'
import { useEffect } from 'react'
import JSLogo from "../../Media/JavaScript.png"
import TSLogo from "../../Media/Typescript.png"
import HTMLLogo from "../../Media/HTML.png"
import CSSLogo from "../../Media/CSS.png"
import PostreSQLLogo from "../../Media/Postgresql.png"
import CypressLogo from "../../Media/Cypress.png"
import SASSLogo from "../../Media/Sass.png"
import ReactLogo from "../../Media/React.png"
import MochaLogo from "../../Media/Mocha.png"
// import ChaiLogo from "../../Media/Chai.png"

const SkillsPage = () => {

    useEffect(() => {
        window.scrollTo(0,0)
    })

    return (
        <div className='skills-page'>
            <div className='skills-container'>
                <img src={JSLogo} alt='Javascript Logo' className='skill-logo'/>
                <img src={TSLogo} alt='TypeScript Logo' className='skill-logo'/> 
                <img src={ReactLogo} alt='React Logo' className='skill-logo'/>
                <img src={HTMLLogo} alt='HTML Logo' className='skill-logo'/>
                <img src={CSSLogo} alt='CSS Logo' className='skill-logo'/>
                <img src={PostreSQLLogo} alt='Postres Logo' className='skill-logo'/>
                <img src={CypressLogo} alt='Cypress Logo' className='skill-logo'/>
                <img src={SASSLogo} alt='Sass logo' className='skill-logo'/>
                <img src={MochaLogo} alt='Mocha Logo' className='skill-logo'/>
                {/* <img src={ChaiLogo} alt='Chai Logo' className='skill-logo'/> */}
            </div>
        </div>
    )
}

export default SkillsPage