import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.nav_bar}>
      <div className={styles.nav_bar_content}>
        <Link href="/" className={styles.logo}>
          Logo
        </Link>
        <div className={styles.search}>
          <input className={styles.input} type="text" placeholder="Search" />
          <button className={styles.button}>Search</button>
        </div>
        <div>
          <button className={styles.button}>Login</button>
        </div>
      </div>
    </div>
  );
}
