import styles from './draggableComponent.module.scss';
import { useDrag } from 'react-dnd';
import React from 'react';
import { RESULT } from '@/components/hoc/draggableTypes';
interface IDraggableComponent {
  children: JSX.Element;
  type: string;
  id: number;
}
// h 448px
// h result 55px

export const DraggableComponent = ({ children, type, id }: IDraggableComponent) => {
  const [{ isDragging }, drag] = useDrag({
    type,
    item: { id, type },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const constraintsResult = {
    top: 0,
  };
  const constraintsOthers = {
    top: 80,
  };
  // TODO: отдельные функции для компонентов в drop и не в drop. В функциях будет меняеться состояние можно ли нажать на кнопку или нет.
  // Т. е. нужно создать props соответствующий ещё и стейт.
  return (
    <div className={styles.hocWrapper} ref={drag}>
      {React.cloneElement(children)}
    </div>
  );
};
