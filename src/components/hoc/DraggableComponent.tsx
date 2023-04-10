import styles from './draggableComponent.module.scss';
import { useDrag } from 'react-dnd';
import { Ints } from '@/components/UI/Ints/Ints';
import { EQUALS, INTS, OPERATIONS, RESULT } from '@/components/hoc/draggableTypes';
import { Operations } from '@/components/UI/Operations/Operations';
import { Equals } from '@/components/UI/Equals/Equals';
import { Result } from '@/components/UI/Result/Result';
import clsx from 'clsx';
import { IDraggComponentFirstDrag } from '@/types/types';

// h 448px1
// h result 55px

export const DraggableComponent = ({ type, id, index, firstDrag }: IDraggComponentFirstDrag) => {
  const [{ isDragging, didDrop }, drag] = useDrag({
    type: type,
    item: () => {
      return { id, type, index, firstDrag };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      didDrop: monitor.didDrop(),
    }),
  });
  const classNames = clsx(styles.hocWrapper, (isDragging || didDrop) && styles.hocIsDragging);

  if (type === RESULT) {
    return (
      <>
        <div className={classNames} ref={drag} key={id}>
          <Result />
        </div>
      </>
    );
  }

  if (type === OPERATIONS) {
    return (
      <>
        <div className={classNames} ref={drag} key={id}>
          <Operations />
        </div>
      </>
    );
  }

  if (type === INTS) {
    return (
      <>
        <div className={classNames} ref={drag} key={id}>
          <Ints />
        </div>
      </>
    );
  }

  if (type === EQUALS) {
    return (
      <>
        <div className={classNames} ref={drag} key={id}>
          <Equals />
        </div>
      </>
    );
  }
  return <div>nothing</div>;
};
