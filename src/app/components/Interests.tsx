import styles from "./Interests.module.css";

interface InterestsProps {
  interests: string[];
}

const Interests: React.FC<InterestsProps> = ({ interests }) => {
  return (
    <section className={styles.interests}>
      <h2>
        <span>
          Intereses
        </span>
      </h2>
      <ul>
        {interests.map((interest, index) => (
          <li key={index}>{interest}</li>
        ))}
      </ul>
    </section>
  );
};

export default Interests;
