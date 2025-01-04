// components/header.tsx
import Link from 'next/link';
import styles from './components.module.css'; // Import shared CSS module

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <Link href="#">Wisteria Innovations</Link>
      </nav>
    </header>
  );
};

export default Header;