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

interface IDnDComponent extends IDraggableComponent {
  moveComponent: any;
}

export const DndComponent = ({ type, id, index, moveComponent }: IDnDComponent) => {
  const ref = useRef<HTMLDivElement>(null);
  const [{ handlerId }, drop] = useDrop({
    accept: [RESULT, OPERATIONS, INTS, EQUALS],
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item: any, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }

      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      // Get vertical middle
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      // Determine mouse position
      const clientOffset = monitor.getClientOffset();

      // Get pixels to the top
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%

      // Dragging downwards
      // @ts-ignore
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      // Dragging upwards
      // @ts-ignore
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      // Time to actually perform the action
      moveComponent(dragIndex, hoverIndex);

      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: type,
    item: { id, index },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  drag(drop(ref));

  const classNames = clsx(styles.hocWrapper, isDragging && styles.hocIsDragging);

  if (type === RESULT) {
    return (
      <>
        <div className={classNames} ref={ref} data-handler-id={handlerId}>
          <Result />
        </div>
      </>
    );
  }

  if (type === OPERATIONS) {
    return (
      <>
        <div className={classNames} ref={ref} data-handler-id={handlerId}>
          <Operations />
        </div>
      </>
    );
  }

  if (type === INTS) {
    return (
      <>
        <div className={classNames} ref={ref} data-handler-id={handlerId}>
          <Ints />
        </div>
      </>
    );
  }

  return (
    <>
      <div className={classNames} ref={ref} data-handler-id={handlerId}>
        <Equals />
      </div>
    </>
  );
};
