import partsImage from '../../assets/images/automotiva.png';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <section id="inicio" className={styles.hero}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.content}>
          <h2 className="section-label">Desde 1990</h2>
          <h1 className="section-title">Elétrica automotiva com tradição em Diamantina</h1>
          <p>
            Peças, componentes e atendimento especializado para manter seu veículo funcionando com
            segurança.
          </p>
        </div>

        <figure className={styles.imageCard}>
          <img src={partsImage} alt="Peças elétricas automotivas" />
        </figure>
      </div>
    </section>
  );
}
