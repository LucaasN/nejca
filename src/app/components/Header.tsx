import Image from "next/image";
import styles from "./Header.module.css";

interface HeaderProps {
  name: string;
  profileImage: string;
}

const Header: React.FC<HeaderProps> = ({ name, profileImage }) => {
  return (
    <header className={styles.header}>
      <Image
        src={profileImage}
        alt={`${name} profile image`}
        className={styles.headerImage}
        width={150}
        height={150}
      />
      <div>
        <h1>{name}</h1>
        <ul>
          <li>
            <a href="https://x.com/rauchg" target="_blank">
              Twitter
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/rauchg/" target="_blank">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/rauchg" target="_blank">
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
