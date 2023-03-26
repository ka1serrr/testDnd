import styles from './draggableComponent.module.scss';
interface IDraggableComponent {
  children: JSX.Element;
}
export const DraggableComponent = ({ children }: IDraggableComponent) => {
  // TODO: отдельные функции для компонентов в drop и не в drop. В функциях будет меняеться состояние можно ли нажать на кнопку или нет.
  // Т. е. нужно создать props соответствующий ещё и стейт.
  return <div className={styles.hocWrapper}>{children}</div>;
};
