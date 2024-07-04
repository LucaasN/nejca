import styles from './About.module.css';

interface AboutProps {
  description: string;
}

const About: React.FC<AboutProps> = ({ description }) => {
  return (
    <section className={styles.about}>
      <h2>Sobre mi</h2>
      <p>{description}</p>
    </section>
  );
};

export default About;
