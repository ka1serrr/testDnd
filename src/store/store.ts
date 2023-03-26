import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { modeSlice } from '@/slices/modeSlice/modeSlice';
import { resultSlice } from '@/slices/resultStringSlice/resultSlice';

const reducers = combineReducers({
  mode: modeSlice.reducer,
  result: resultSlice.reducer,
});

export const store = configureStore({
  reducer: reducers,
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type TypeRootState = ReturnType<typeof reducers>;
