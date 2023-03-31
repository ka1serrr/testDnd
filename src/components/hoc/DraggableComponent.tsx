import styles from './draggableComponent.module.scss';
import { useDrag } from 'react-dnd';
import React from 'react';
import { Ints } from '@/components/UI/Ints/Ints';
import { TDataItem } from '@/data/data';
import { EQUALS, INTS, OPERATIONS, RESULT } from '@/components/hoc/draggableTypes';
import { Operations } from '@/components/UI/Operations/Operations';
import { Equals } from '@/components/UI/Equals/Equals';
import { Result } from '@/components/UI/Result/Result';

interface IDraggableComponent {
  type: string;
  id: string;
  data: TDataItem;
  index?: number;
}
// h 448px
// h result 55px

export const DraggableComponent = ({ type, id, data, index }: IDraggableComponent) => {
  const [{ isDragging }, drag] = useDrag({
    type: type,
    item: { id, type, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  if (type === RESULT) {
    return  (
      <>
        <div className={styles.hocWrapper} ref={drag}>
          <Result data={data}/>
        </div>
      </>
    )
  }

  if (type === OPERATIONS) {
    return (
      <>
        <div className={styles.hocWrapper} ref={drag}>
          <Operations data={data}/>
        </div>
      </>
    )
  }

  if (type === INTS) {
    return (
      <>
        <div className={styles.hocWrapper} ref={drag}>
          <Ints data={data}/>
        </div>
      </>
    );
  }

  return (
    <>
      <div className={styles.hocWrapper} ref={drag}>
        <Equals data={data}/>
      </div>
    </>
  )
};
