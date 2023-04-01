interface IButton {
  disabled?: boolean;
  className?: string | undefined;
  value: string | number;
  handleClick: () => void;

}
import styles from './button.module.scss';

export const Button = ({ disabled, className = styles.button, value, handleClick }: IButton) => {
  return (
    <button onClick={handleClick} disabled={disabled} className={className} >
      {value}
    </button>
  );
};
