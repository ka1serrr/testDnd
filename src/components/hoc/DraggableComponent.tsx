import styles from './draggableComponent.module.scss';
import { useDrag } from 'react-dnd';
import React from 'react';
import { Ints } from '@/components/UI/Ints/Ints';
import { INTS, OPERATIONS, RESULT } from '@/components/hoc/draggableTypes';
import { Operations } from '@/components/UI/Operations/Operations';
import { Equals } from '@/components/UI/Equals/Equals';
import { Result } from '@/components/UI/Result/Result';
import clsx from 'clsx';

export interface IDraggableComponent {
  type: string;
  id: string;
  index?: number;
}
// h 448px
// h result 55px

export const DraggableComponent = ({ type, id, index }: IDraggableComponent) => {
  const [{ isDragging }, drag] = useDrag({
    type: type,
    item: { id, type, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const classNames = clsx(styles.hocWrapper, isDragging && styles.hocIsDragging);

  if (type === RESULT) {
    return (
      <>
        <div className={classNames} ref={drag}>
          <Result />
        </div>
      </>
    );
  }

  if (type === OPERATIONS) {
    return (
      <>
        <div className={styles.hocWrapper} ref={drag}>
          <Operations />
        </div>
      </>
    );
  }

  if (type === INTS) {
    return (
      <>
        <div className={styles.hocWrapper} ref={drag}>
          <Ints />
        </div>
      </>
    );
  }

  return (
    <>
      <div className={styles.hocWrapper} ref={drag}>
        <Equals />
      </div>
    </>
  );
};
