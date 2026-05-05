import { About } from '../../components/About';
import { Contact, FloatingWhatsApp } from '../../components/Contact';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Hero } from '../../components/Hero';
import { Services } from '../../components/Services';
import styles from './Home.module.css';

export function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
