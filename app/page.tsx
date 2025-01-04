// page.tsx
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
        />
        <h1 className={styles.title}>Wisteria Innovations</h1>
        <p className={styles.description}>
          Expert consulting services for AI and technology solutions
        </p>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="#"
            rel="noopener noreferrer"
          >
            Learn More
          </a>
          <a
            href="#"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Contact Us
          </a>
        </div>
      </main>
    </div>
  );
}