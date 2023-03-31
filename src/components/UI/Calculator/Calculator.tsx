import styles from './calculator.module.scss';
import { Ints } from '@/components/UI/Ints/Ints';
import { DraggableComponent } from '@/components/hoc/DraggableComponent';
import { Operations } from '@/components/UI/Operations/Operations';
import { Equals } from '@/components/UI/Equals/Equals';
import { Result } from '@/components/UI/Result/Result';
import { RESULT, OPERATIONS, INTS, EQUALS } from '@/components/hoc/draggableTypes';

export const Calculator = () => {
  return (
    <div className={styles.calculator}>
      <DraggableComponent type={RESULT} id={1} index={0}>
        <Result />
      </DraggableComponent>
      <DraggableComponent type={OPERATIONS} id={2} index={1}>
        <Operations />
      </DraggableComponent>
      <DraggableComponent type={INTS} id={3} index={2}>
        <Ints />
      </DraggableComponent>
      <DraggableComponent type={EQUALS} id={4} index={3}>
        <Equals />
      </DraggableComponent>
    </div>
  );
};
