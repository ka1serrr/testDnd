import styles from './ints.module.scss';
import { INT_DATA } from '@/data/data';
import { Button } from '@/components/UI/Button/Button';
import { useActions } from '@/hooks/useActions';
import { useTypedSelector } from '@/hooks/useTypedSelector';

const Content = () => {
  const { setResult } = useActions();
  const result = useTypedSelector((state) => state.result.result);
  const showingValue = useTypedSelector((state) => state.result.showingValue);
  return (
    <div className={styles.content}>
      {INT_DATA.map((btn) => {
        const isDisabled = showingValue == '0' && btn.text == '0';
        return (
          <Button disabled={isDisabled} handleClick={() => setResult(btn.value)} key={btn.value} value={btn.text} />
        );
      })}
    </div>
  );
};

export const Ints = () => {
  return <Content />;
};
