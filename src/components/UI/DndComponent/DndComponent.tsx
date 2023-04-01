import styles from './dndComponent.module.scss';

interface IDraggableComponent {
  type: string;
  id: string;
  index?: number;
}

export const DndComponent = ({ type, id, index }: IDraggableComponent) => {
  return <div></div>;
};
