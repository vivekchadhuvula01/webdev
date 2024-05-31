import React from 'react'
import styles from './HeroStyles.module.css'
import heroImg from '../../assets/hero-img.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import TwitterDark from '../../assets/twitter-dark.svg'
import TwitterLight from '../../assets/twitter-light.svg'
import LinkedinDark from '../../assets/linkedin-dark.svg'
import LinkedinLight from '../../assets/linkedin-light.svg'
import GithubDark from '../../assets/github-dark.svg'
import GithubLight from '../../assets/github-light.svg'
import CV from '../../assets/cv.pdf'
import {useTheme } from '../../common/ThemeContext.jsx'

const Hero = () => {
    const {theme, toggleTheme} = useTheme()
    const themeIcon =  theme ===  'light' ? sun : moon
    const TwitterIcon = theme === 'light' ? TwitterLight : TwitterDark
    const LinkdinIcon = theme === 'light' ? LinkedinLight : LinkedinDark
    const GitHubIcon = theme === 'light ' ? GithubLight : GithubDark
  return (
    <section id='hero' className={styles.container}>
       <div className={styles.colorModeContainer}>
        <img 
        className={styles.hero} 
        src={heroImg} 
        alt="Profile pic of Vivek Chadhuvula"
       
        />
        <img 
        className={styles.colorMode} 
        src={themeIcon} 
        alt="color mode icon" 
        onClick={toggleTheme}
        />
        </div>
        <div className={styles.info}>
            <h1>
                Vivek
                <br />
                Chadhuvula
            </h1>
            <h2>Web developer</h2>
          <span>
            <a href="https://twitter.com/ " target='_blank'>
                <img src={TwitterIcon} alt="twitter profile" />
            </a>
            <a href="https://linkedin.com/ " target='_blank'>
                <img src={LinkdinIcon} alt="linkedin profile" />
            </a>
            <a href="https://github.com/ " target='_blank'>
                <img src={GitHubIcon} alt="github profile" />
            </a>
          </span>
          <p className={styles.description}>
          With a passsion for developing modern React web apps for commercial business applications.
          </p>
          <a href={CV} download>
            <button className='hover' >Resume</button>
          </a>

        </div>
    </section>
  )
}

export default Hero
