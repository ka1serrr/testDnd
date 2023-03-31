import styles from './calculator.module.scss';
import { Ints } from '@/components/UI/Ints/Ints';
import { DraggableComponent } from '@/components/hoc/DraggableComponent';
import {DATA as data} from '@/data/data';

const Content = () => {
  return (
    <>
      {data.map((item , index) => (
      <DraggableComponent type={item.type} id={item.id} index={index} data={item.data} key={item.type}/>
    ))}
    </>
  )
}

export const Calculator = () => {
  return (
    <div className={styles.calculator}>
      <Content/>
    </div>
  );
};
