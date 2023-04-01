import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { modeSlice } from '@/slices/modeSlice/modeSlice';
import { resultSlice } from '@/slices/resultStringSlice/resultSlice';
import { draggedItemsSlice } from '@/slices/draggedItemsslice/draggedItemsSlice';

const reducers = combineReducers({
  mode: modeSlice.reducer,
  result: resultSlice.reducer,
  draggedItems: draggedItemsSlice.reducer,
});

export const store = configureStore({
  reducer: reducers,
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type TypeRootState = ReturnType<typeof reducers>;
