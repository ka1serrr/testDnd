import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IDragComponent } from '@/components/UI/DroppableComponent/DroppableComponent';
import { IDraggedItemsSliceTypes } from '@/slices/draggedItemsslice/draggedItemsSliceTypes';
import { act } from 'react-dom/test-utils';

const initialState: IDraggedItemsSliceTypes = {
  items: [],
};

export const draggedItemsSlice = createSlice({
  name: 'DraggedItems',
  initialState,
  reducers: {
    setItems: (state, action: PayloadAction<IDragComponent>) => {
      const itemIndex = state.items.findIndex((item) => item.id === action.payload.id);
      if (itemIndex === -1) {
        state.items.push(action.payload);
      }
    },
  },
});
