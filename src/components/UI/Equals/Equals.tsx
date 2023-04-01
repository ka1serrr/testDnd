import styles from './equals.module.scss';
import { Button } from '@/components/UI/Button/Button';
import { useActions } from '@/hooks/useActions';
import { EQUAL as data } from '@/data/data';




const Content = () => {
  const { makeResult } = useActions();
  return (
    <>
      {data.map(btn => (
        <Button key={btn.value} value={btn.value} handleClick={makeResult} className={styles['equal']} />
      ))}
    </>
  )
}



export const Equals = () => {
  return <Content />
};
