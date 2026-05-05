import { contactInfo } from '../../utils/siteData';
import { createWhatsappLink } from '../../utils/whatsapp';
import styles from './FloatingWhatsApp.module.css';

export function FloatingWhatsApp() {
  const whatsappLink = createWhatsappLink(contactInfo.whatsapp, contactInfo.whatsappMessage);

  return (
    <a
      className={styles.floating}
      href={whatsappLink}
      target="_blank"
      rel="noreferrer"
      aria-label="Chamar a Auto Elétrica Lara no WhatsApp"
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 3a8.7 8.7 0 0 0-7.5 13.1L3.6 21l5-1.2A8.7 8.7 0 1 0 12 3Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M8.9 8.4c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.6 1.4c.1.3.1.5-.1.7l-.4.5c.6 1.1 1.4 1.9 2.6 2.5l.5-.5c.2-.2.4-.2.7-.1l1.4.7c.3.1.4.3.4.6v.4c0 .4-.2.7-.5.9-.5.3-1.2.4-2.1.2-2.6-.6-5.1-3-5.7-5.6-.2-.8-.1-1.5.4-2.3Z"
          fill="currentColor"
        />
      </svg>
    </a>
  );
}
