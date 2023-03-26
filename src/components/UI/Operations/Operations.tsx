import styles from './operations.module.scss';
import { OPERATIONS } from '@/data/data';
import { Button } from '@/components/UI/Button/Button';
import { useActions } from '@/hooks/useActions';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import clsx from 'clsx';

const Content = () => {
  const operationState = useTypedSelector((state) => state.result.operation);
  const { operate } = useActions();
  return (
    <div className={styles.operations}>
      {OPERATIONS.map((operation) => {
        const operationButton = clsx(
          styles.operationButton,
          operation.value == operationState && styles.operationButtonActive,
        );

        return (
          <Button
            handleClick={() => operate(operation.value)}
            key={operation.text}
            value={operation.text}
            className={operationButton}
          />
        );
      })}
    </div>
  );
};
export const Operations = () => {
  return <Content />;
};
