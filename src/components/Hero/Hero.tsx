import { useReplayAnimationOnView } from '../../hooks/useReplayAnimationOnView';
import laraLogo from '../../assets/images/lara-logo.png';
import styles from './Hero.module.css';

type HeroProps = {
  replayKey?: number;
};

export function Hero({ replayKey = 0 }: HeroProps) {
  const { animationKey, sectionRef } = useReplayAnimationOnView<HTMLElement>(replayKey);

  return (
    <section id="inicio" className={styles.hero} ref={sectionRef}>
      <span key={`background-${animationKey}`} className={styles.background} aria-hidden="true" />
      <div key={animationKey} className={styles.grid}>
        <div className={styles.lead}>
          <div className={styles.bannerLogo}>
            <img src={laraLogo} alt="Logo da Auto Elétrica Lara" />
          </div>

          <div className={styles.content}>
            <h1 className={`section-title ${styles.title}`}>
              <span className={styles.since}>Desde 1990</span>{' '}
              <span className={styles.reference}>sendo referência em Diamantina.</span>
            </h1>
            <p className={styles.description}>
              Peças, componentes e atendimento especializado para manter seu veículo funcionando com
              segurança.
            </p>
          </div>
        </div>

        <span className={styles.visualSpace} aria-hidden="true" />
      </div>
    </section>
  );
}
