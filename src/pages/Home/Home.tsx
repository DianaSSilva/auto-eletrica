import { useState } from 'react';
import { About } from '../../components/About';
import { Contact, FloatingWhatsApp } from '../../components/Contact';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Hero } from '../../components/Hero';
import { Services } from '../../components/Services';
import styles from './Home.module.css';

export function Home() {
  const [heroReplayKey, setHeroReplayKey] = useState(0);
  const [servicesReplayKey, setServicesReplayKey] = useState(0);
  const [aboutReplayKey, setAboutReplayKey] = useState(0);
  const [contactReplayKey, setContactReplayKey] = useState(0);

  const handleNavigate = (href: string) => {
    if (href === '#inicio') {
      setHeroReplayKey((current) => current + 1);
    }

    if (href === '#servicos') {
      setServicesReplayKey((current) => current + 1);
    }

    if (href === '#sobre') {
      setAboutReplayKey((current) => current + 1);
    }

    if (href === '#contato') {
      setContactReplayKey((current) => current + 1);
    }
  };

  return (
    <div className={styles.page}>
      <Header onNavigate={handleNavigate} />
      <main>
        <Hero replayKey={heroReplayKey} />
        <Services replayKey={servicesReplayKey} />
        <About replayKey={aboutReplayKey} />
        <Contact replayKey={contactReplayKey} />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
