import styles from './dndComponent.module.scss';
import { IDraggableComponent } from '@/components/hoc/DraggableComponent';
import { useDrag, useDrop, XYCoord } from 'react-dnd';
import { EQUALS, INTS, OPERATIONS, RESULT } from '@/components/hoc/draggableTypes';

import { useRef } from 'react';
import { Result } from '@/components/UI/Result/Result';
import { Operations } from '@/components/UI/Operations/Operations';
import { Ints } from '@/components/UI/Ints/Ints';
import { Equals } from '@/components/UI/Equals/Equals';
import clsx from 'clsx';
import { IDragComponent } from '@/components/UI/DroppableComponent/DroppableComponent';

interface IDnDComponent extends IDraggableComponent {
  moveComponent: any;
}

export const DndComponent = ({ type, id, index, moveComponent }: IDnDComponent) => {
  const [{ isDragging, didDrop }, drag] = useDrag({
    type,
    item: () => {
      return { id, index, type };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      didDrop: monitor.didDrop(),
    }),
  });
  const types = [RESULT, OPERATIONS, INTS, EQUALS];
  const ref = useRef<HTMLDivElement>(null);
  const [{ handlerId, isOver }, drop] = useDrop({
    accept: types,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
        isOver: monitor.isOver(),
      };
    },
    hover(item: any, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      const clientOffset = monitor.getClientOffset();

      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

      // @ts-ignore
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      // @ts-ignore
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      moveComponent(item, dragIndex, hoverIndex);

      console.log(dragIndex + ' drag');
      console.log(hoverIndex + ' hover');

      item.index = hoverIndex;
    },
  });
  drag(drop(ref));

  const classNames = clsx(styles.hocWrapper, isDragging && styles.hocIsDragging);

  if (type === RESULT) {
    return (
      <>
        <div className={classNames} ref={ref} data-handler-id={handlerId} key={id}>
          <Result id={id} />
        </div>
      </>
    );
  }

  if (type === OPERATIONS) {
    return (
      <>
        <div className={classNames} ref={ref} data-handler-id={handlerId} key={id}>
          <Operations />
        </div>
      </>
    );
  }

  if (type === INTS) {
    return (
      <>
        <div className={classNames} ref={ref} data-handler-id={handlerId} key={id}>
          <Ints />
        </div>
      </>
    );
  }

  if (type === EQUALS) {
    return (
      <>
        <div className={classNames} ref={ref} data-handler-id={handlerId} key={id}>
          <Equals />
        </div>
      </>
    );
  }
  return <div>nothing</div>;
};
