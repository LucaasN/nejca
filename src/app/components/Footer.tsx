import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>© Desarrollado por Lucas Nahuel Nuñez</p>
        <div className={styles.socialLinks}>
          <a href="https://www.linkedin.com/in/lucas-n-nunez/" target="_blank">
            LinkedIn
          </a>
          <a href="https://github.com/LucaasN" target="_blank">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
