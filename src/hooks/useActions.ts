import { modeSlice } from '@/slices/modeSlice/modeSlice';
import { useDispatch } from 'react-redux';
import bindActionCreators from 'react-redux/es/utils/bindActionCreators';
import { useMemo } from 'react';
import { resultSlice } from '@/slices/resultStringSlice/resultSlice';

const rootAction = {
  ...modeSlice.actions,
  ...resultSlice.actions,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return useMemo(() => bindActionCreators(rootAction, dispatch), [dispatch]);
};
