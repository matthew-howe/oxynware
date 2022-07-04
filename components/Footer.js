import styles from "../styles/Home.module.css";

export default function Footer() {
  return (

  <footer className={styles.footer}>
    <a
      href="mailto: oxynware@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      oxynware@gmail.com
      <span className={styles.logo}>
      </span>
    </a>
  </footer>
  )
}
