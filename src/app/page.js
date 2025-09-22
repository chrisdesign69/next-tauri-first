import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
Header
      </header>
      <main className={styles.main}>
Main here
      </main>
      <footer className={styles.footer}>
Footer
      </footer>
    </div>
  );
}
