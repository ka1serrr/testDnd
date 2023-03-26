export type TOperations = '=' | '+' | '-' | '*' | '/';

export interface IResultSlice {
  result: string;
  showingValue: string;
  operation: TOperations | '';
  lastAddedIsOperator: boolean;
}
