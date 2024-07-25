// pages/index.tsx
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.setTitle}>Home</h1>
        <nav>
          <ul>
            <li className={styles.linkstyle}>
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li className={styles.linkstyle}>
              <Link href="/settings">Settings</Link>
            </li>
          </ul>
        </nav>
      </main>
    </div>
  );
};

export default Home;
