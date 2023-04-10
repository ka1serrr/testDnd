import styles from './result.module.scss';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useFontDecrease } from '@/hooks/useFontDecrease';
import { RESULT as data } from '@/data/data';

const Content = () => {
  const { showingValue } = useTypedSelector((state) => state.result);
  const { ref, fontSize } = useFontDecrease({ initialFontSize: 36, maxWidth: 241, text: showingValue });
  return (
    <>
      {data.map((item: any) => (
        <div className={styles.result} key={item.id}>
          <p ref={ref} style={{ fontSize }}>
            {showingValue}
          </p>
        </div>
      ))}
    </>
  );
};

export const Result = () => {
  return <Content />;
};
