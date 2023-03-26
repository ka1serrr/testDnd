import { useState, useEffect, useRef } from 'react';
import { useTypedSelector } from '@/hooks/useTypedSelector';

interface IUseFontDecrease {
  initialFontSize: number;
  maxWidth: number;
  text: string;
}

export const useFontDecrease = ({ initialFontSize, maxWidth, text }: IUseFontDecrease) => {
  const [fontSize, setFontSize] = useState(initialFontSize);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const width = ref.current?.offsetWidth;
    if (!width) return;

    if (width > maxWidth) {
      const newFontSIze = Math.floor((fontSize * maxWidth) / width);
      setFontSize(newFontSIze);
    } else {
      setFontSize(initialFontSize);
    }
  }, [maxWidth, initialFontSize, text]);

  return { fontSize, ref };
};
