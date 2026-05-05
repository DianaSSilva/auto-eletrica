import { useCallback } from 'react';

export const useSmoothScroll = () => {
  return useCallback((target: string) => {
    const element = document.querySelector(target);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);
};
