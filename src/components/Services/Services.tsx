import { services } from '../../utils/siteData';
import { ServiceIcon } from './ServiceIcon';
import styles from './Services.module.css';

export function Services() {
  return (
    <section id="servicos" className={styles.services}>
      <div className="container">
        <div className={styles.heading}>
          <span className="section-label">Serviços e peças</span>
          <h2 className="section-title">Tudo para o sistema elétrico do seu veículo</h2>

        </div>

        <div className={styles.cards}>
          {services.map((service) => (
            <article className={styles.card} key={service.title}>
              <div className={styles.icon}>
                <ServiceIcon name={service.icon} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
