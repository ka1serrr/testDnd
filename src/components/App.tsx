import React from 'react';
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import { MainPage } from '@/components/page/MainPage';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
// TODO: короче нахуй, нужно всё переписать. В дату добавить type и подогнать всё под определенный массив. Создать один общий компонент (можно на базе DraggableComponent), содержание которого будет рендериться в зависимости от приходимого type.

const App = () => {
  return (
    <Provider store={store}>
      <DndProvider backend={HTML5Backend}>
        <MainPage />
      </DndProvider>
    </Provider>
  );
};

export default App;
