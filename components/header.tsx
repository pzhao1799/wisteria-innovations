// components/header.tsx
import Link from 'next/link';
import './header.css'; // Import CSS file

const Header = () => {
  return (
    <header className="header">
      <nav>
        <Link href="#">Wisteria Innovations</Link>
      </nav>
    </header>
  );
};

export default Header;