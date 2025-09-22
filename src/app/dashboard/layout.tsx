import Header from "./_components/Header";
import Sidebar from "./_components/Sidebar";
import styles from "./layout.module.scss";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${styles.container} bg-neutral-light`}>
      <nav className={`${styles.nav}`}>
        <Sidebar />
      </nav>
      <div className={`${styles.content}`}>
        <header className={`${styles.content__header}`}>
          <Header />
        </header>
        <main className={`${styles.content__main}`}>{children}</main>
      </div>
    </div>
  );
}
