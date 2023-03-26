import styles from './calculator.module.scss';
import { Ints } from '@/components/UI/Ints/Ints';
import { DraggableComponent } from '@/components/hoc/DraggableComponent';
import { Operations } from '@/components/UI/Operations/Operations';
import { Equals } from '@/components/UI/Equals/Equals';
import { Result } from '@/components/UI/Result/Result';
export const Calculator = () => {
  return (
    <div className={styles.calculator}>
      <DraggableComponent>
        <Result />
      </DraggableComponent>
      <DraggableComponent>
        <Operations />
      </DraggableComponent>
      <DraggableComponent>
        <Ints />
      </DraggableComponent>
      <DraggableComponent>
        <Equals />
      </DraggableComponent>
    </div>
  );
};
