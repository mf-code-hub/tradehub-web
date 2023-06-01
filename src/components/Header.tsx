import styles from "./Header.module.css";
import feedLogo from "../assets/pipeline-img.webp"
export function Header() {
  return (
    <header className={styles.header}>
      <img src={feedLogo} alt="Logotipo do Feed"/>
    </header>
  );
}
