import { useEffect, useState } from 'react';
import { useScrollAnimation } from './useScrollAnimation';

export function useCountUp(end: number, duration = 1500, suffix = '') {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>(0.3);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };
    requestAnimationFrame(step);
  }, [isVisible, end, duration]);

  return { ref, value: `${count}${suffix}` };
}
