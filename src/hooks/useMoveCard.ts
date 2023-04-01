import { useCallback } from 'react';
import { useActions } from '@/hooks/useActions';
import { IDraggedItemsSliceTypes } from '@/slices/draggedItemsslice/draggedItemsSliceTypes';
import update from 'immutability-helper';

const { setItems } = useActions();
export const useMoveCard = useCallback((dragIndex: number, hoverIndex: number) => {
  setItems((prevItems: IDraggedItemsSliceTypes) => {
    update(prevItems, {
      $splice: [
        [dragIndex, 1],
        [hoverIndex, 0, prevItems[dragIndex]],
      ],
    });
  });
}, []);
