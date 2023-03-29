import { Calculator } from '@/components/UI/Calculator/Calculator';
import { DroppableComponent } from '@/components/UI/DroppableComponent/DroppableComponent';

export const MainPage = () => {
  return (
    <div className='container'>
      <div className='main-page-wrapper'>
        <Calculator />
        <DroppableComponent/>
      </div>
    </div>
  );
};
