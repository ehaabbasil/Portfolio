import styles from './EducationStyles.module.css';

function Education() {
  const educationData = [
    {
      degree: "MSc in Computer Science",
      institution: "University of Maryland-College Park",
      date: "2022 - 2025",
      achievements: [
        "GPA: 4.0/4.0",
        "Machine Learning Research LLMs & Computational Imaging"
      ]
    },
    {
      degree: "BSc in Computer Science",
      institution: "University of Maryland-College Park",
      date: "2018 - 2022",
      achievements: [
        "GPA: 3.4/4.0","Machine Learning Research Assistant @MIND LAB",
        "3 x Dean's List"
      ]
    }
  ];

  return (
    <section id="education" className={styles.container}>
      <h1 className="sectionTitle">Education</h1>
      <div className={styles.educationList}>
        {educationData.map((edu, index) => (
          <div key={index} className={styles.educationItem}>
            <div className={styles.content}>
              <h3>{edu.degree}</h3>
              <p className={styles.institution}>{edu.institution}</p>
              <p className={styles.date}>{edu.date}</p>
              <ul className={styles.achievements}>
                {edu.achievements.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;