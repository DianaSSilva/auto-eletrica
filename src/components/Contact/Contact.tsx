import { useReplayAnimationOnView } from '../../hooks/useReplayAnimationOnView';
import { contactInfo, socialLinks } from '../../utils/siteData';
import { createWhatsappLink } from '../../utils/whatsapp';
import styles from './Contact.module.css';

type ContactProps = {
  replayKey?: number;
};

export function Contact({ replayKey = 0 }: ContactProps) {
  const { animationKey, sectionRef } = useReplayAnimationOnView<HTMLElement>(replayKey);
  const whatsappLink = createWhatsappLink(contactInfo.whatsapp, contactInfo.whatsappMessage);

  return (
    <section id="contato" className={styles.contact} ref={sectionRef}>
      <div key={animationKey} className={`container ${styles.wrapper}`}>
        <article className={styles.item}>
          <div className={styles.icon} aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M12 21s7-6.1 7-12A7 7 0 0 0 5 9c0 5.9 7 12 7 12Z" />
              <circle cx="12" cy="9" r="2.5" />
            </svg>
          </div>
          <h2>Endereço</h2>
          <div className={styles.itemText}>
            <address>{contactInfo.address}</address>
          </div>
        </article>

        <article className={styles.item}>
          <div className={styles.icon} aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M7 4h10l2 3v12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7l2-3Z" />
              <path d="M9 8h6M9 12h6M9 16h3" />
            </svg>
          </div>
          <h2>Telefones</h2>
          <div className={styles.itemText}>
            <a href={`tel:${contactInfo.phone.replace(/\D/g, '')}`}>{contactInfo.phone}</a>
            <a href={whatsappLink} target="_blank" rel="noreferrer">
              WhatsApp: {contactInfo.phone}
            </a>
          </div>
        </article>

        <article className={styles.item}>
          <div className={styles.icon} aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="8" />
              <path d="M12 7v5l3 2" />
            </svg>
          </div>
          <h2>Atendimento</h2>
          <div className={styles.itemText}>
            <ul>
              {contactInfo.businessHours.map((hour) => (
                <li key={hour}>{hour}</li>
              ))}
            </ul>
          </div>
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
          <div className={styles.itemText}>
            {socialLinks.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
