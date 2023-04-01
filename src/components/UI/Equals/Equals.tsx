import styles from './equals.module.scss';
import { Button } from '@/components/UI/Button/Button';
import { useActions } from '@/hooks/useActions';
import { IFOrData } from '@/data/data';




const Content = ({data, }: IFOrData) => {
  const { makeResult } = useActions();
  return (
    <>
      {data.map(btn => (
        <Button key={btn.value} value={btn.value} handleClick={makeResult} className={styles['equal']} />
      ))}
    </>
  )
}



export const Equals = ({data, }: IFOrData) => {
  return <Content data={data}/>
};
