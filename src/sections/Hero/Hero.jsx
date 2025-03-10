import styles from './HeroStyles.module.css'; 
import heroImg from '../../assets/Untitled design-9.png';
import sun from '../../assets/sun.svg'; 
import moon from '../../assets/moon.svg';  
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import CV from '../../assets/Ehaab_Basil_Resume_MSc.pdf';

import {useTheme } from '../../common/ThemeContext';   

function Hero() { 
    const {theme,toggleTheme} = useTheme(); 
    
    const themeIcon = theme === 'light' ? sun : moon;
    const twitterIcon = theme === 'light' ? twitterLight:twitterDark;
    const githubIcon = theme === 'light' ? githubLight:githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight:linkedinDark;
  return (
    <section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img 
            className={styles.hero}
             src ={heroImg} 
             alt="Profile picture of Ehaab Basil" 
             />
             <img 
             className={styles.color} 
             src={themeIcon} 
             alt="Color mode icon" 
             onClick={toggleTheme}
             />
        </div>
        <div className = {styles.info}>
            <h1>Ehaab
                <br/>
                Basil
            </h1>
            <h2>Software/ML Engineer</h2> 
            <span>
                <a href= "https://x.com/ehaabbasil?lang=fa" target="_blank">
                <img src = {twitterIcon} alt="Twitter icon" />
                </a> 
                <a href= "https://github.com//ehaabbasil/" target="_blank">
                <img src = {githubIcon} alt="Github icon" />
                </a>
                <a href= "https://www.linkedin.com/in/ehaabbasil/" target="_blank">
                <img src = {linkedinIcon} alt="Linkedin icon"/> 
                </a> 
            </span>
            <p className={styles.description}> 
                With a passion for 
                Machine Learning and Building SaaS platforms that 
                automate, optimize and transform 
                businesses. 
            </p>
            <a href={CV} download>
                <button className="hover">Resume</button>  
            </a>
        </div>
        </section>
  );
} 

export default Hero 