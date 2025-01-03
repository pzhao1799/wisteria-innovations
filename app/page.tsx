import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/wist.svg"
          alt="Wisteria Innovations logo"
          width={280}
          height={10}
          priority
        />
        <h1 className={styles.title}>Welcome to Wisteria Innovations</h1>
        <p className={styles.description}>
          Expert consulting services for general tech and AI.
        </p>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Contact Us
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          About Us
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Services
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Blog
        </a>
      </footer>
    </div>
  );
}