import styles from './droppableComponent.module.scss';
import { useDrop } from 'react-dnd';
import { EQUALS, OPERATIONS, RESULT, INTS } from '@/components/hoc/draggableTypes';
import { useCallback, useRef, useState } from 'react';
import { DraggableComponent, IDraggableComponent } from '@/components/hoc/DraggableComponent';
import { useActions } from '@/hooks/useActions';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import clsx from 'clsx';
import { DndComponent } from '@/components/UI/DndComponent/DndComponent';
import { IDraggedItemsSliceTypes } from '@/slices/draggedItemsslice/draggedItemsSliceTypes';
import update from 'immutability-helper';

export interface IDragComponent {
  type: string;
  id: string;
  index?: number;
}

const Content = ({ className }: { className: string }) => {
  return (
    <div className={className}>
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
  const [components, setComponents] = useState<any>([]);
  const [{ isOver, canDrop }, dropRef] = useDrop({
    accept: [RESULT, OPERATIONS, INTS, EQUALS],
    drop: (item: IDragComponent) => setDnd(item),
    collect: (monitor) => ({
      canDrop: monitor.canDrop(),
      isOver: monitor.isOver(),
    }),
  });

  const setDnd = (item: IDraggableComponent) => {
    const itemIndex = components.findIndex((component: IDragComponent) => component.id === item.id);
    if (itemIndex === -1) {
      setComponents((prev: []) => [...prev, item]);
    }
  };

  const moveComponent = useCallback((dragIndex: number, hoverIndex: number) => {
    setComponents((prevCards: any) =>
      update(prevCards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevCards[dragIndex]],
        ],
      }),
    );
  }, []);

  const className = clsx(styles.dropComponent, canDrop && styles.canDrop);

  return (
    <div ref={dropRef} className={styles.wrapper}>
      {components?.length === 0 ? <Content className={className} /> : null}
      {components?.map((item: any, index: number) => (
        <DndComponent type={item.type} id={item.id} index={index} key={item.type} moveComponent={moveComponent} />
      ))}
    </div>
  );
};
