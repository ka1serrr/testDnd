import styles from './ints.module.scss';
import { IFOrData } from '@/data/data';
import { Button } from '@/components/UI/Button/Button';
import { useActions } from '@/hooks/useActions';
import { useTypedSelector } from '@/hooks/useTypedSelector';


const Content = ({data}: IFOrData) => {
  const { setResult } = useActions();
  const showingValue = useTypedSelector((state) => state.result.showingValue);
  return (
    <div className={styles.content}>
      {data.map((btn) => {
        const isDisabled = showingValue == '0' && btn.text == '0';
        return (
          <Button disabled={isDisabled} handleClick={() => setResult(btn.value)} key={btn.value} value={btn.text} />
        );
      })}
    </div>
  );
};

export const Ints = ({data}: IFOrData) => {
  return <Content data={data} />;
};
