import { useReplayAnimationOnView } from '../../hooks/useReplayAnimationOnView';
import { services } from '../../utils/siteData';
import { ServiceIcon } from './ServiceIcon';
import styles from './Services.module.css';

type ServicesProps = {
  replayKey?: number;
};

export function Services({ replayKey = 0 }: ServicesProps) {
  const { animationKey, sectionRef } = useReplayAnimationOnView<HTMLElement>(replayKey);

  return (
    <section id="servicos" className={styles.services} ref={sectionRef}>
      <div key={animationKey} className="container">
        <div className={styles.heading}>
          <span className={`section-label ${styles.eyebrow}`}>Serviços e peças</span>
          <h2 className={`section-title ${styles.title}`}>
            Tudo para o sistema elétrico do seu veículo
          </h2>
        </div>

        <div className={styles.cards}>
          {services.map((service, index) => (
            <article
              className={styles.card}
              key={service.title}
              style={{ animationDelay: `${0.55 + index * 0.12}s` }}
            >
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
