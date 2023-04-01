import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IDragComponent } from '@/components/UI/DroppableComponent/DroppableComponent';

const initialState: { items: IDragComponent[] } = {
  items: [],
};

export const draggedItemsSlice = createSlice({
  name: 'DraggedItems',
  initialState,
  reducers: {
    setItems: (state, action: PayloadAction<any>) => {
      const itemIndex = state.items.findIndex((item) => item.id === action.payload.id);
      if (itemIndex === -1) {
        state.items.push(action.payload);
      }
    },
  },
});
