import { useState } from 'react';
import { contactInfo, navItems } from '../../utils/siteData';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';
import { createWhatsappLink } from '../../utils/whatsapp';
import styles from './Header.module.css';

type HeaderProps = {
  onNavigate?: (href: string) => void;
};

export function Header({ onNavigate }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHref, setActiveHref] = useState('#inicio');
  const scrollTo = useSmoothScroll();
  const whatsappLink = createWhatsappLink(contactInfo.whatsapp, contactInfo.whatsappMessage);

  const handleNavClick = (href: string) => {
    setActiveHref(href);
    scrollTo(href);
    onNavigate?.(href);
    setIsOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={`container ${styles.wrapper}`}>
        <a className={styles.brand} href="#inicio" onClick={() => handleNavClick('#inicio')}>
          <span>Auto Elétrica Lara</span>
        </a>

        <button
          className={styles.menuButton}
          type="button"
          aria-label="Abrir menu de navegação"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`${styles.nav} ${isOpen ? styles.navOpen : ''}`} aria-label="Menu principal">
          {navItems.map((item) => (
            <a
              className={activeHref === item.href ? styles.activeLink : undefined}
              key={item.href}
              href={item.href}
              onClick={(event) => {
                event.preventDefault();
                handleNavClick(item.href);
              }}
            >
              {item.label}
            </a>
          ))}
          <a className={styles.cta} href={whatsappLink} target="_blank" rel="noreferrer">
            Orçamento
          </a>
        </nav>
      </div>
    </header>
  );
}
