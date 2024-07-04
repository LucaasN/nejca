import styles from './About.module.css';

interface AboutProps {
  description: string;
}

const About: React.FC<AboutProps> = ({ description }) => {
  return (
    <section className={styles.about}>
      <h3>Sobre mi</h3>
      <p>{description}</p>
    </section>
  );
};

export default About;
