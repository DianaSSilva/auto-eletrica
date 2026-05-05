import styles from './Footer.module.css';

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.copy}`}>
        © {currentYear} Auto Elétrica Lara. Todos os direitos reservados.
      </div>
    </footer>
  );
}
