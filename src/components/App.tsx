import React from 'react';
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import { MainPage } from '@/components/page/MainPage';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

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
