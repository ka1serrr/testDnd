import styles from './droppableComponent.module.scss';
import { useDrop } from 'react-dnd';
import { EQUALS, OPERATIONS, RESULT, INTS } from '@/components/hoc/draggableTypes';
import { useRef, useState } from 'react';
import { DraggableComponent, IDraggableComponent } from '@/components/hoc/DraggableComponent';
import { useActions } from '@/hooks/useActions';
import { useTypedSelector } from '@/hooks/useTypedSelector';

export interface IDragComponent {
  type: string;
  id: string;
  index?: number;
}

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
  const ref = useRef<HTMLDivElement>(null);

  const { setItems } = useActions();
  const components = useTypedSelector((state) => state.draggedItems.items);

  const [{ isOver, handlerId }, dropRef] = useDrop({
    accept: [RESULT, OPERATIONS, INTS, EQUALS],
    drop: (item: IDragComponent) => setItems(item),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      handlerId: monitor.getHandlerId(),
    }),
  });

  // const setDnd = (item: IDraggableComponent) => {
  //   const itemIndex = components.findIndex((component: IDragComponent) => component.id === item.id);
  //   if (itemIndex === -1) {
  //     setComponents((prev: []) => [...prev, item]);
  //   }
  // };

  return (
    <div ref={dropRef} className={styles.wrapper}>
      {components.length === 0 ? <Content /> : null}
      {components.map((item: any, index: number) => (
        <DraggableComponent type={item.type} id={item.id} index={index} />
      ))}
    </div>
  );
};
