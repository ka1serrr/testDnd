import styles from './result.module.scss';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useFontDecrease } from '@/hooks/useFontDecrease';

export const Result = () => {
  const { showingValue } = useTypedSelector((state) => state.result);
  const { ref, fontSize } = useFontDecrease({ initialFontSize: 36, maxWidth: 241, text: showingValue });
  return (
    <div className={styles.result} ref={ref} style={{ fontSize }}>
      {showingValue}
    </div>
  );
};
