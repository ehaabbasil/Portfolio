import styles from './ResearchStyles.module.css';
import ResearchCard from '../../common/ResearchCard';
import paper1 from '../../assets/research1.pdf';
import paper2 from '../../assets/research2.pdf';
import researchImg1 from '../../assets/research1_2.png';
import researchImg2 from '../../assets/research2_1.png';

function Research() {
  return (
    <section id="research" className={styles.container}>
      <h1 className="sectionTitle">Research</h1>
      <div className={styles.researchContainer}>
        <ResearchCard 
          src={researchImg1}
          link={paper1}
          h3='LLM Planning Limitations'
          p='Reinforcement Learning '
        />
        <ResearchCard 
          src={researchImg2}
          link={paper2}
          h3='Lensless Imaging Reconstruction'
          p='Real-Time Optimization Analysis'
        />
      </div>
    </section>
  );
}

export default Research;