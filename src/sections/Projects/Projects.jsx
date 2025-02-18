import styles from './ProjectsStyles.module.css';
// import viberr from '../../assets/viberr.png';
import smartInsoles from '../../assets/musicalshoes1.png';
import ProjectCard from '../../common/ProjectCard';
// import hipsster from '../../assets/hipsster.png';
import pgp from '../../assets/Private_key_signing.svg';
import gds from '../../assets/parser.svg';


function Projects() {
  return (
  <section id="projects" className={styles.container}>
    <h1 className="sectionTitle">Projects</h1>
    <div className={styles.projectsContainer}>
    <ProjectCard src={pgp} 
    link="https://github.com/ehaabbasil/pgpapi"
    h3='Privacy API'
    p='Cryptography'
    />
    <ProjectCard src={gds} 
    link="https://gdsterminalparser.onrender.com"
    h3=' GDS Terminal Parser'
    p='Algorithms' 
    />
    <ProjectCard src={smartInsoles} 
    link="https://www.hackster.io/cmsc730fall24/musical-shoes-acf700"
    h3='Smart Insoles'
    p='Human Computer Interaction'
    />
     
        </div>  
    </section>
    );
}

export default Projects