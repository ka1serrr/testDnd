import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IResultSlice, TOperations } from '@/slices/resultStringSlice/resultSliceType';

const initialState: IResultSlice = {
  result: '',
  showingValue: '0',
  lastAddedIsOperator: false,
  operation: '',
};

const operations = ['+', '-', '*', '/'];

const setResult = (state: string, payload: string): string => {
  if (payload == '.' && state == '0') {
    return state + payload;
  }

  if (state == '0') {
    return state.slice(1) + payload;
  }

  return state + payload;
};
const checkComma = (str: string): string => {
  if (str.includes(',')) {
    str = str.replace(/([^\d]|^)0(?=.)/g, (match, p1) => {
      if (p1 && /[+\-*/]/.test(p1)) {
        return p1 + '0';
      } else {
        return '0';
      }
    });
  }
  return str;
};

export const resultSlice = createSlice({
  name: 'result',
  initialState,
  reducers: {
    setResult: (state, action: PayloadAction<string>) => {
      if (state.operation === '=') {
        state.showingValue = '0';
        state.operation = '';
      }
      if (operations.includes(state.operation)) {
        state.showingValue = '';
        state.operation = '';
      }
      checkComma(state.showingValue);
      checkComma(state.result);
      state.lastAddedIsOperator = false;
      state.result = setResult(state.result, action.payload);
      state.showingValue = setResult(state.showingValue, action.payload);
      // state.showingValue += action.payload;
    },
    makeResult: (state) => {
      state.result = eval(state.result);
      state.showingValue = state.result;
      state.result = '0';
      state.operation = '=';
    },
    operate: (state, action: PayloadAction<TOperations>) => {
      if (state.operation === '=') {
        state.result = '0';
        state.lastAddedIsOperator = false;
      }

      state.lastAddedIsOperator = true;
      if (state.operation === action.payload) {
        return;
      } else if (operations.includes(action.payload) && operations.includes(state.operation)) {
        state.result = state.result.slice(0, -1) + action.payload;
        state.operation = action.payload;
      } else {
        state.result += action.payload;
        state.operation = action.payload;
      }
    },
    resetResult: (state) => {
      state.result = '0';
      state.showingValue = '0';
    },
  },
});
