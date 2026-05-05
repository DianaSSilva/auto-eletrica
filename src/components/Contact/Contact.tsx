import { contactInfo, socialLinks } from '../../utils/siteData';
import { createWhatsappLink } from '../../utils/whatsapp';
import styles from './Contact.module.css';

export function Contact() {
  const whatsappLink = createWhatsappLink(contactInfo.whatsapp, contactInfo.whatsappMessage);

  return (
    <section id="contato" className={styles.contact}>
      <div className={`container ${styles.wrapper}`}>
        <article className={styles.item}>
          <div className={styles.icon} aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M12 21s7-6.1 7-12A7 7 0 0 0 5 9c0 5.9 7 12 7 12Z" />
              <circle cx="12" cy="9" r="2.5" />
            </svg>
          </div>
          <h2>Endereço</h2>
          <address>{contactInfo.address}</address>
        </article>

        <article className={styles.item}>
          <div className={styles.icon} aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M7 4h10l2 3v12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7l2-3Z" />
              <path d="M9 8h6M9 12h6M9 16h3" />
            </svg>
          </div>
          <h2>Telefones</h2>
          <a href={`tel:${contactInfo.phone.replace(/\D/g, '')}`}>{contactInfo.phone}</a>
          <a href={whatsappLink} target="_blank" rel="noreferrer">
            WhatsApp: {contactInfo.phone}
          </a>
        </article>

        <article className={styles.item}>
          <div className={styles.icon} aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="8" />
              <path d="M12 7v5l3 2" />
            </svg>
          </div>
          <h2>Atendimento</h2>
          <ul>
            {contactInfo.businessHours.map((hour) => (
              <li key={hour}>{hour}</li>
            ))}
          </ul>
        </article>

        <article className={styles.item}>
          <div className={styles.icon} aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <rect x="5" y="5" width="14" height="14" rx="4" />
              <circle cx="12" cy="12" r="3" />
              <path d="M16.5 7.5h.01" />
            </svg>
          </div>
          <h2>Redes sociais</h2>
          {socialLinks.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </article>
      </div>
    </section>
  );
}
