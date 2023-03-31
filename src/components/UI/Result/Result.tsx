import styles from './result.module.scss';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useFontDecrease } from '@/hooks/useFontDecrease';
import { IFOrData } from '@/data/data';




const Content = ({data}: IFOrData) => {
  const { showingValue } = useTypedSelector((state) => state.result);
  const { ref, fontSize } = useFontDecrease({ initialFontSize: 36, maxWidth: 241, text: showingValue });
  return (
    <>
      {data.map(item => (
        <div className={styles.result}>
          <p ref={ref} style={{ fontSize }}>
            {showingValue}
          </p>
        </div>
      ))}
    </>
  );
}


export const Result = ({data}: IFOrData) => {
  return <Content data={data}/>
};

