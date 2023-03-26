import styles from './equals.module.scss';
import { EQUAl } from '@/data/data';
import { Button } from '@/components/UI/Button/Button';
import { useActions } from '@/hooks/useActions';
export const Equals = () => {
  const { makeResult } = useActions();
  return <Button handleClick={makeResult} value={EQUAl.value} className={styles['equal']} />;
};
