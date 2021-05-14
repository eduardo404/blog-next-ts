import Link from "next/link";
import styles from "./styles/Header.module.scss";

const Header: React.FC = () => {
  return (
    <header>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Personal Blog</h1>
        <p className={styles.subtitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <nav className={styles.nav}>
        <Link href="/">
          Home
        </Link>
        <div className={styles.divider} />
        <Link href="/">
          All Posts
        </Link>
        <div className={styles.divider} />
        <Link href="/">
          About
        </Link>
        <div className={styles.divider} />
        <Link href="/">
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;