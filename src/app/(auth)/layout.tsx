import styles from "./layout.module.scss";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className={`${styles.header}`}>
        <span className={`${styles.header__logo}`}>Goforumroh</span>
        <div className={`${styles.header__info}`}>
          <button className={`${styles.header__info__languageBtn}`}>
            <span className="text-success-main font-bold">En</span>
          </button>
          <button className={`${styles.header__info__helpBtn}`}>Help</button>
        </div>
      </header>
      <section>{children}</section>
    </>
  );
}
