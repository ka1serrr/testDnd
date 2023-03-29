import styles from './droppableComponent.module.scss';
import { DragObjectFactory, useDrop } from 'react-dnd';
import { it } from 'node:test';
import { useState } from 'react';

const data = [1, 2, 3, 4];

const Content = () => {
  return (
    <div className={styles.dropComponent}>
      <img src='img/dragHere.svg' alt='' className={styles.img} />
      <h1 className={styles.title}>
        Перетащите сюда{' '}
        <span>
          любой элемент <br /> из левой панели
        </span>
      </h1>
    </div>
  );
};

export const DroppableComponent = () => {
  const [components, setComponents] = useState<number[]>([]);
  const [{ isOver }, dropRef] = useDrop({
    accept: ['result', 'calculatorItem'],
    drop: (item: { id: number }) => addCalcToBoard(item.id),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  const addCalcToBoard = (id: number): void => {
    const calcItems = data.filter((item) => id === item);
    setComponents((calc) => [...calc, calcItems[0]]);
  };
  return (
    <div ref={dropRef}>
      <Content />
    </div>
  );
};
