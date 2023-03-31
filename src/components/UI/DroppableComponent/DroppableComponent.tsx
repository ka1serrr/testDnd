import styles from './droppableComponent.module.scss';
import { useDrop } from 'react-dnd';
import { EQUALS, OPERATIONS, RESULT, INTS } from '@/components/hoc/draggableTypes';
import { useRef, useState } from 'react';
import { DraggableComponent } from '@/components/hoc/DraggableComponent';
import { Operations } from '@/components/UI/Operations/Operations';
import { Result } from '@/components/UI/Result/Result';
import { Equals } from '@/components/UI/Equals/Equals';
import { Ints } from '@/components/UI/Ints/Ints';

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
  const [components, setComponents] = useState<any>([]);
  const [{ isOver, handlerId }, dropRef] = useDrop({
    accept: [RESULT, OPERATIONS, INTS, EQUALS],
    drop: (item: unknown) => random(item),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      handlerId: monitor.getHandlerId(),
    }),
  });

  const random = (item: any) => {
    const itemIndex = components.findIndex((component: any) => component.id === item.id);
    if (itemIndex === -1) {
      setComponents((prev: []) => [...prev, item]);
    }
  };

  const renderDragItems = (item: any, index: number) => {
    const { type, id } = item;
    switch (type) {
      case OPERATIONS:
        return (
          <DraggableComponent key={id} type={type} id={id} index={index}>
            <Operations />
          </DraggableComponent>
        );
      case RESULT:
        return (
          <DraggableComponent type={type} id={id} key={id} index={index}>
            <Result />
          </DraggableComponent>
        );
      case EQUALS:
        return (
          <DraggableComponent type={type} id={id} key={id} index={index}>
            <Equals />
          </DraggableComponent>
        );
      case INTS:
        return (
          <DraggableComponent type={type} id={id} key={id} index={index}>
            <Ints />
          </DraggableComponent>
        );
      default:
        return null;
    }
  };
  return (
    <div ref={dropRef} className={styles.wrapper}>
      {components.length === 0 ? <Content /> : null}
      {components.map((item: any, i: number) => renderDragItems(item, i))}
    </div>
  );
};
