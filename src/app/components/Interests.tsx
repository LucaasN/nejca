import styles from "./Interests.module.css";

interface InterestsProps {
  interests: string[];
}

const Interests: React.FC<InterestsProps> = ({ interests }) => {
  return (
    <section className={styles.interests}>
      <h3>Intereses</h3>
      <ul>
        {interests.map((interest, index) => (
          <li key={index}>{interest}</li>
        ))}
      </ul>
    </section>
  );
};

export default Interests;
