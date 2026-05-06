import { useEffect, useRef, useState } from 'react';

const REPLAY_COOLDOWN_MS = 90_000;

export const useReplayAnimationOnView = <Element extends HTMLElement>(replayKey = 0) => {
  const sectionRef = useRef<Element>(null);
  const wasVisibleRef = useRef(false);
  const lastReplayAtRef = useRef<number | null>(null);
  const [animationKey, setAnimationKey] = useState(0);

  const replayAnimation = () => {
    const now = Date.now();
    const lastReplayAt = lastReplayAtRef.current;

    if (lastReplayAt !== null && now - lastReplayAt < REPLAY_COOLDOWN_MS) {
      return;
    }

    lastReplayAtRef.current = now;
    setAnimationKey((current) => current + 1);
  };

  useEffect(() => {
    if (replayKey > 0) {
      replayAnimation();
    }
  }, [replayKey]);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !wasVisibleRef.current) {
          wasVisibleRef.current = true;
          replayAnimation();
          return;
        }

        if (!entry.isIntersecting) {
          wasVisibleRef.current = false;
        }
      },
      { threshold: 0.45 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return { animationKey, sectionRef };
};
