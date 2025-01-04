// components/footer.tsx
import styles from './components.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <a
          href="#"
          rel="noopener noreferrer"
        >
          About Us
        </a>
        <a
          href="#"
          rel="noopener noreferrer"
        >
          Services
        </a>
        <a
          href="#"
          rel="noopener noreferrer"
        >
          Blog
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} Wisteria Innovations</p>
    </footer>
  );
};

export default Footer;