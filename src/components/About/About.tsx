import historyImage from '../../assets/images/historia.png';
import autoEletricaImage from '../../assets/images/autoEletrica.png';
import styles from './About.module.css';

const metrics = [
  { value: '1990', label: 'ano em que a história começou' },
  { value: 'Diamantina', label: 'cidade que faz parte dessa trajetória.' },
];

export function About() {


  return (
    <section id="sobre" className={styles.about}>
      <div className={`container ${styles.grid}`}>
        <div>
          <figure className={styles.historyImage}>
            <img src={historyImage} alt="Foto histórica da Auto Elétrica Lara com texto Quem Somos" />
          </figure>

          <div className={styles.metrics}>
            {metrics.map((metric) => (
              <div className={styles.metric} key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.content}>
          <h1 className={`section-label ${styles.textTitle}`}>
            Sobre a Auto Elétrica Lara
          </h1>

          <p>
            A nossa história é feita de coragem. trabalho e muito amor pelo que fazemos.
            Essa foto marca o inicio de tudo. No dia 11 de janeiro de 1990, em Diamantina, a partir do
            sonho de Toninho Lara( blusa amarela)e do apoio de sua esposa Janaina. Desde o início, a empresa foi
            construída com coragem, dedicação e respeito por cada cliente.
          </p>
          <p>
            Ao longo das décadas, a auto elétrica Lara cresceu como empresa e como família, mantendo a mesma
            essência: amizade, compromisso e vontade de fazer sempre o melhor.
          </p>

          <figure className={styles.storefrontImage}>
            <img src={autoEletricaImage} alt="Fachada da Auto Elétrica Lara em Diamantina" />
          </figure>
        </div>
      </div>
    </section>
  );
}
